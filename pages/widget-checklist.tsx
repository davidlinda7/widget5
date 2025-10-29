import Head from "next/head";
import { useRouter } from "next/router";

export default function WidgetChecklist() {
  const { query } = useRouter();
  const doneParam = (query.done as string) || "1"; // e.g., "1,3"
  const done = new Set(doneParam.split(",").map(n => parseInt(n, 10)).filter(n => !Number.isNaN(n)));
  const total = 4;
  const count = [1,2,3,4].filter(i => done.has(i)).length;
  const pct = Math.round((count / total) * 100);

  const Row = (idx: number, label: string) => (
    <li key={idx} style={{ display: "flex", gap: 12, alignItems: "center" }}>
      <input type="checkbox" checked={done.has(idx)} readOnly />
      <span style={{ color: done.has(idx) ? "#9ca3af" : undefined, textDecoration: done.has(idx) ? "line-through" as const : "none" }}>
        {label}
      </span>
    </li>
  );

  return (
    <>
      <Head><title>Setup Checklist</title></Head>
      <main style={{ padding: 16 }}>
        <section style={{ borderRadius: 16, border: "1px solid #e5e7eb", background: "#fff", boxShadow: "0 1px 2px rgba(0,0,0,0.05)", padding: 20 }}>
          <h3 style={{ fontWeight: 600, fontSize: 18, marginBottom: 12 }}>Setup Checklist</h3>
          <ul style={{ display: "grid", gap: 8 }}>
            {Row(1, "Connect your business number")}
            {Row(2, "Turn on Missed Call Text Back")}
            {Row(3, "Add SMS & email templates")}
            {Row(4, "Make a test call to verify")}
          </ul>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 16 }}>
            <div style={{ width: 192 }}>
              <div style={{ width: "100%", height: 8, background: "#e5e7eb", borderRadius: 999, overflow: "hidden" }}>
                <div style={{ height: 8, width: `${pct}%`, background: "#10b981" }} />
              </div>
              <p style={{ fontSize: 12, color: "#6b7280", marginTop: 4 }}>{count}/{total} ({pct}%)</p>
            </div>
            <a href="#" style={{ padding: "6px 10px", border: "1px solid #e5e7eb", borderRadius: 12, textDecoration: "none", color: "#111827", fontSize: 14 }}>View Setup Guide</a>
          </div>
        </section>
      </main>
    </>
  );
}
