"use client";

import SmoothCursor from "@/components/SmoothCursor";
import { SmoothScroll } from "@/components/smooth-scroll";
import { ReducedMotionProvider } from "@/lib/motion";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import type { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }): ReactNode {
  return (
    <SessionProvider refetchOnWindowFocus={false}>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        <ReducedMotionProvider>
          <SmoothScroll>
            <SmoothCursor
              pointsCount={40}
              lineWidth={0.3}
              springStrength={0.4}
              dampening={0.5}
              color="#fafafa"
              blur={0}
              mixBlendMode="source-over"
              velocityScale={false}
              trailOpacity={0.8}
              smoothFactor={1}
            />
            {children}
          </SmoothScroll>
        </ReducedMotionProvider>
      </ThemeProvider>
    </SessionProvider>
  );
}
