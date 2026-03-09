"use client";

import Link from "next/link";
import { motion } from "motion/react";

export function SimpleLandingHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Basit animasyonlu arka plan */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent animate-pulse" 
             style={{ animationDuration: '4s' }} />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
      </div>

      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 py-24 md:py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-sm font-medium text-accent backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            Güvenilir Sorgu Platformu
          </span>
        </motion.div>

        <motion.h1
          className="text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Sorgu Çözümleri ile
          <br />
          <span className="text-accent">Hızlı ve Güvenilir</span>
          <br />
          Erişim
        </motion.h1>

        <motion.p
          className="mt-6 text-lg text-white/60 md:text-xl max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          TC, GSM, Mernis, adres ve daha fazlası için API tabanlı sorgu hizmetleri. Ücretsiz üyelik ile hemen başlayın.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link
            href="/kayit"
            className="rounded-full bg-accent px-7 py-3.5 font-semibold text-black shadow-lg shadow-accent/30 transition hover:opacity-90 hover:shadow-accent/50 hover:scale-105 text-sm"
          >
            Ücretsiz Kayıt Ol
          </Link>
          <Link
            href="/login"
            className="rounded-full border border-white/20 bg-white/5 backdrop-blur px-7 py-3.5 font-semibold text-white transition hover:bg-white/10 text-sm"
          >
            Giriş Yap
          </Link>
        </motion.div>

        <motion.div
          className="mt-16 flex flex-wrap items-center justify-center gap-6 text-white/40 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          {["TC Sorgulama", "GSM Çözümleri", "Mernis 2026", "Adres Sorgulama"].map((item) => (
            <span key={item} className="flex items-center gap-1.5">
              <span className="h-1 w-1 rounded-full bg-accent/60" />
              {item}
            </span>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />
    </section>
  );
}
