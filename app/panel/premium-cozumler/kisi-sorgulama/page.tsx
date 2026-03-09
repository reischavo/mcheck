import { MockQueryPage } from "@/components/MockQueryPage";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = createMetadata({
  title: "Kişi Sorgulama",
  description: "TC kimlik numarasına göre kişi bilgisi sorgulama.",
  path: "/panel/premium-cozumler/kisi-sorgulama",
  noIndex: true,
});

export default function Page() {
  return (
    <MockQueryPage
      queryType="mernis"
      title="Kişi Sorgulama"
      description="TC kimlik numarasına göre kişi bilgisi sorgulama."
      inputLabel="TC Kimlik No"
      inputPlaceholder="12345678901"
    />
  );
}
