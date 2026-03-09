import { auth } from "@/auth";
import { getUserById } from "@/lib/db";
import { redirect } from "next/navigation";

export type UserPermissions = "none" | "sorgu" | "checker" | "full";

async function getDbPermissions(): Promise<{ role: string; permissions: string }> {
  const session = await auth();
  const userId = session?.user?.id;
  if (!userId) return { role: "user", permissions: "none" };
  const user = getUserById(userId);
  return { role: user?.role ?? "user", permissions: user?.permissions ?? "none" };
}

export function isAdmin(role?: string) {
  return role === "super_admin" || role === "mini_admin";
}

/** sorgu perm → only premium-cozumler; full → all sorgu routes */
export function hasPremiumSorguAccess(role?: string, permissions?: string) {
  if (isAdmin(role)) return true;
  return permissions === "sorgu" || permissions === "full";
}

/** full sorgu access — all sorgu routes except premium which uses hasPremiumSorguAccess */
export function hasFullSorguAccess(role?: string, permissions?: string) {
  if (isAdmin(role)) return true;
  return permissions === "full";
}

export function hasCheckerAccess(role?: string, permissions?: string) {
  if (isAdmin(role)) return true;
  return permissions === "checker" || permissions === "full";
}

export async function requirePremiumSorguAccess() {
  const { role, permissions } = await getDbPermissions();
  if (!hasPremiumSorguAccess(role, permissions)) {
    redirect("/panel?erişim=sorgu");
  }
}

export async function requireFullSorguAccess() {
  const { role, permissions } = await getDbPermissions();
  if (!hasFullSorguAccess(role, permissions)) {
    redirect("/panel?erişim=full");
  }
}

export async function requireCheckerAccess() {
  const { role, permissions } = await getDbPermissions();
  if (!hasCheckerAccess(role, permissions)) {
    redirect("/panel?erişim=checker");
  }
}
