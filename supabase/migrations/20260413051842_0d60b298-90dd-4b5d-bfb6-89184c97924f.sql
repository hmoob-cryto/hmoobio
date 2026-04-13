
-- Create role enum
CREATE TYPE public.app_role AS ENUM ('admin', 'moderator', 'user');

-- Create user_roles table
CREATE TABLE public.user_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role app_role NOT NULL,
  UNIQUE (user_id, role)
);
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Security definer function to check roles
CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role app_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  )
$$;

-- RLS for user_roles: only admins can view roles
CREATE POLICY "Admins can view all roles" ON public.user_roles
  FOR SELECT TO authenticated
  USING (public.has_role(auth.uid(), 'admin'));

-- Add write policies for ALL content tables
-- Helper: create admin write policies for each table
DO $$
DECLARE
  tbl text;
BEGIN
  FOR tbl IN SELECT unnest(ARRAY[
    'translations','vision_milestones','compatible_wallets','site_links','site_settings',
    'boost_plans','boost_benefits','ecosystem_items','faqs','how_it_works_steps',
    'security_features','site_features','site_stats','testimonials','trust_indicators','trust_partners'
  ])
  LOOP
    EXECUTE format('CREATE POLICY "Admins can insert" ON public.%I FOR INSERT TO authenticated WITH CHECK (public.has_role(auth.uid(), ''admin''))', tbl);
    EXECUTE format('CREATE POLICY "Admins can update" ON public.%I FOR UPDATE TO authenticated USING (public.has_role(auth.uid(), ''admin''))', tbl);
    EXECUTE format('CREATE POLICY "Admins can delete" ON public.%I FOR DELETE TO authenticated USING (public.has_role(auth.uid(), ''admin''))', tbl);
  END LOOP;
END $$;
