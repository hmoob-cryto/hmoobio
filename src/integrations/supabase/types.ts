export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.5"
  }
  public: {
    Tables: {
      boost_benefits: {
        Row: {
          created_at: string
          id: string
          is_active: boolean
          locale: string
          sort_order: number
          text: string
        }
        Insert: {
          created_at?: string
          id?: string
          is_active?: boolean
          locale?: string
          sort_order?: number
          text: string
        }
        Update: {
          created_at?: string
          id?: string
          is_active?: boolean
          locale?: string
          sort_order?: number
          text?: string
        }
        Relationships: []
      }
      boost_plans: {
        Row: {
          created_at: string
          hash_rate: string
          hmoob_amount: number
          id: string
          is_active: boolean
          is_recommended: boolean
          locale: string
          name: string
          sort_order: number
          total_return: string
          updated_at: string
          usd_price: string
        }
        Insert: {
          created_at?: string
          hash_rate: string
          hmoob_amount: number
          id?: string
          is_active?: boolean
          is_recommended?: boolean
          locale?: string
          name: string
          sort_order?: number
          total_return: string
          updated_at?: string
          usd_price: string
        }
        Update: {
          created_at?: string
          hash_rate?: string
          hmoob_amount?: number
          id?: string
          is_active?: boolean
          is_recommended?: boolean
          locale?: string
          name?: string
          sort_order?: number
          total_return?: string
          updated_at?: string
          usd_price?: string
        }
        Relationships: []
      }
      compatible_wallets: {
        Row: {
          created_at: string
          description: string
          downloads: string
          id: string
          is_active: boolean
          is_recommended: boolean
          logo_url: string
          name: string
          play_url: string
          rating: string
          sort_order: number
          updated_at: string
        }
        Insert: {
          created_at?: string
          description: string
          downloads?: string
          id?: string
          is_active?: boolean
          is_recommended?: boolean
          logo_url: string
          name: string
          play_url: string
          rating?: string
          sort_order?: number
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string
          downloads?: string
          id?: string
          is_active?: boolean
          is_recommended?: boolean
          logo_url?: string
          name?: string
          play_url?: string
          rating?: string
          sort_order?: number
          updated_at?: string
        }
        Relationships: []
      }
      ecosystem_items: {
        Row: {
          created_at: string
          description: string
          icon_name: string
          id: string
          is_active: boolean
          locale: string
          name: string
          sort_order: number
          updated_at: string
          url: string
        }
        Insert: {
          created_at?: string
          description: string
          icon_name?: string
          id?: string
          is_active?: boolean
          locale?: string
          name: string
          sort_order?: number
          updated_at?: string
          url: string
        }
        Update: {
          created_at?: string
          description?: string
          icon_name?: string
          id?: string
          is_active?: boolean
          locale?: string
          name?: string
          sort_order?: number
          updated_at?: string
          url?: string
        }
        Relationships: []
      }
      faqs: {
        Row: {
          answer: string
          created_at: string
          id: string
          is_active: boolean
          locale: string
          question: string
          sort_order: number
          updated_at: string
        }
        Insert: {
          answer: string
          created_at?: string
          id?: string
          is_active?: boolean
          locale?: string
          question: string
          sort_order?: number
          updated_at?: string
        }
        Update: {
          answer?: string
          created_at?: string
          id?: string
          is_active?: boolean
          locale?: string
          question?: string
          sort_order?: number
          updated_at?: string
        }
        Relationships: []
      }
      history_timeline: {
        Row: {
          created_at: string
          description: string
          icon_name: string
          id: string
          is_active: boolean
          locale: string
          sort_order: number
          status: string
          title: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description: string
          icon_name?: string
          id?: string
          is_active?: boolean
          locale?: string
          sort_order?: number
          status?: string
          title: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string
          icon_name?: string
          id?: string
          is_active?: boolean
          locale?: string
          sort_order?: number
          status?: string
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      how_it_works_steps: {
        Row: {
          created_at: string
          description: string
          icon_name: string
          id: string
          is_active: boolean
          locale: string
          sort_order: number
          title: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description: string
          icon_name?: string
          id?: string
          is_active?: boolean
          locale?: string
          sort_order?: number
          title: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string
          icon_name?: string
          id?: string
          is_active?: boolean
          locale?: string
          sort_order?: number
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      security_features: {
        Row: {
          created_at: string
          description: string
          icon_name: string
          id: string
          is_active: boolean
          locale: string
          sort_order: number
          title: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description: string
          icon_name?: string
          id?: string
          is_active?: boolean
          locale?: string
          sort_order?: number
          title: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string
          icon_name?: string
          id?: string
          is_active?: boolean
          locale?: string
          sort_order?: number
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      site_features: {
        Row: {
          created_at: string
          description: string
          icon_name: string
          id: string
          is_active: boolean
          locale: string
          sort_order: number
          title: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description: string
          icon_name?: string
          id?: string
          is_active?: boolean
          locale?: string
          sort_order?: number
          title: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string
          icon_name?: string
          id?: string
          is_active?: boolean
          locale?: string
          sort_order?: number
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      site_links: {
        Row: {
          category: string
          created_at: string
          description: string | null
          icon_name: string | null
          id: string
          is_active: boolean
          locale: string
          logo_url: string | null
          name: string
          sort_order: number
          updated_at: string
          url: string
        }
        Insert: {
          category?: string
          created_at?: string
          description?: string | null
          icon_name?: string | null
          id?: string
          is_active?: boolean
          locale?: string
          logo_url?: string | null
          name: string
          sort_order?: number
          updated_at?: string
          url: string
        }
        Update: {
          category?: string
          created_at?: string
          description?: string | null
          icon_name?: string | null
          id?: string
          is_active?: boolean
          locale?: string
          logo_url?: string | null
          name?: string
          sort_order?: number
          updated_at?: string
          url?: string
        }
        Relationships: []
      }
      site_settings: {
        Row: {
          created_at: string
          description: string | null
          id: string
          key: string
          updated_at: string
          value: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          key: string
          updated_at?: string
          value: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          key?: string
          updated_at?: string
          value?: string
        }
        Relationships: []
      }
      site_stats: {
        Row: {
          created_at: string
          detail: string | null
          icon_name: string
          id: string
          is_active: boolean
          label: string
          locale: string
          sort_order: number
          suffix: string
          updated_at: string
          value: number
        }
        Insert: {
          created_at?: string
          detail?: string | null
          icon_name?: string
          id?: string
          is_active?: boolean
          label: string
          locale?: string
          sort_order?: number
          suffix?: string
          updated_at?: string
          value: number
        }
        Update: {
          created_at?: string
          detail?: string | null
          icon_name?: string
          id?: string
          is_active?: boolean
          label?: string
          locale?: string
          sort_order?: number
          suffix?: string
          updated_at?: string
          value?: number
        }
        Relationships: []
      }
      testimonials: {
        Row: {
          boost_tier: string | null
          created_at: string
          gradient: string
          hash_rate: string | null
          id: string
          initials: string
          is_active: boolean
          is_verified: boolean
          locale: string
          name: string
          quote: string
          role: string
          sort_order: number
          updated_at: string
        }
        Insert: {
          boost_tier?: string | null
          created_at?: string
          gradient?: string
          hash_rate?: string | null
          id?: string
          initials: string
          is_active?: boolean
          is_verified?: boolean
          locale?: string
          name: string
          quote: string
          role: string
          sort_order?: number
          updated_at?: string
        }
        Update: {
          boost_tier?: string | null
          created_at?: string
          gradient?: string
          hash_rate?: string | null
          id?: string
          initials?: string
          is_active?: boolean
          is_verified?: boolean
          locale?: string
          name?: string
          quote?: string
          role?: string
          sort_order?: number
          updated_at?: string
        }
        Relationships: []
      }
      token_platforms: {
        Row: {
          created_at: string
          description: string
          gradient: string
          icon_name: string
          id: string
          is_active: boolean
          locale: string
          name: string
          platform_type: string
          sort_order: number
          updated_at: string
          url: string
        }
        Insert: {
          created_at?: string
          description: string
          gradient?: string
          icon_name?: string
          id?: string
          is_active?: boolean
          locale?: string
          name: string
          platform_type?: string
          sort_order?: number
          updated_at?: string
          url: string
        }
        Update: {
          created_at?: string
          description?: string
          gradient?: string
          icon_name?: string
          id?: string
          is_active?: boolean
          locale?: string
          name?: string
          platform_type?: string
          sort_order?: number
          updated_at?: string
          url?: string
        }
        Relationships: []
      }
      translations: {
        Row: {
          created_at: string
          id: string
          key: string
          locale: string
          updated_at: string
          value: string
        }
        Insert: {
          created_at?: string
          id?: string
          key: string
          locale?: string
          updated_at?: string
          value: string
        }
        Update: {
          created_at?: string
          id?: string
          key?: string
          locale?: string
          updated_at?: string
          value?: string
        }
        Relationships: []
      }
      trust_indicators: {
        Row: {
          created_at: string
          icon_name: string
          id: string
          is_active: boolean
          locale: string
          sort_order: number
          text: string
        }
        Insert: {
          created_at?: string
          icon_name?: string
          id?: string
          is_active?: boolean
          locale?: string
          sort_order?: number
          text: string
        }
        Update: {
          created_at?: string
          icon_name?: string
          id?: string
          is_active?: boolean
          locale?: string
          sort_order?: number
          text?: string
        }
        Relationships: []
      }
      trust_partners: {
        Row: {
          created_at: string
          description: string
          id: string
          is_active: boolean
          locale: string
          name: string
          sort_order: number
          updated_at: string
          url: string
        }
        Insert: {
          created_at?: string
          description: string
          id?: string
          is_active?: boolean
          locale?: string
          name: string
          sort_order?: number
          updated_at?: string
          url: string
        }
        Update: {
          created_at?: string
          description?: string
          id?: string
          is_active?: boolean
          locale?: string
          name?: string
          sort_order?: number
          updated_at?: string
          url?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
      video_translations: {
        Row: {
          created_at: string
          description: string | null
          id: string
          locale: string
          title: string
          updated_at: string
          video_id: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          locale?: string
          title: string
          updated_at?: string
          video_id: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          locale?: string
          title?: string
          updated_at?: string
          video_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "video_translations_video_id_fkey"
            columns: ["video_id"]
            isOneToOne: false
            referencedRelation: "videos"
            referencedColumns: ["id"]
          },
        ]
      }
      videos: {
        Row: {
          created_at: string
          description: string | null
          id: string
          is_active: boolean
          sort_order: number
          thumbnail_url: string | null
          title: string | null
          updated_at: string
          video_url: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          is_active?: boolean
          sort_order?: number
          thumbnail_url?: string | null
          title?: string | null
          updated_at?: string
          video_url: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          is_active?: boolean
          sort_order?: number
          thumbnail_url?: string | null
          title?: string | null
          updated_at?: string
          video_url?: string
        }
        Relationships: []
      }
      vision_distribution: {
        Row: {
          color: string
          created_at: string
          icon_name: string
          id: string
          is_active: boolean
          key: string
          label: string
          locale: string
          percent: number
          sort_order: number
          updated_at: string
        }
        Insert: {
          color?: string
          created_at?: string
          icon_name?: string
          id?: string
          is_active?: boolean
          key: string
          label: string
          locale?: string
          percent?: number
          sort_order?: number
          updated_at?: string
        }
        Update: {
          color?: string
          created_at?: string
          icon_name?: string
          id?: string
          is_active?: boolean
          key?: string
          label?: string
          locale?: string
          percent?: number
          sort_order?: number
          updated_at?: string
        }
        Relationships: []
      }
      vision_milestones: {
        Row: {
          created_at: string
          description: string
          icon_name: string
          id: string
          is_active: boolean
          locale: string
          sort_order: number
          status: string
          title: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          description: string
          icon_name?: string
          id?: string
          is_active?: boolean
          locale?: string
          sort_order?: number
          status?: string
          title: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          description?: string
          icon_name?: string
          id?: string
          is_active?: boolean
          locale?: string
          sort_order?: number
          status?: string
          title?: string
          updated_at?: string
        }
        Relationships: []
      }
      vision_section: {
        Row: {
          created_at: string
          id: string
          is_active: boolean
          key: string
          locale: string
          sort_order: number
          updated_at: string
          value: string
        }
        Insert: {
          created_at?: string
          id?: string
          is_active?: boolean
          key: string
          locale?: string
          sort_order?: number
          updated_at?: string
          value?: string
        }
        Update: {
          created_at?: string
          id?: string
          is_active?: boolean
          key?: string
          locale?: string
          sort_order?: number
          updated_at?: string
          value?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin" | "moderator" | "user"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "moderator", "user"],
    },
  },
} as const
