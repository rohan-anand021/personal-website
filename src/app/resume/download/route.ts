import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export async function GET() {
  const filePath = path.join(process.cwd(), "public", "resume.pdf");
  const file = await fs.readFile(filePath);

  return new NextResponse(file, {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="Rohan_Anand_Resume.pdf"',
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
