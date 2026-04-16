import AdminCrudTable from "@/components/admin/AdminCrudTable";
import LogoUploader from "@/components/admin/LogoUploader";

export default function AdminSiteSettings() {
  return (
    <div>
      <LogoUploader />
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
    </div>
  );
}
