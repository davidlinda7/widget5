import Head from "next/head";
import { useState } from "react";

export default function WidgetUpsells() {
  const [tab, setTab] = useState<"ai" | "rep" | "soc" | "ana">("ai");

  return (
    <>
      <Head><title>Upsells</title></Head>
      <main style={{ padding: 16 }}>
        <section style={{ borderRadius: 16, border: "1px solid #e5e7eb", background: "#fff", boxShadow: "0 1px 2px rgba(0,0,0,0.05)", padding: 20 }}>
          <div style={{ display: "flex", gap: 8, marginBottom: 16 }}>
            {[
              ["ai","⚡ AI Agent"],
              ["rep","⭐ Reputation"],
              ["soc","💬 Social"],
              ["ana","📊 Analytics"],
            ].map(([key, label]) => (
              <button
                key={key}
                onClick={() => setTab(key as any)}
                style={{
                  padding: "8px 12px",
                  borderRadius: 12,
                  border: "1px solid #e5e7eb",
                  background: tab===key ? "#111827" : "#f3f4f6",
                  color: tab===key ? "#fff" : "#111827",
                  cursor: "pointer"
                }}
              >{label}</button>
            ))}
          </div>

          {tab==="ai" && (
            <div>
              <h3 style={{ fontWeight: 600, fontSize: 18, marginBottom: 8 }}>AI Sales & Support Agent</h3>
              <p style={{ color: "#6b7280", marginBottom: 16 }}>Turn missed calls into conversations 24/7. Greet, qualify, and book customers automatically.</p>
              <div style={{ display: "flex", gap: 12 }}>
                <a href="#" style={{ padding: "8px 12px", background: "#111827", color: "#fff", borderRadius: 12, textDecoration: "none" }}>Activate AI Agent</a>
                <a href="#" style={{ padding: "8px 12px", border: "1px solid #e5e7eb", borderRadius: 12, textDecoration: "none", color: "#111827" }}>View Conversation Samples</a>
              </div>
            </div>
          )}

          {tab==="rep" && (
            <div>
              <h3 style={{ fontWeight: 600, fontSize: 18, marginBottom: 8 }}>Reputation Management</h3>
              <p style={{ color: "#6b7280", marginBottom: 16 }}>Automatically request reviews after every job and publish them on Google & Facebook.</p>
              <div style={{ display: "flex", gap: 12 }}>
                <a href="#" style={{ padding: "8px 12px", background: "#111827", color: "#fff", borderRadius: 12, textDecoration: "none" }}>Enable Review Requests</a>
                <a href="#" style={{ padding: "8px 12px", border: "1px solid #e5e7eb", borderRadius: 12, textDecoration: "none", color: "#111827" }}>Connect Google</a>
              </div>
            </div>
          )}

          {tab==="soc" && (
            <div>
              <h3 style={{ fontWeight: 600, fontSize: 18, marginBottom: 8 }}>Social Media Planner</h3>
              <p style={{ color: "#6b7280", marginBottom: 16 }}>Schedule content to Facebook, Instagram, and LinkedIn from one dashboard.</p>
              <div style={{ display: "flex", gap: 12 }}>
                <a href="#" style={{ padding: "8px 12px", background: "#111827", color: "#fff", borderRadius: 12, textDecoration: "none" }}>Connect Social Accounts</a>
                <a href="#" style={{ padding: "8px 12px", border: "1px solid #e5e7eb", borderRadius: 12, textDecoration: "none", color: "#111827" }}>View Content Ideas</a>
              </div>
            </div>
          )}

          {tab==="ana" && (
            <div>
              <h3 style={{ fontWeight: 600, fontSize: 18, marginBottom: 8 }}>Advanced Analytics</h3>
              <p style={{ color: "#6b7280", marginBottom: 16 }}>See how automation impacts your bottom line: call stats, response times, conversions.</p>
              <div style={{ display: "flex", gap: 12 }}>
                <a href="#" style={{ padding: "8px 12px", background: "#111827", color: "#fff", borderRadius: 12, textDecoration: "none" }}>Upgrade to Pro</a>
                <a href="#" style={{ padding: "8px 12px", border: "1px solid #e5e7eb", borderRadius: 12, textDecoration: "none", color: "#111827" }}>See Demo</a>
              </div>
            </div>
          )}
        </section>
      </main>
    </>
  );
}
