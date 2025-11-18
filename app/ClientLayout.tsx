"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { usePathname } from "next/navigation";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const hideLayout = ["/login", "/signup", "/reset-password", "forgot-password", "verify-email"].includes(pathname);

  return (
    <>
      {!hideLayout && <Navbar />}
      <main>{children}</main>
      {!hideLayout && <Footer />}
    </>
  );
}
