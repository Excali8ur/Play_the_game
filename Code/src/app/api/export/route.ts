import { NextResponse } from "next/server";
import { readRecords } from "@/lib/dataStore";
import ExcelJS from "exceljs";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const format = searchParams.get("format") ?? "json";
  const records = readRecords();

  if (format === "json") {
    return new NextResponse(JSON.stringify(records, null, 2), {
      headers: {
        "Content-Type": "application/json",
        "Content-Disposition": 'attachment; filename="records.json"',
      },
    });
  }

  if (format === "xlsx") {
    const workbook = new ExcelJS.Workbook();
    const sheet = workbook.addWorksheet("Records");

    if (records.length > 0) {
      const keys = Object.keys(records[0]);
      sheet.addRow(keys);
      for (const record of records) {
        sheet.addRow(keys.map((k) => record[k]));
      }
    }

    const buffer = await workbook.xlsx.writeBuffer();
    return new NextResponse(buffer, {
      headers: {
        "Content-Type":
          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "Content-Disposition": 'attachment; filename="records.xlsx"',
      },
    });
  }

  return NextResponse.json({ error: "Unsupported format" }, { status: 400 });
}
