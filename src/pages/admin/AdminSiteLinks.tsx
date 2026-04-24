import AdminCrudTable from "@/components/admin/AdminCrudTable";

export default function AdminSiteLinks() {
  return (
    <AdminCrudTable
      table="site_links"
      title="Site Links"
      description="Manage all external links by category (hero, about, footer, CTA, social)"
      orderBy="sort_order"
      columns={[
        { key: "name", label: "Name", width: "140px" },
        { key: "url", label: "URL" },
        { key: "category", label: "Category", type: "select", options: ["hero_ecosystem", "about_partner", "social", "footer_ecosystem", "cta_app"], width: "130px" },
        { key: "logo_url", label: "Logo URL", width: "180px" },
        { key: "icon_name", label: "Icon", width: "100px" },
        { key: "description", label: "Description" },
        { key: "sort_order", label: "Order", type: "number", width: "70px" },
        { key: "is_active", label: "Active", type: "boolean", width: "70px" },
      ]}
      defaultValues={{ category: "social", sort_order: 0, is_active: true, locale: "en" }}
    />
  );
}
