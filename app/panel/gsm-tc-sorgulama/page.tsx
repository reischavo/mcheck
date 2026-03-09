import { MockQueryPage } from "@/components/MockQueryPage";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = createMetadata({
  title: "GSM TC Sorgulama",
  description:
    "Gsm numarasına göre TC sorgulama yapabilirsiniz. API entegrasyonu test modunda çalışır.",
  path: "/panel/gsm-tc-sorgulama",
  noIndex: true,
});

export default function GsmTcPage() {
  return (
    <MockQueryPage
      queryType="gsm-tc"
      title="Gsm Tc Sorgu"
      description="Gsm numarasına göre Tc sorgulama yapabilirsiniz."
      inputLabel="Gsm Numarası"
      inputPlaceholder="Gsm Numarası"
    />
  );
}
