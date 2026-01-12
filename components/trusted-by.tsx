"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

const logos = [
  { name: "Acme Corp", src: "/mock-logos/acmecorp.svg" },
  { name: "Boltshift", src: "/mock-logos/boltshift.svg" },
  { name: "Capsule", src: "/mock-logos/capsule.svg" },
  { name: "Catalog", src: "/mock-logos/catalog.svg" },
  { name: "Cloudwatch", src: "/mock-logos/cloudwatch.svg" },
  { name: "Featherdev", src: "/mock-logos/featherdev.svg" },
];

export function TrustedBy(): ReactNode {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-center justify-between">
          <h2 className="text-2xl font-medium tracking-tight text-foreground md:text-3xl lg:text-4xl">
            Trusted by teams who ship faster with Kraft
          </h2>
          <Link
            href="#"
            className="group flex shrink-0 items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            See all
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 md:grid-cols-6">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="flex h-24 items-center justify-center rounded-xl bg-muted/50 px-6 transition-colors hover:bg-muted"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={120}
                height={40}
                className="h-8 w-auto object-contain opacity-70 grayscale transition-all hover:opacity-100 hover:grayscale-0 dark:invert"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
