import { NextResponse } from "next/server";
import { readRecords, writeRecords, DataRecord } from "@/lib/dataStore";
import ExcelJS from "exceljs";

export async function POST(request: Request) {
  const contentType = request.headers.get("content-type") ?? "";

  if (contentType.includes("application/json")) {
    const body: DataRecord[] = await request.json();
    if (!Array.isArray(body)) {
      return NextResponse.json({ error: "Expected a JSON array" }, { status: 400 });
    }
    writeRecords(body);
    return NextResponse.json({ imported: body.length });
  }

  if (
    contentType.includes("multipart/form-data") ||
    contentType.includes("application/vnd.openxmlformats")
  ) {
    const formData = await request.formData();
    const file = formData.get("file");
    if (!(file instanceof Blob)) {
      return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
    }

    const arrayBuffer = await file.arrayBuffer();
    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.load(arrayBuffer);
    const sheet = workbook.worksheets[0];

    const headers: string[] = [];
    const records: DataRecord[] = [];

    sheet.eachRow((row, rowIndex) => {
      if (rowIndex === 1) {
        row.eachCell((cell) => headers.push(String(cell.value ?? "")));
        return;
      }
      const record: DataRecord = { id: crypto.randomUUID() };
      row.eachCell((cell, colIndex) => {
        const key = headers[colIndex - 1];
        if (key && key !== "id") record[key] = cell.value;
      });
      records.push(record);
    });

    writeRecords(records);
    return NextResponse.json({ imported: records.length });
  }

  return NextResponse.json({ error: "Unsupported content type" }, { status: 415 });
}
