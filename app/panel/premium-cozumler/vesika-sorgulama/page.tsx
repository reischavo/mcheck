import { RealQueryPage } from "@/components/RealQueryPage";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = createMetadata({
  title: "Vesika Sorgulama",
  description: "Nüfus cüzdanı ve kimlik belge sorgulama - Gerçek veritabanı sorgusu.",
  path: "/panel/premium-cozumler/vesika-sorgulama",
  noIndex: true,
});

export default function Page() {
  return (
    <RealQueryPage
      apiEndpoint="/api/query/vesika"
      title="Vesika Sorgulama"
      description="Nüfus cüzdanı ve kimlik belge sorgulama."
      inputLabel="TC Kimlik No"
      inputPlaceholder="12345678901"
      paramName="tc"
    />
  );
}
