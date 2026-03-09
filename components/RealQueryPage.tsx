"use client";

import { QueryPage } from "@/components/dashboard/query-page";

interface RealQueryPageProps {
  apiEndpoint: string;
  title: string;
  description: string;
  inputLabel: string;
  inputPlaceholder: string;
  paramName: string;
}

export function RealQueryPage({
  apiEndpoint,
  title,
  description,
  inputLabel,
  inputPlaceholder,
  paramName,
}: RealQueryPageProps) {
  return (
    <QueryPage
      title={title}
      description={description}
      inputLabel={inputLabel}
      inputPlaceholder={inputPlaceholder}
      onQuery={async (value) => {
        const response = await fetch(apiEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ [paramName]: value }),
        });

        if (!response.ok) {
          const error = await response.json();
          throw new Error(error.error || "Sorgu başarısız");
        }

        const result = await response.json();
        return result.data || [];
      }}
    />
  );
}
