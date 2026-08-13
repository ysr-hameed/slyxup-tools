import type { Metadata, Viewport } from "next";
import { geistMono, poppins, spaceGrotesk } from "@/app/fonts";
import { ThemeProvider } from "@/app/providers";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import "./globals.css";

const SITE_URL = "https://tools.slyxup.in";
const SITE_NAME = "Slyxup Tools";
const SITE_DESCRIPTION =
  "Free, fast and privacy-friendly online utilities — no sign-ups, no bloat.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Free Online Tools`,
    template: `%s · ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "free online tools",
    "online utilities",
    "tiktok money calculator",
    "free calculators",
    "browser tools",
    "privacy friendly tools",
  ],
  authors: [{ name: "Slyxup", url: SITE_URL }],
  creator: "Slyxup",
  publisher: "Slyxup",
  category: "technology",
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: `${SITE_NAME} — Free Online Tools`,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    locale: "en_US",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} — Free online tools`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — Free Online Tools`,
    description: SITE_DESCRIPTION,
    images: ["/og-image.svg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [{ url: "/apple-touch-icon.svg", type: "image/svg+xml" }],
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: SITE_URL,
    languages: {
      "en-US": SITE_URL,
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#111111" },
  ],
  width: "device-width",
  initialScale: 1,
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/favicon.svg`,
  description: SITE_DESCRIPTION,
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  description: SITE_DESCRIPTION,
  inLanguage: "en-US",
  publisher: {
    "@type": "Organization",
    name: "Slyxup",
    url: SITE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${poppins.variable} ${geistMono.variable} ${spaceGrotesk.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body className="flex min-h-screen flex-col bg-background font-sans text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          <main className="flex flex-1 flex-col">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}