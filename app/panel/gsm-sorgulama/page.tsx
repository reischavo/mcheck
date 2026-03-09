import { RealQueryPage } from "@/components/RealQueryPage";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = createMetadata({
  title: "GSM Sorgulama",
  description: "GSM numarası sorgulama - Gerçek veritabanı sorgusu.",
  path: "/panel/gsm-sorgulama",
  noIndex: true,
});

export default function GsmSorgulamaPage() {
  return (
    <RealQueryPage
      apiEndpoint="/api/query/gsm"
      title="GSM Sorgulama"
      description="GSM numarası ile detaylı sorgulama yapabilirsiniz."
      inputLabel="GSM Numarası"
      inputPlaceholder="05XX XXX XX XX"
      paramName="gsm"
    />
  );
}
