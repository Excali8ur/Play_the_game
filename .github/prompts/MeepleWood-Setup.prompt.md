---
mode: agent
description: Set up the Meeplewood Next.js web application structure with D3.js visualisation and Excel/JSON data handling.
---

# Meeplewood – Application Setup

Create a basic structure for the Meeplewood web application using the following stack:

- **Framework**: Next.js (App Router, TypeScript, Tailwind CSS)
- **Visualisation**: D3.js
- **Excel/JSON handling**: ExcelJS (NOT SheetJS/xlsx — has unpatched security vulnerabilities)
- **Data store**: Flat JSON file (`data/records.json`) — no database required for basic setup

## Structure to generate

### Pages (`app/`)
| Route | File | Purpose |
|---|---|---|
| `/` | `app/page.tsx` | Home dashboard with navigation tiles |
| `/data` | `app/data/page.tsx` | View records table, add rows |
| `/import` | `app/import/page.tsx` | Upload `.xlsx` or `.json` file |
| `/export` | `app/export/page.tsx` | Download dataset as JSON or Excel |
| `/visualise` | `app/visualise/page.tsx` | Interactive D3 bar chart with column picker |

### API Routes (`app/api/`)
| Endpoint | File | Methods |
|---|---|---|
| `/api/data` | `app/api/data/route.ts` | GET (list), POST (add), DELETE (clear all) |
| `/api/import` | `app/api/import/route.ts` | POST — accepts JSON body or multipart xlsx |
| `/api/export` | `app/api/export/route.ts` | GET `?format=json\|xlsx` |

### Shared code
- `components/NavBar.tsx` — top navigation bar (client component)
- `components/BarChart.tsx` — D3.js bar chart (client component, renders in `useEffect`)
- `lib/dataStore.ts` — `readRecords()` / `writeRecords()` helpers for `data/records.json`
- `data/records.json` — flat-file data store, starts as `[]`

## Key implementation notes

- Use **ExcelJS** (not xlsx) — `npm install exceljs`
- Use **D3 v7** — `npm install d3 && npm install --save-dev @types/d3`
- D3 chart must be a `"use client"` component using `useRef<SVGSVGElement>` and `useEffect`
- `dataStore.ts` uses Node `fs` — only importable in API routes (server-side), not in page components
- `lib/dataStore.ts` `ExcelJS.Workbook.xlsx.load()` accepts `ArrayBuffer`, not `Buffer`
- The `app/layout.tsx` should import `NavBar` and wrap `{children}` in `<main>`
- Records have a generated `id: string` (via `crypto.randomUUID()`) plus arbitrary user-defined fields
- The Visualise page must auto-detect numeric columns from the loaded records for the value axis

## Running the app

```powershell
cd C:\Repros\Meeplewood\Code\src
npm run dev       # http://localhost:3000
npm run build
npm start
```
