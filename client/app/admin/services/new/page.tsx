import ServiceEditor from "@/components/admin/ServiceEditor";

export default function NewServicePage() {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 pb-10">
      <ServiceEditor isEdit={false} />
    </div>
  );
}
