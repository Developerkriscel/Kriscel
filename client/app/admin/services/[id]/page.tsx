"use client";

import { useEffect, useState } from "react";
import ServiceEditor from "@/components/admin/ServiceEditor";
import { useParams } from "next/navigation";
import { API_URL } from "@/lib/api";

export default function EditServicePage() {
  const params = useParams();
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchService = async () => {
      try {
        const res = await fetch(`${API_URL}/services/admin/${params.id}`, {
          headers: { "Authorization": `Bearer ${localStorage.getItem("kriscel_admin_token")}` }
        });
        if (res.ok) {
          const json = await res.json();
          setData(json.data);
        } else {
          setError(true);
        }
      } catch (e) {
        console.error(e);
        setError(true);
      }
    };
    if (params.id) {
      fetchService();
    }
  }, [params.id]);

  if (error) {
    return <div className="text-rose-400 p-8">Error loading service data. May not exist or unauthorized.</div>;
  }

  if (!data) {
    return <div className="text-slate-400 p-8 flex items-center gap-3">
        <span className="w-4 h-4 rounded-full border-2 border-slate-500 border-t-white animate-spin"></span>
        Loading Service Data...
    </div>;
  }

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 pb-10">
      <ServiceEditor isEdit={true} initialData={data} />
    </div>
  );
}
