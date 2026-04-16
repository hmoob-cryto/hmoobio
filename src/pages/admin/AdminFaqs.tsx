import AdminCrudTable from "@/components/admin/AdminCrudTable";

export default function AdminFaqs() {
  return (
    <AdminCrudTable
      table="faqs"
      title="FAQs"
      description="Manage frequently asked questions"
      filterKey="locale"
      orderBy="sort_order"
      columns={[
        { key: "question", label: "Question", type: "textarea" },
        { key: "answer", label: "Answer", type: "textarea" },
        { key: "locale", label: "Locale", type: "select", options: ["en", "hmn", "th"], width: "80px" },
        { key: "sort_order", label: "Order", type: "number", width: "70px" },
        { key: "is_active", label: "Active", type: "boolean", width: "70px" },
      ]}
      defaultValues={{ locale: "en", sort_order: 0, is_active: true }}
    />
  );
}
