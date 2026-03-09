import { RealQueryPage } from "@/components/RealQueryPage";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = createMetadata({
  title: "Adres Çözümleri",
  description: "Adres sorgulama - Gerçek veritabanı sorgusu.",
  path: "/panel/adres-cozumleri",
  noIndex: true,
});

export default function AdresCozumleriPage() {
  return (
    <RealQueryPage
      apiEndpoint="/api/query/adres"
      title="Adres Çözümleri"
      description="TC veya adres bilgisine göre sorgulama yapabilirsiniz."
      inputLabel="Sorgu Değeri"
      inputPlaceholder="TC veya adres bilgisi"
      paramName="query"
    />
  );
}
