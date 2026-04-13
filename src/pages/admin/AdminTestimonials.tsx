import AdminCrudTable from "@/components/admin/AdminCrudTable";

export default function AdminTestimonials() {
  return (
    <AdminCrudTable
      table="testimonials"
      title="Testimonials"
      description="Manage community testimonials"
      filterKey="locale"
      orderBy="sort_order"
      columns={[
        { key: "name", label: "Name", width: "100px" },
        { key: "initials", label: "Initials", width: "60px" },
        { key: "role", label: "Role", width: "100px" },
        { key: "quote", label: "Quote", type: "textarea" },
        { key: "boost_tier", label: "Boost Tier", width: "90px" },
        { key: "hash_rate", label: "Hash Rate", width: "90px" },
        { key: "locale", label: "Locale", type: "select", options: ["en", "hmn"], width: "80px" },
        { key: "is_verified", label: "Verified", type: "boolean", width: "70px" },
        { key: "sort_order", label: "Order", type: "number", width: "70px" },
        { key: "is_active", label: "Active", type: "boolean", width: "70px" },
      ]}
      defaultValues={{ locale: "en", sort_order: 0, is_active: true, is_verified: false, gradient: "from-primary/20 to-primary/5" }}
    />
  );
}
