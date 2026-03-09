"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import SimpleGraph from "@/components/SimpleGraph";

// ── Helpers ──────────────────────────────────────────────────────────────────
function useCountUp(target: number, duration = 1800) {
  const [value, setValue] = useState(0);
  const raf = useRef<number>(0);
  const start = useRef<number | null>(null);
  const from = useRef(0);

  useEffect(() => {
    from.current = value;
    start.current = null;
    const tick = (ts: number) => {
      if (!start.current) start.current = ts;
      const elapsed = ts - start.current;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(from.current + (target - from.current) * eased));
      if (progress < 1) raf.current = requestAnimationFrame(tick);
    };
    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, [target]); // eslint-disable-line

  return value;
}

function fmt(n: number) {
  return n.toLocaleString("tr-TR");
}

// ── Live ticking stat ─────────────────────────────────────────────────────────
function useLiveTick(base: number, tickEvery = 8000, increment = 1) {
  const [val, setVal] = useState(base);
  useEffect(() => {
    const id = setInterval(() => setVal((v) => v + increment), tickEvery);
    return () => clearInterval(id);
  }, [tickEvery, increment]);
  return val;
}

// ── Stat Card ─────────────────────────────────────────────────────────────────
function StatCard({
  label,
  value,
  sub,
  icon,
  accent = false,
  delay = 0,
}: {
  label: string;
  value: number;
  sub: string;
  icon: React.ReactNode;
  accent?: boolean;
  delay?: number;
}) {
  const displayed = useCountUp(value, 1600);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay }}
      className={`flex flex-col gap-3 rounded-2xl border p-5 ${
        accent
          ? "border-emerald-500/25 bg-emerald-500/5"
          : "border-border bg-card"
      }`}
    >
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium uppercase tracking-widest text-muted-foreground">
          {label}
        </span>
        <span
          className={`flex h-8 w-8 items-center justify-center rounded-lg ${
            accent ? "bg-emerald-500/15 text-emerald-400" : "bg-muted text-muted-foreground"
          }`}
        >
          {icon}
        </span>
      </div>
      <div>
        <p className="text-3xl font-bold tracking-tight text-foreground">
          {fmt(displayed)}
        </p>
        <p className="mt-0.5 text-xs text-muted-foreground">{sub}</p>
      </div>
    </motion.div>
  );
}

// ── Live badge ────────────────────────────────────────────────────────────────
function LiveBadge() {
  const [on, setOn] = useState(true);
  useEffect(() => {
    const id = setInterval(() => setOn((v) => !v), 900);
    return () => clearInterval(id);
  }, []);
  return (
    <span className="flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-wider text-emerald-400">
      <span
        className={`h-1.5 w-1.5 rounded-full bg-emerald-400 transition-opacity ${on ? "opacity-100" : "opacity-30"}`}
      />
      Canlı
    </span>
  );
}

// ── Monthly graph data ────────────────────────────────────────────────────────
const graphData = [
  { value: 312, label: "Eyl" },
  { value: 478, label: "Eki" },
  { value: 543, label: "Kas" },
  { value: 691, label: "Ara" },
  { value: 724, label: "Oca" },
  { value: 839, label: "Şub" },
  { value: 912, label: "Mar" },
];

// ── Activity feed ─────────────────────────────────────────────────────────────
const ACTIVITIES = [
  { type: "sorgu", msg: "TC → Adres sorgusu tamamlandı", ago: "2s önce" },
  { type: "checker", msg: "Kart checker: 4 LIVE sonuç", ago: "14s önce" },
  { type: "kayit", msg: "Yeni kullanıcı kaydı", ago: "38s önce" },
  { type: "sorgu", msg: "GSM → TC sorgusu tamamlandı", ago: "1d önce" },
  { type: "checker", msg: "Kart checker: 1 LIVE sonuç", ago: "2d önce" },
  { type: "sorgu", msg: "Mernis 2026 sorgusu tamamlandı", ago: "2d önce" },
];

const TYPE_COLOR: Record<string, string> = {
  sorgu: "bg-sky-500/15 text-sky-400",
  checker: "bg-emerald-500/15 text-emerald-400",
  kayit: "bg-violet-500/15 text-violet-400",
};
const TYPE_LABEL: Record<string, string> = {
  sorgu: "Sorgu",
  checker: "Checker",
  kayit: "Kayıt",
};

// ── Icons ─────────────────────────────────────────────────────────────────────
function IconSearch() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" strokeLinecap="round" />
    </svg>
  );
}
function IconCreditCard() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <rect x="2" y="5" width="20" height="14" rx="2" /><path d="M2 10h20" strokeLinecap="round" />
    </svg>
  );
}
function IconUsers() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" strokeLinecap="round" />
    </svg>
  );
}
function IconActivity() {
  return (
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// ── Main export ───────────────────────────────────────────────────────────────
export function PanelHomeGraph() {
  const queries = useLiveTick(2847, 7000, 1);
  const cards = useLiveTick(1193, 11000, 1);
  const logins = useLiveTick(438, 15000, 1);
  const uptime = useLiveTick(99, 60000, 0);

  return (
    <div className="mt-6 space-y-5">
      {/* Stat grid */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <StatCard
          label="Günlük Sorgu"
          value={queries}
          sub="bugün atılan toplam sorgu"
          icon={<IconSearch />}
          accent
          delay={0}
        />
        <StatCard
          label="Kart Check"
          value={cards}
          sub="bugün checklenen kart"
          icon={<IconCreditCard />}
          delay={0.07}
        />
        <StatCard
          label="Giriş Sayısı"
          value={logins}
          sub="bugünkü oturum açma"
          icon={<IconUsers />}
          delay={0.14}
        />
        <StatCard
          label="Uptime"
          value={uptime}
          sub="% sistem kararlılığı"
          icon={<IconActivity />}
          delay={0.21}
        />
      </div>

      {/* Graph + activity */}
      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
        {/* Graph */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.28 }}
          className="col-span-2 rounded-2xl border border-border bg-card p-5"
        >
          <div className="mb-1 flex items-center justify-between">
            <div>
              <h2 className="text-sm font-semibold text-foreground">Aylık Sorgu Trendi</h2>
              <p className="text-xs text-muted-foreground">Son 7 ay kümülatif kullanım</p>
            </div>
            <LiveBadge />
          </div>
          <div className="mt-4">
            <SimpleGraph
              data={graphData}
              lineColor="#10b981"
              dotColor="#10b981"
              height={240}
              showGrid
              gridStyle="dashed"
              gridLines="horizontal"
              showDots
              dotSize={5}
              dotHoverGlow
              curved
              gradientFade
              graphLineThickness={2.5}
              calculatePercentageDifference
              animateOnScroll
              animateOnce
              className="w-full"
            />
          </div>
        </motion.div>

        {/* Activity */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.35 }}
          className="rounded-2xl border border-border bg-card p-5"
        >
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-sm font-semibold text-foreground">Son Aktiviteler</h2>
            <LiveBadge />
          </div>
          <ul className="space-y-3">
            {ACTIVITIES.map((a, i) => (
              <li key={i} className="flex items-start gap-3">
                <span
                  className={`mt-0.5 shrink-0 rounded-md px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider ${TYPE_COLOR[a.type]}`}
                >
                  {TYPE_LABEL[a.type]}
                </span>
                <div className="min-w-0">
                  <p className="truncate text-xs text-foreground">{a.msg}</p>
                  <p className="text-[10px] text-muted-foreground">{a.ago}</p>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Status bar */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.42 }}
        className="flex flex-wrap items-center gap-x-6 gap-y-2 rounded-2xl border border-border bg-card px-5 py-3"
      >
        {[
          { label: "Sorgu API", ok: true },
          { label: "Checker API", ok: true },
          { label: "Market", ok: true },
          { label: "Destek", ok: true },
          { label: "Lanyard", ok: true },
        ].map((s) => (
          <div key={s.label} className="flex items-center gap-1.5">
            <span
              className={`h-1.5 w-1.5 rounded-full ${s.ok ? "bg-emerald-400" : "bg-red-400"}`}
            />
            <span className="text-xs text-muted-foreground">{s.label}</span>
            <span className={`text-[10px] font-medium ${s.ok ? "text-emerald-400" : "text-red-400"}`}>
              {s.ok ? "Aktif" : "Pasif"}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
