import AdminCrudTable from "@/components/admin/AdminCrudTable";

export default function AdminSecurityFeatures() {
  return (
    <AdminCrudTable
      table="security_features"
      title="Security Features"
      description="Manage security & trust section items"
      filterKey="locale"
      orderBy="sort_order"
      columns={[
        { key: "title", label: "Title" },
        { key: "description", label: "Description", type: "textarea" },
        { key: "icon_name", label: "Icon", width: "100px" },
        { key: "locale", label: "Locale", type: "select", options: ["en", "hmn", "th"], width: "80px" },
        { key: "sort_order", label: "Order", type: "number", width: "70px" },
        { key: "is_active", label: "Active", type: "boolean", width: "70px" },
      ]}
      defaultValues={{ locale: "en", sort_order: 0, is_active: true, icon_name: "Shield" }}
    />
  );
}
