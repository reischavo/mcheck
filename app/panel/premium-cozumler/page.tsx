import { MockQueryPage } from "@/components/MockQueryPage";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = createMetadata({
  title: "Premium Çözümler",
  description: "Premium sorgu çözümleri. API test modunda.",
  path: "/panel/premium-cozumler",
  noIndex: true,
});

export default function PremiumCozumlerPage() {
  return (
    <MockQueryPage
      queryType="premium"
      title="Premium Çözümler"
      description="Premium üyelere özel gelişmiş sorgular. API test modunda."
      inputLabel="Sorgu"
      inputPlaceholder="Sorgu değeri"
    />
  );
}
