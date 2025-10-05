// src/app/resume/download/route.ts
import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export const runtime = "nodejs";

export async function GET() {
  const filePath = path.join(process.cwd(), "public", "resume.pdf");
  const buf = await fs.readFile(filePath);

  // Create a true ArrayBuffer (not ArrayBufferLike) by copying
  const ab = new ArrayBuffer(buf.byteLength);
  new Uint8Array(ab).set(buf); // copy Buffer bytes into AB

  return new NextResponse(ab, {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="Rohan_Anand_Resume.pdf"',
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
