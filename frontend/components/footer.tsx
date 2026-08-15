import Link from "next/link";
import { Logo } from "@/components/logo";

const columns = [
  {
    title: "Product",
    links: [
      { label: "All tools", href: "/tools" },
      { label: "Blog", href: "/blog" },
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Guides",
    links: [
      { label: "How much does TikTok pay?", href: "/how-much-does-tiktok-pay" },
      { label: "Views to make $1,000", href: "/how-many-views-to-make-1000-on-tiktok" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-foreground/5 bg-muted/30">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-[2fr_1fr_1fr_1fr]">
        <div>
          <Logo />
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            Free, fast and privacy-friendly online utilities. No accounts, no
            tracking — everything runs right in your browser.
          </p>
        </div>
        {columns.map((col) => (
          <div key={col.title}>
            <p className="label">{col.title}</p>
            <ul className="mt-4 space-y-2.5">
              {col.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-foreground/5">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-muted-foreground sm:flex-row sm:px-6">
          <p>© {new Date().getFullYear()} Slyxup. All rights reserved.</p>
          <p>Made with Next.js & shadcn/ui</p>
        </div>
      </div>
    </footer>
  );
}