import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import { BinCheckerClient } from "./client";

export const metadata: Metadata = createMetadata({
  title: "BIN Checker",
  description: "Banka kimlik numarası (BIN) sorgulama. Sadece ücretli üyelere özel.",
  path: "/panel/checker/bin-checker",
  noIndex: true,
});

export default async function BinCheckerPage() {
  const session = await auth();
  const membership = (session?.user as Record<string, unknown>)?.membership as string | undefined;
  if (!membership || membership === "free") {
    redirect("/panel/bakiye-yukle");
  }
  return <BinCheckerClient />;
}
