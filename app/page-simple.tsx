import { createMetadata, siteConfig } from "@/lib/metadata";
import type { Metadata } from "next";
import Link from "next/link";
import type { ReactNode } from "react";
import {
  SearchIcon,
  UserIcon,
  SmartphoneIcon,
  MapPinIcon,
  ShieldIcon,
} from "@/components/icons";

export const metadata: Metadata = createMetadata({
  title: siteConfig.name,
  description: siteConfig.description,
  path: "/",
});

const features = [
  {
    title: "TC Sorgulama",
    description: "TC kimlik numarasına göre güvenilir sorgular.",
    icon: UserIcon,
  },
  {
    title: "GSM Çözümleri",
    description: "GSM TC, TC GSM ve GSM sorgulama hizmetleri.",
    icon: SmartphoneIcon,
  },
  {
    title: "Mernis & Aile",
    description: "Mernis 2026 ve aile çözümleri.",
    icon: ShieldIcon,
  },
  {
    title: "Adres Çözümleri",
    description: "Adres sorgulama ve doğrulama.",
    icon: MapPinIcon,
  },
];

export default function HomePage(): ReactNode {
  return (
    <div className="min-h-screen bg-background">
      <header className="absolute top-0 left-0 right-0 z-20 border-b border-border/50 bg-background/50 backdrop-blur">
        <div className="mx-auto flex h-12 max-w-6xl items-center justify-between px-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-lg font-bold text-accent"
          >
            <SearchIcon className="h-6 w-6" />
            mcheck.co
          </Link>
          <nav className="flex items-center gap-4">
            <Link
              href="/login"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Giriş Yap
            </Link>
            <Link
              href="/kayit"
              className="rounded-full bg-accent px-4 py-2 text-sm font-medium text-accent-foreground hover:opacity-90"
            >
              Kayıt Ol
            </Link>
          </nav>
        </div>
      </header>

      <main id="main-content">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-card to-background">
          <div className="relative z-10 mx-auto max-w-4xl px-4 py-24 md:py-32 text-center">
            <div className="mb-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent backdrop-blur-sm">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Güvenilir Sorgu Platformu
              </span>
            </div>

            <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl leading-tight">
              Sorgu Çözümleri ile
              <br />
              <span className="text-accent">Hızlı ve Güvenilir</span>
              <br />
              Erişim
            </h1>

            <p className="mt-6 text-lg text-muted-foreground md:text-xl max-w-2xl mx-auto">
              TC, GSM, Mernis, adres ve daha fazlası için API tabanlı sorgu hizmetleri. Ücretsiz üyelik ile hemen başlayın.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/kayit"
                className="rounded-full bg-accent px-7 py-3.5 font-semibold text-accent-foreground shadow-lg transition hover:opacity-90 text-sm"
              >
                Ücretsiz Kayıt Ol
              </Link>
              <Link
                href="/login"
                className="rounded-full border border-border bg-card px-7 py-3.5 font-semibold text-foreground transition hover:bg-card/80 text-sm"
              >
                Giriş Yap
              </Link>
            </div>

            <div className="mt-16 flex flex-wrap items-center justify-center gap-6 text-muted-foreground text-sm">
              {["TC Sorgulama", "GSM Çözümleri", "Mernis 2026", "Adres Sorgulama"].map((item) => (
                <span key={item} className="flex items-center gap-1.5">
                  <span className="h-1 w-1 rounded-full bg-accent/60" />
                  {item}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="border-t border-border px-4 py-20">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-center text-2xl font-bold text-foreground md:text-3xl">
              Neden mcheck.co?
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
              Türkiye genelinde güvenilir sorgu çözümleri sunuyoruz.
            </p>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-border bg-card p-6"
                >
                  <item.icon className="h-10 w-10 shrink-0 text-accent" />
                  <h3 className="mt-4 font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="border-t border-border px-4 py-20">
          <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-card p-8 text-center md:p-12">
            <h2 className="text-2xl font-bold text-foreground">
              Hemen Başlayın
            </h2>
            <p className="mt-3 text-muted-foreground">
              Ücretsiz hesap oluşturun, panele giriş yapın ve sorgu
              çözümlerinden yararlanın.
            </p>
            <Link
              href="/login"
              className="mt-6 inline-block rounded-full bg-accent px-6 py-3 font-medium text-accent-foreground hover:opacity-90"
            >
              Giriş Yap / Panele Git
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-card/30 px-4 py-8">
        <div className="mx-auto max-w-6xl flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {siteConfig.name}. Tüm hakları saklıdır.
          </p>
          <div className="flex gap-6">
            <Link
              href="/login"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Giriş
            </Link>
            <Link
              href="/kayit"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Kayıt
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
