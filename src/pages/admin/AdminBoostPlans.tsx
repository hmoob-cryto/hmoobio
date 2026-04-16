import AdminCrudTable from "@/components/admin/AdminCrudTable";

export default function AdminBoostPlans() {
  return (
    <AdminCrudTable
      table="boost_plans"
      title="Boost Plans"
      description="Manage mining boost plans and pricing"
      filterKey="locale"
      orderBy="sort_order"
      columns={[
        { key: "name", label: "Name", width: "120px" },
        { key: "locale", label: "Locale", type: "select", options: ["en", "hmn", "th"], width: "80px" },
        { key: "usd_price", label: "USD Price", width: "100px" },
        { key: "hmoob_amount", label: "HMOOB Amount", type: "number", width: "120px" },
        { key: "hash_rate", label: "Hash Rate", width: "100px" },
        { key: "total_return", label: "Total Return", width: "100px" },
        { key: "is_recommended", label: "Recommended", type: "boolean", width: "100px" },
        { key: "sort_order", label: "Order", type: "number", width: "70px" },
        { key: "is_active", label: "Active", type: "boolean", width: "70px" },
      ]}
      defaultValues={{ locale: "en", sort_order: 0, is_active: true, is_recommended: false, hmoob_amount: 0 }}
    />
  );
}
