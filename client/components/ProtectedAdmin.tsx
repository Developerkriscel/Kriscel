"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

export default function ProtectedAdmin({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("kriscel_admin_token");
    
    if (!token && pathname !== "/admin/login") {
      router.push("/admin/login");
      setIsAuthorized(false);
    } else if (token && pathname === "/admin/login") {
      router.push("/admin");
    } else {
      setIsAuthorized(true);
    }
  }, [pathname, router]);

  // Handle loading state
  if (isAuthorized === null && pathname !== "/admin/login") {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent"></div>
      </div>
    );
  }

  return <>{children}</>;
}
