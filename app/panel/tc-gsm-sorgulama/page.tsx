import { MockQueryPage } from "@/components/MockQueryPage";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = createMetadata({
  title: "TC GSM Sorgulama",
  description: "TC kimlik numarasına göre GSM sorgulama. API test modunda.",
  path: "/panel/tc-gsm-sorgulama",
  noIndex: true,
});

export default function TcGsmPage() {
  return (
    <MockQueryPage
      queryType="tc-gsm"
      title="Tc Gsm Sorgu"
      description="TC kimlik numarasına göre GSM numarası sorgulama yapabilirsiniz."
      inputLabel="TC Kimlik No"
      inputPlaceholder="TC Kimlik Numarası"
    />
  );
}
