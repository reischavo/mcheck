import { MockQueryPage } from "@/components/MockQueryPage";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = createMetadata({
  title: "Diğer Çözümler",
  description: "Diğer sorgu çözümleri. API test modunda.",
  path: "/panel/diger-cozumler",
  noIndex: true,
});

export default function DigerCozumlerPage() {
  return (
    <MockQueryPage
      queryType="diger"
      title="Diğer Çözümler"
      description="Çeşitli sorgu türleri. API test modunda."
      inputLabel="Sorgu"
      inputPlaceholder="Sorgu değeri girin"
    />
  );
}
