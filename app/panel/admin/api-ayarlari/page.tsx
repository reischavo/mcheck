import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import { ApiAyarlariClient } from "./client";

export const metadata: Metadata = createMetadata({
  title: "API Ayarları",
  description: "Servis API anahtarları yönetimi.",
  path: "/panel/admin/api-ayarlari",
  noIndex: true,
});

export default async function ApiAyarlariPage() {
  const session = await auth();
  const role = (session?.user as Record<string, unknown>)?.role as string | undefined;
  if (role !== "super_admin") redirect("/panel");
  return <ApiAyarlariClient />;
}
