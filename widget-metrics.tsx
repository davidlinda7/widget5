import Head from "next/head";
import { useRouter } from "next/router";

function Card({ title, value, sub, strong }: any) {
  return (
    <div style={{ borderRadius: 16, border: "1px solid #e5e7eb", background: "#fff", boxShadow: "0 1px 2px rgba(0,0,0,0.05)", padding: 16 }}>
      <h3 style={{ fontWeight: 600 }}>{title}</h3>
      <p style={{ fontSize: 28, fontWeight: 700, marginTop: 8, color: strong ? "#059669" : "#111827" }}>{value}</p>
      <p style={{ fontSize: 12, color: "#6b7280" }}>{sub}</p>
    </div>
  );
}

export default function WidgetMetrics() {
  const { query } = useRouter();
  const missed = Number(query.missed ?? 12);
  const conv = Number(query.conv ?? 5);
  const saved = Number(query.saved ?? 36);
  const goal = Number(query.goal ?? 72);

  return (
    <>
      <Head><title>Key Metrics</title></Head>
      <main style={{ padding: 16 }}>
        <section style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))" }}>
          <Card title="Missed Calls Today" value={missed} sub="Automatically followed up by AI" />
          <Card title="Text-Back Conversions" value={conv} sub="Leads re-engaged within minutes" />
          <div style={{ borderRadius: 16, border: "1px solid #e5e7eb", background: "#fff", boxShadow: "0 1px 2px rgba(0,0,0,0.05)", padding: 16 }}>
            <h3 style={{ fontWeight: 600 }}>Calls Saved This Week</h3>
            <p style={{ fontSize: 28, fontWeight: 700, marginTop: 8, color: "#059669" }}>{saved}</p>
            <div style={{ width: "100%", height: 8, background: "#e5e7eb", borderRadius: 999, overflow: "hidden", marginTop: 12 }}>
              <div style={{ height: 8, width: `${goal}%`, background: "#10b981" }} />
            </div>
            <p style={{ fontSize: 12, color: "#6b7280", marginTop: 4 }}>{goal}% of weekly goal</p>
          </div>
        </section>
      </main>
    </>
  );
}
