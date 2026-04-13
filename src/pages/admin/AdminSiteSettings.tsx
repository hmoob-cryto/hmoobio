import AdminCrudTable from "@/components/admin/AdminCrudTable";

export default function AdminSiteSettings() {
  return (
    <AdminCrudTable
      table="site_settings"
      title="Site Settings"
      description="Welcome dialog, video URL, and other global settings"
      orderBy="key"
      columns={[
        { key: "key", label: "Key", width: "200px" },
        { key: "value", label: "Value", type: "textarea" },
        { key: "description", label: "Description" },
      ]}
    />
  );
}
