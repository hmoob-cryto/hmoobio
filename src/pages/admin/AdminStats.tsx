import AdminCrudTable from "@/components/admin/AdminCrudTable";

export default function AdminStats() {
  return (
    <AdminCrudTable
      table="site_stats"
      title="Site Stats"
      description="Manage the statistics bar (miners, ROI, etc.)"
      filterKey="locale"
      orderBy="sort_order"
      columns={[
        { key: "label", label: "Label" },
        { key: "value", label: "Value", type: "number", width: "80px" },
        { key: "suffix", label: "Suffix", width: "60px" },
        { key: "detail", label: "Detail" },
        { key: "icon_name", label: "Icon", width: "80px" },
        { key: "locale", label: "Locale", type: "select", options: ["en", "hmn"], width: "80px" },
        { key: "sort_order", label: "Order", type: "number", width: "70px" },
        { key: "is_active", label: "Active", type: "boolean", width: "70px" },
      ]}
      defaultValues={{ locale: "en", sort_order: 0, is_active: true, icon_name: "Star", suffix: "", value: 0 }}
    />
  );
}
