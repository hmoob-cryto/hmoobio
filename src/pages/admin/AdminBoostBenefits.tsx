import AdminCrudTable from "@/components/admin/AdminCrudTable";

export default function AdminBoostBenefits() {
  return (
    <AdminCrudTable
      table="boost_benefits"
      title="Boost Benefits"
      description="Manage boost benefit items"
      filterKey="locale"
      orderBy="sort_order"
      columns={[
        { key: "text", label: "Text", type: "textarea" },
        { key: "locale", label: "Locale", type: "select", options: ["en", "hmn"], width: "80px" },
        { key: "sort_order", label: "Order", type: "number", width: "70px" },
        { key: "is_active", label: "Active", type: "boolean", width: "70px" },
      ]}
      defaultValues={{ locale: "en", sort_order: 0, is_active: true }}
    />
  );
}
