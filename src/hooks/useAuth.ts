import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import type { User } from "@supabase/supabase-js";

async function resolveAdminRole(userId: string) {
  const { data, error } = await supabase.rpc("has_role", {
    _user_id: userId,
    _role: "admin",
  });

  if (error) throw error;
  return !!data;
}

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    let initialized = false;
    let activeRequest = 0;

    const syncAuthState = async (nextUser: User | null) => {
      const requestId = ++activeRequest;

      if (!isMounted) return;

      setLoading(true);
      setUser(nextUser);

      if (!nextUser) {
        setIsAdmin(false);
        setLoading(false);
        return;
      }

      try {
        const nextIsAdmin = await resolveAdminRole(nextUser.id);
        if (!isMounted || requestId !== activeRequest) return;
        setIsAdmin(nextIsAdmin);
      } catch (error) {
        if (!isMounted || requestId !== activeRequest) return;
        console.error("Failed to resolve admin role", error);
        setIsAdmin(false);
      } finally {
        if (isMounted && requestId === activeRequest) {
          setLoading(false);
        }
      }
    };

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!initialized) return;
      void syncAuthState(session?.user ?? null);
    });

    void supabase.auth.getSession().then(({ data: { session } }) => {
      initialized = true;
      void syncAuthState(session?.user ?? null);
    });

    return () => {
      isMounted = false;
      subscription.unsubscribe();
    };
  }, []);

  const signIn = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    return { error };
  };

  const signOut = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setIsAdmin(false);
  };

  return { user, isAdmin, loading, signIn, signOut };
}
