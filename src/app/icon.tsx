import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(135deg, #8b5cf6 0%, #f0469b 52%, #ff8a3d 100%)",
          borderRadius: 14,
          fontSize: 38,
          fontWeight: 700,
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        W
      </div>
    ),
    { ...size },
  );
}
