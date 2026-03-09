import { NextResponse } from "next/server";
import { auth } from "@/auth";
import fs from "fs";
import path from "path";

interface BinEntry {
  bank: string;
  bankCode: string;
  type: string;
  subType: string;
  virtual: boolean;
  prepaid: boolean;
}

type BinDB = Record<string, BinEntry>;

let cachedBins: BinDB | null = null;

function getBins(): BinDB {
  if (cachedBins) return cachedBins;
  try {
    const raw = fs.readFileSync(path.join(process.cwd(), "data", "bins.json"), { encoding: "utf8" });
    cachedBins = JSON.parse(raw) as BinDB;
    return cachedBins;
  } catch {
    return {};
  }
}

export async function GET(req: Request) {
  const session = await auth();
  if (!session?.user?.id) return NextResponse.json({ error: "Giriş gerekli." }, { status: 401 });

  const { searchParams } = new URL(req.url);
  const bin = searchParams.get("bin")?.trim().replace(/\D/g, "").slice(0, 6);
  if (!bin) return NextResponse.json({ error: "BIN gerekli." }, { status: 400 });

  const db = getBins();

  // Try 6-digit first, then 5, then 4
  const entry = db[bin] ?? db[bin.slice(0, 5)] ?? db[bin.slice(0, 4)];

  if (!entry) return NextResponse.json({ found: false, bin });

  return NextResponse.json({ found: true, bin, ...entry });
}
