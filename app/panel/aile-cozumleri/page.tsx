import { MockQueryPage } from "@/components/MockQueryPage";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = createMetadata({
  title: "Aile Çözümleri",
  description: "Aile bireyleri sorgulama. API test modunda.",
  path: "/panel/aile-cozumleri",
  noIndex: true,
});

export default function AileCozumleriPage() {
  return (
    <MockQueryPage
      queryType="aile"
      title="Aile Çözümleri"
      description="TC kimlik numarasına göre aile bireyleri sorgulama."
      inputLabel="TC Kimlik No"
      inputPlaceholder="TC Kimlik Numarası"
    />
  );
}
