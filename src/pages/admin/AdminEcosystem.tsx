import AdminCrudTable from "@/components/admin/AdminCrudTable";

export default function AdminEcosystem() {
  return (
    <AdminCrudTable
      table="ecosystem_items"
      title="Ecosystem Items"
      description="Manage DannyChain ecosystem platforms"
      filterKey="locale"
      orderBy="sort_order"
      columns={[
        { key: "name", label: "Name" },
        { key: "description", label: "Description", type: "textarea" },
        { key: "url", label: "URL" },
        { key: "icon_name", label: "Icon", width: "100px" },
        { key: "locale", label: "Locale", type: "select", options: ["en", "hmn"], width: "80px" },
        { key: "sort_order", label: "Order", type: "number", width: "70px" },
        { key: "is_active", label: "Active", type: "boolean", width: "70px" },
      ]}
      defaultValues={{ locale: "en", sort_order: 0, is_active: true, icon_name: "Globe" }}
    />
  );
}
