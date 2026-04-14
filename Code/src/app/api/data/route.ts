import { NextResponse } from "next/server";
import { readRecords, writeRecords, DataRecord } from "@/lib/dataStore";
import { randomUUID } from "crypto";

export async function GET() {
  return NextResponse.json(readRecords());
}

export async function POST(request: Request) {
  const body: Omit<DataRecord, "id"> = await request.json();
  const records = readRecords();
  const newRecord: DataRecord = { id: randomUUID(), ...body };
  records.push(newRecord);
  writeRecords(records);
  return NextResponse.json(newRecord, { status: 201 });
}

export async function DELETE() {
  writeRecords([]);
  return NextResponse.json({ ok: true });
}
