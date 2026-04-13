import AdminCrudTable from "@/components/admin/AdminCrudTable";

export default function AdminWallets() {
  return (
    <AdminCrudTable
      table="compatible_wallets"
      title="Compatible Wallets"
      description="Manage supported wallet apps"
      orderBy="sort_order"
      columns={[
        { key: "name", label: "Name", width: "120px" },
        { key: "description", label: "Description" },
        { key: "logo_url", label: "Logo URL" },
        { key: "play_url", label: "Play Store URL" },
        { key: "rating", label: "Rating", width: "60px" },
        { key: "downloads", label: "Downloads", width: "80px" },
        { key: "is_recommended", label: "Recommended", type: "boolean", width: "100px" },
        { key: "sort_order", label: "Order", type: "number", width: "70px" },
        { key: "is_active", label: "Active", type: "boolean", width: "70px" },
      ]}
      defaultValues={{ sort_order: 0, is_active: true, is_recommended: false, rating: "0", downloads: "0" }}
    />
  );
}
