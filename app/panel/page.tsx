import { PanelHomeGraph } from "@/components/panel/PanelHomeGraph";
import { createMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import { MotionSection } from "@/lib/motion";

export const metadata: Metadata = createMetadata({
  title: "Ana Sayfa",
  description: "mcheck.co sorgu paneli ana sayfa. TC, GSM, Mernis ve daha fazlası.",
  path: "/panel",
  noIndex: true,
});

export default function PanelHomePage() {
  return (
    <div className="p-6 md:p-8">
      <MotionSection className="rounded-2xl border border-border bg-card p-6">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-2xl font-bold text-foreground md:text-3xl">
              Kontrol Paneli
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Günlük istatistikler canlı olarak güncellenmektedir.
            </p>
          </div>
          <span className="flex w-fit items-center gap-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Tüm sistemler aktif
          </span>
        </div>
      </MotionSection>
      <PanelHomeGraph />
    </div>
  );
}
