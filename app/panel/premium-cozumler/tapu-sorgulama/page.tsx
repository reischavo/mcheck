import { MockQueryPage } from "@/components/MockQueryPage";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";

export const metadata: Metadata = createMetadata({
  title: "Tapu Sorgulama",
  description: "Tapu ve gayrimenkul bilgisi sorgulama.",
  path: "/panel/premium-cozumler/tapu-sorgulama",
  noIndex: true,
});

export default function Page() {
  return (
    <MockQueryPage
      queryType="premium"
      title="Tapu Sorgulama"
      description="Tapu ve gayrimenkul bilgisi sorgulama."
      inputLabel="TC Kimlik No"
      inputPlaceholder="12345678901"
    />
  );
}
