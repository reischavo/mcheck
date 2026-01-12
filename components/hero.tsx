"use client";

import { useScroll, useTransform, useSpring, motion } from "motion/react";
import {
  Paperclip,
  Lightbulb,
  PenTool,
  Layout,
  Mic,
  ArrowRight,
  ArrowDown,
} from "lucide-react";
import Image from "next/image";
import { useRef, type ReactNode } from "react";
import { FluidCursor } from "./fluid-cursor";

export function Hero(): ReactNode {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollY, scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const scaleYRaw = useTransform(scrollYProgress, [0.00, 0.50], [1, 0]);
  const scaleY = useSpring(scaleYRaw, { stiffness: 100, damping: 30 });

  const y = useTransform(scrollY, (value) => value * 0.7);

  return (
    <section ref={sectionRef} className="relative min-h-dvh w-full">
      <FluidCursor className="absolute inset-0 -z-5" />

      <motion.div
        className="pointer-events-none scale-125 absolute inset-0 -z-10 origin-top will-change-transform"
        style={{ scaleY, y }}
        aria-hidden="true"
      >
        <Image
          src="/svg/gradient-fade.svg"
          alt=""
          fill
          className="object-cover object-top dark:-scale-y-100"
          priority
        />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-background to-transparent" />
      </motion.div>

      <div className="mx-auto flex min-h-dvh max-w-4xl flex-col items-start justify-start px-4 pt-40 sm:px-6 lg:px-8 lg:pt-68">
        <h1 className="text-5xl font-medium tracking-tight text-background dark:text-background sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="block">Design with AI —</span>
          <span className="block">
            the <em className="italic text-background/80 dark:text-background/80">future</em> of creativity
          </span>
        </h1>

        <div className="mt-12 w-full lg:mt-16">
          <div
            className="relative rounded-4xl rounded-b-[2.3rem] border border-black/5 bg-[#f8f8fa] p-3"
            style={{
              boxShadow:
                "0 8px 32px rgba(0, 0, 0, 0.1), 0 4px 16px rgba(124, 58, 237, 0.08)",
            }}
          >
            <div className="flex items-start gap-3">
              <textarea
                placeholder="Ask Kraft anything..."
                className="mx-4 my-2 no-focus-ring min-h-15 w-full resize-none bg-transparent text-gray-800 placeholder:text-gray-400"
                rows={2}
              />
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
              <div className="flex flex-wrap items-center gap-2">
                <button
                  type="button"
                  className="cursor-pointer focus-ring isolate flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-gray-400 transition-colors hover:border-gray-300 hover:text-gray-600"
                  aria-label="Attach file"
                >
                  <Paperclip className="h-4 w-4" />
                </button>

                <button
                  type="button"
                  className="cursor-pointer focus-ring isolate flex h-12 shrink-0 items-center gap-2 rounded-full bg-white px-5 text-sm text-gray-500 transition-colors hover:border-gray-300 hover:text-gray-700"
                >
                  <Lightbulb className="h-4 w-4 shrink-0" />
                  <span className="hidden xs:inline">Reasoning</span>
                </button>

                <button
                  type="button"
                  className="cursor-pointer focus-ring isolate hidden h-12 shrink-0 items-center gap-2 rounded-full bg-white px-5 text-sm text-gray-500 transition-colors hover:border-gray-300 hover:text-gray-700 sm:flex"
                >
                  <PenTool className="h-4 w-4 shrink-0" />
                  <span>Create Design</span>
                </button>

                <button
                  type="button"
                  className="cursor-pointer focus-ring isolate hidden h-12 shrink-0 items-center gap-2 rounded-full bg-white px-5 text-sm text-gray-500 transition-colors hover:border-gray-300 hover:text-gray-700 md:flex"
                >
                  <Layout className="h-4 w-4 shrink-0" />
                  <span>Wireframe</span>
                </button>
              </div>

              <div className="flex shrink-0 items-center gap-2">
                <button
                  type="button"
                  className="cursor-pointer focus-ring isolate hidden h-12 w-12 items-center justify-center rounded-full bg-white text-gray-500 transition-colors hover:bg-gray-300 hover:text-gray-700 sm:flex"
                  aria-label="Voice input"
                >
                  <Mic className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  className="cursor-pointer focus-ring isolate flex h-12 w-12 items-center justify-center rounded-full bg-foreground dark:bg-background text-white transition-colors hover:bg-foreground/90 dark:hover:bg-background/90"
                  aria-label="Send message"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          <p className="mt-6 text-center text-xs text-background/60">
            Kraft can make mistakes, but learns from them.
          </p>
        </div>
      </div>

      <div className="absolute flex items-center justify-between inset-x-0 bottom-24 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <p className="text-sm max-w-sm text-foreground/60 dark:text-foreground/50">
          Kraft uses advanced AI to transform your ideas into stunning designs. Just describe what you need.
        </p>

        <ArrowDown className="h-12 w-12 text-foreground/60 dark:text-foreground/50" strokeWidth={1} />
      </div>
    </section>
  );
}
