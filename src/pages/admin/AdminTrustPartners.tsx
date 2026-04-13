import AdminCrudTable from "@/components/admin/AdminCrudTable";

export default function AdminTrustPartners() {
  return (
    <AdminCrudTable
      table="trust_partners"
      title="Trust Partners"
      description="Manage partner/integration logos"
      filterKey="locale"
      orderBy="sort_order"
      columns={[
        { key: "name", label: "Name" },
        { key: "description", label: "Description", type: "textarea" },
        { key: "url", label: "URL" },
        { key: "locale", label: "Locale", type: "select", options: ["en", "hmn"], width: "80px" },
        { key: "sort_order", label: "Order", type: "number", width: "70px" },
        { key: "is_active", label: "Active", type: "boolean", width: "70px" },
      ]}
      defaultValues={{ locale: "en", sort_order: 0, is_active: true }}
    />
  );
}
