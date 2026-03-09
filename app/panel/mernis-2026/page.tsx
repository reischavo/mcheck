import { MockQueryPage } from "@/components/MockQueryPage";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = createMetadata({
  title: "Mernis 2026",
  description: "Mernis sorgulama 2026. API test modunda.",
  path: "/panel/mernis-2026",
  noIndex: true,
});

export default function Mernis2026Page() {
  return (
    <MockQueryPage
      queryType="mernis"
      title="Mernis 2026 Sorgu"
      description="Mernis bilgileri sorgulama. API test modunda çalışır."
      inputLabel="TC Kimlik No"
      inputPlaceholder="TC Kimlik Numarası"
    />
  );
}
