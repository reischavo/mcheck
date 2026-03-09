import { MockQueryPage } from "@/components/MockQueryPage";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = createMetadata({
  title: "PDF Çözümleri",
  description: "Sorgu sonuçlarını PDF formatında alın.",
  path: "/panel/premium-cozumler/pdf-cozumleri",
  noIndex: true,
});

export default function Page() {
  return (
    <MockQueryPage
      queryType="premium"
      title="PDF Çözümleri"
      description="Sorgu sonuçlarını PDF formatında alın."
      inputLabel="TC Kimlik No"
      inputPlaceholder="12345678901"
    />
  );
}
