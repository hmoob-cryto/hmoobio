import AdminCrudTable from "@/components/admin/AdminCrudTable";

export default function AdminTranslations() {
  return (
    <AdminCrudTable
      table="translations"
      title="Translations"
      description="Manage all website text in English and Hmong"
      filterKey="locale"
      orderBy="key"
      columns={[
        { key: "key", label: "Key", width: "200px" },
        { key: "locale", label: "Locale", type: "select", options: ["en", "hmn"], width: "80px" },
        { key: "value", label: "Value", type: "textarea" },
      ]}
      defaultValues={{ locale: "en" }}
    />
  );
}
