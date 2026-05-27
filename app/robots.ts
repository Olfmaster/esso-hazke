import type { MetadataRoute } from "next";

const SITE_URL = "https://esso-hazke.de";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // General crawlers
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      // AI search & assistants — explicitly allowed so the site can be cited
      // in ChatGPT, Perplexity, Claude, Google AI Overviews, Bing Copilot etc.
      {
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "OAI-SearchBot",
          "ClaudeBot",
          "Claude-Web",
          "anthropic-ai",
          "PerplexityBot",
          "Perplexity-User",
          "Google-Extended",
          "Googlebot",
          "Googlebot-Image",
          "Bingbot",
          "DuckDuckBot",
          "Applebot",
          "Applebot-Extended",
          "Amazonbot",
          "Bytespider",
          "FacebookBot",
          "meta-externalagent",
          "CCBot",
        ],
        allow: "/",
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
