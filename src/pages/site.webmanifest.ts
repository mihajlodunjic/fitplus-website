import { business } from "../data/business";

export function GET() {
  return new Response(
    JSON.stringify(
      {
        name: business.fullName,
        short_name: business.name,
        description:
          "Fit Plus Gym u Jajincima sa cenovnikom, radnim vremenom i pregledom treninga.",
        start_url: "/",
        display: "standalone",
        background_color: "#111820",
        theme_color: "#111820",
        lang: business.language,
        icons: [
          {
            src: business.logo.src,
            sizes: `${business.logo.width}x${business.logo.height}`,
            type: "image/png",
          },
        ],
      },
      null,
      2,
    ),
    {
      headers: {
        "Content-Type": "application/manifest+json; charset=utf-8",
      },
    },
  );
}
