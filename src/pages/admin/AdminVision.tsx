import AdminCrudTable from "@/components/admin/AdminCrudTable";

export default function AdminVision() {
  return (
    <AdminCrudTable
      table="vision_milestones"
      title="Vision Milestones"
      description="Manage roadmap milestones"
      filterKey="locale"
      orderBy="sort_order"
      columns={[
        { key: "title", label: "Title" },
        { key: "description", label: "Description", type: "textarea" },
        { key: "icon_name", label: "Icon", width: "80px" },
        { key: "status", label: "Status", type: "select", options: ["done", "current", "upcoming"], width: "100px" },
        { key: "locale", label: "Locale", type: "select", options: ["en", "hmn", "th"], width: "80px" },
        { key: "sort_order", label: "Order", type: "number", width: "70px" },
        { key: "is_active", label: "Active", type: "boolean", width: "70px" },
      ]}
      defaultValues={{ locale: "en", sort_order: 0, is_active: true, status: "upcoming", icon_name: "Star" }}
    />
  );
}
