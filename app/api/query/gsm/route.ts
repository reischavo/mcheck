import { auth } from "@/auth";
import { queryGsm } from "@/lib/mysql";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const session = await auth();
    if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const user = session.user as { permissions?: string; balance?: number };
    if (user.permissions !== "full" && user.permissions !== "sorgu") {
      return NextResponse.json(
        { error: "Bu özelliğe erişim yetkiniz yok" },
        { status: 403 }
      );
    }

    if ((user.balance || 0) < 1) {
      return NextResponse.json(
        { error: "Yetersiz bakiye" },
        { status: 403 }
      );
    }

    const { gsm } = await req.json();
    if (!gsm) {
      return NextResponse.json(
        { error: "GSM numarası gerekli" },
        { status: 400 }
      );
    }

    const cleanGsm = gsm.replace(/\D/g, "");
    const results = await queryGsm(cleanGsm);

    // Bakiye düş
    const { updateUser } = await import("@/lib/db");
    updateUser(session.user.id, { balance: (user.balance || 0) - 1 });

    return NextResponse.json({ success: true, data: results });
  } catch (error) {
    console.error("GSM query error:", error);
    return NextResponse.json(
      { error: "Sorgu sırasında hata oluştu" },
      { status: 500 }
    );
  }
}
