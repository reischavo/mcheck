import { NextResponse } from "next/server";
import { auth } from "@/auth";
import { getTickets } from "@/lib/db";

export async function GET() {
  try {
    const session = await auth();
    const role = (session?.user as Record<string, unknown>)?.role as string | undefined;
    if (role !== "super_admin" && role !== "mini_admin") {
      return NextResponse.json({ error: "Yetkisiz." }, { status: 403 });
    }
    return NextResponse.json(getTickets());
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}
