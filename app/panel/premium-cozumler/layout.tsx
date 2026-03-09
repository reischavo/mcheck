import { auth } from "@/auth";
import { getUserById } from "@/lib/db";
import type { ReactNode } from "react";

export default async function PremiumLayout({ children }: { children: ReactNode }) {
  const session = await auth();
  const user = session?.user?.id ? getUserById(session.user.id) : null;
  const perms = user?.permissions ?? "none";
  const role = user?.role ?? "user";
  const hasAccess = role === "super_admin" || role === "mini_admin" || perms === "sorgu" || perms === "full";

  if (!hasAccess) {
    return (
      <div className="flex min-h-[70vh] items-center justify-center p-6">
        <div className="max-w-sm w-full text-center space-y-4">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-amber-500/20 bg-amber-500/8">
            <svg className="h-7 w-7 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <rect x="3" y="11" width="18" height="11" rx="2" />
              <path d="M7 11V7a5 5 0 0 1 10 0v4" strokeLinecap="round" />
            </svg>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-foreground">Premium Icerik</h2>
            <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">
              Bu sorgu paketi Sorgu veya Sorgu + Checker planina sahip uyeler icindir.
            </p>
          </div>
          <a href="/panel/bakiye-yukle" className="inline-flex items-center gap-2 rounded-xl bg-foreground px-5 py-2.5 text-sm font-medium text-background hover:opacity-80 transition-opacity">
            Plan Satin Al
          </a>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
