import { auth } from "@/auth";
import { querySecmen } from "@/lib/mysql";
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

    const { tc } = await req.json();
    if (!tc || tc.length !== 11) {
      return NextResponse.json(
        { error: "Geçerli bir TC kimlik numarası gerekli" },
        { status: 400 }
      );
    }

    const results = await querySecmen(tc);

    // Bakiye düş
    const { updateUser } = await import("@/lib/db");
    updateUser(session.user.id, { balance: (user.balance || 0) - 1 });

    return NextResponse.json({ success: true, data: results });
  } catch (error) {
    console.error("Secmen query error:", error);
    return NextResponse.json(
      { error: "Sorgu sırasında hata oluştu" },
      { status: 500 }
    );
  }
}
