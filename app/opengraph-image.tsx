/* eslint-disable @next/next/no-img-element */
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const runtime = "nodejs";

export const alt =
  "Ghost Trance / Ghostrance producer and YouTube music promotion brand";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  const logoData = await readFile(
    join(process.cwd(), "public", "ghost-trance-logo.jpg"),
    "base64",
  );
  const logoSrc = `data:image/jpeg;base64,${logoData}`;

  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "linear-gradient(135deg, #050505 0%, #141008 100%)",
          color: "#f4f4f5",
          display: "flex",
          height: "100%",
          justifyContent: "space-between",
          padding: "80px",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "28px",
            maxWidth: "690px",
          }}
        >
          <div
            style={{
              color: "#f0d38a",
              fontSize: 30,
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            Producer and music promoter
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 88,
              fontWeight: 800,
              lineHeight: 0.95,
            }}
          >
            <span>Ghost Trance</span>
            <span style={{ color: "#f0d38a" }}>Ghostrance</span>
          </div>
          <div
            style={{
              color: "#d4d4d8",
              fontSize: 34,
              lineHeight: 1.25,
            }}
          >
            Trance, electronic, dance, DnB, ambient, techno and YouTube music
            promotion.
          </div>
          <div
            style={{
              color: "#f0d38a",
              fontSize: 28,
              fontWeight: 700,
            }}
          >
            ghosttrance.com
          </div>
        </div>
        <div
          style={{
            alignItems: "center",
            border: "2px solid rgba(240, 211, 138, 0.45)",
            borderRadius: 220,
            display: "flex",
            height: 300,
            justifyContent: "center",
            width: 300,
          }}
        >
          <img
            alt="Ghost Trance logo"
            src={logoSrc}
            style={{
              borderRadius: 160,
              height: 240,
              width: 240,
            }}
          />
        </div>
      </div>
    ),
    size,
  );
}
