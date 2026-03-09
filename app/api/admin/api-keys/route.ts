import { NextResponse } from "next/server";
import { auth } from "@/auth";
import fs from "fs";
import path from "path";

function getApiKeysPath() { return path.join(process.cwd(), "data", "api-keys.json"); }

function readKeys(): Record<string, string> {
  return JSON.parse(fs.readFileSync(getApiKeysPath(), "utf-8")) as Record<string, string>;
}

function writeKeys(data: Record<string, string>) {
  fs.writeFileSync(getApiKeysPath(), JSON.stringify(data, null, 2), "utf-8");
}

export async function GET() {
  const session = await auth();
  const role = (session?.user as Record<string, unknown>)?.role as string | undefined;
  if (role !== "super_admin") {
    return NextResponse.json({ error: "Yetkisiz." }, { status: 403 });
  }
  return NextResponse.json(readKeys());
}

export async function POST(req: Request) {
  const session = await auth();
  const role = (session?.user as Record<string, unknown>)?.role as string | undefined;
  if (role !== "super_admin") {
    return NextResponse.json({ error: "Yetkisiz." }, { status: 403 });
  }
  const body = await req.json() as Record<string, string>;
  const current = readKeys();
  const updated = { ...current, ...body };
  writeKeys(updated);
  return NextResponse.json({ success: true });
}
