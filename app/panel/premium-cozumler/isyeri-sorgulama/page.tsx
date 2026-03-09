import { MockQueryPage } from "@/components/MockQueryPage";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = createMetadata({
  title: "İşyeri Sorgulama",
  description: "İşyeri ve vergi numarası sorgulama.",
  path: "/panel/premium-cozumler/isyeri-sorgulama",
  noIndex: true,
});

export default function Page() {
  return (
    <MockQueryPage
      queryType="premium"
      title="İşyeri Sorgulama"
      description="İşyeri ve vergi numarası sorgulama."
      inputLabel="Vergi No / TC"
      inputPlaceholder="1234567890"
    />
  );
}
