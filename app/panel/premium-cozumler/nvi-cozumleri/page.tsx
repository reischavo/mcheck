import { MockQueryPage } from "@/components/MockQueryPage";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = createMetadata({
  title: "Nvi Çözümleri",
  description: "Nüfus ve Vatandaşlık İşleri sorgulama.",
  path: "/panel/premium-cozumler/nvi-cozumleri",
  noIndex: true,
});

export default function Page() {
  return (
    <MockQueryPage
      queryType="mernis"
      title="Nvi Çözümleri"
      description="Nüfus ve Vatandaşlık İşleri sorgulama."
      inputLabel="TC Kimlik No"
      inputPlaceholder="12345678901"
    />
  );
}
