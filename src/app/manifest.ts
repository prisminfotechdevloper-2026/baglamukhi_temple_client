import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Shri Maa Baglamukhi Temple Nalkheda - Hawan & Puja Booking",
    short_name: "Maa Baglamukhi",
    description:
      "Best Hawan Puja Pandit in Nalkheda | Online Puja & Hawan Booking at Siddhapeeth Maa Baglamukhi Temple with Pt. Deepak Sharma.",
    start_url: "/",
    display: "standalone",
    background_color: "#FFF8E7",
    theme_color: "#8B0000",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
