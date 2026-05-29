import Papa from 'papaparse';

const SHEET_URL =
  'https://docs.google.com/spreadsheets/d/1-LupBV6uNuUitz4vF6pFv6MupuVDMujafqhjQBNNPTA/export?format=csv';

export async function fetchProperties() {
  const res = await fetch(SHEET_URL, {
    next: {
      revalidate: 60,
    },
  });

  const csv = await res.text();

  const parsed = Papa.parse(csv, {
    header: true,
    skipEmptyLines: true,
  });

  return parsed.data;
}