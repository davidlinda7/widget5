import Head from "next/head";
import { useRouter } from "next/router";

export default function WidgetBanner() {
  const { query } = useRouter();
  const total = Number(query.trial_total ?? 14);
  const used = Number(query.trial_used ?? 3);
  const left = Math.max(total - used, 0);
  const pct = Math.min(Math.round((used / total) * 100), 100);

  return (
    <>
      <Head><title>Trial Banner</title></Head>
      <main style={{ padding: 16 }}>
        <section style={{
          borderRadius: 16, border: "1px solid #e5e7eb", background: "#fff", boxShadow: "0 1px 2px rgba(0,0,0,0.05)", padding: 16
        }}>
          <div style={{ display: "flex", gap: 12, alignItems: "center", justifyContent: "space-between", flexWrap: "wrap" }}>
            <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
              <div style={{ height: 36, width: 36, borderRadius: 999, background: "#FEF3C7", display: "grid", placeItems: "center" }}>⚠️</div>
              <div>
                <p style={{ fontWeight: 600 }}>Free Trial Active — {left} day{left===1? "" : "s"} left</p>
                <p style={{ fontSize: 12, color: "#6b7280" }}>See how missed-call automation impacts revenue. Unlock Pro when you’re ready.</p>
              </div>
            </div>
            <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
              <div style={{ width: 192 }}>
                <div style={{ width: "100%", height: 8, background: "#e5e7eb", borderRadius: 999, overflow: "hidden" }}>
                  <div style={{ height: 8, width: `${pct}%`, background: "#10b981" }} />
                </div>
                <p style={{ fontSize: 12, color: "#6b7280", marginTop: 4 }}>{pct}% of trial used</p>
              </div>
              <a href="#" style={{ padding: "8px 12px", background: "#111827", color: "#fff", borderRadius: 12, textDecoration: "none" }}>Upgrade</a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
