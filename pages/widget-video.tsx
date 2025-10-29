import Head from "next/head";
import { useRouter } from "next/router";

export default function WidgetVideo() {
  const { query } = useRouter();
  const video = (query.video as string) || "https://www.youtube.com/embed/dQw4w9WgXcQ";
  return (
    <>
      <Head><title>Welcome Video</title></Head>
      <main style={{ padding: 16 }}>
        <section style={{ borderRadius: 16, border: "1px solid #e5e7eb", background: "#fff", boxShadow: "0 1px 2px rgba(0,0,0,0.05)", overflow: "hidden" }}>
          <div style={{ position: "relative", width: "100%", paddingTop: "56.25%", background: "#f3f4f6" }}>
            <iframe
              src={video}
              title="Welcome Video"
              allow="autoplay; encrypted-media; picture-in-picture"
              allowFullScreen
              style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: 0 }}
            />
          </div>
        </section>
      </main>
    </>
  );
}
