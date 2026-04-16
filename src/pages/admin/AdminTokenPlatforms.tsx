import AdminCrudTable from "@/components/admin/AdminCrudTable";

export default function AdminTokenPlatforms() {
  return (
    <AdminCrudTable
      table="token_platforms"
      title="Token Platforms"
      description="Manage HMOOB token platforms (mining, DEX, explorer)"
      filterKey="locale"
      orderBy="sort_order"
      columns={[
        { key: "name", label: "Name" },
        { key: "description", label: "Description", type: "textarea" },
        { key: "url", label: "URL" },
        { key: "icon_name", label: "Icon", width: "100px" },
        { key: "platform_type", label: "Type", width: "120px" },
        { key: "gradient", label: "Gradient", width: "180px" },
        { key: "locale", label: "Locale", type: "select", options: ["en", "hmn", "th"], width: "80px" },
        { key: "sort_order", label: "Order", type: "number", width: "70px" },
        { key: "is_active", label: "Active", type: "boolean", width: "70px" },
      ]}
      defaultValues={{ locale: "en", sort_order: 0, is_active: true, icon_name: "Globe", platform_type: "Web", gradient: "from-primary/20 to-amber-500/10" }}
    />
  );
}
