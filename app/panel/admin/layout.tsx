import { auth } from "@/auth";
import { redirect } from "next/navigation";
import type { ReactNode } from "react";

export default async function AdminLayout({ children }: { children: ReactNode }) {
  const session = await auth();
  const role = (session?.user as Record<string, unknown>)?.role as string | undefined;
  if (!session?.user || (role !== "super_admin" && role !== "mini_admin")) {
    redirect("/panel");
  }
  return <>{children}</>;
}
