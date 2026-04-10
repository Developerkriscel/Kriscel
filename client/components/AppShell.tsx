"use client";

import { usePathname } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");

  if (isAdmin) {
    return <main className="flex-1 relative">{children}</main>;
  }

  return (
    <SmoothScroll>
      <Navbar />
      <main className="flex-1 relative">
        {children}
      </main>
      <Footer />
    </SmoothScroll>
  );
}
