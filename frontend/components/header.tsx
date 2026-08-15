"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Logo } from "@/components/logo";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Tools", href: "/tools" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-foreground/5 bg-background/70 backdrop-blur-xl supports-[backdrop-filter]:bg-background/50">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <Logo />
        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {navItems.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname?.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
                  active &&
                    "text-foreground after:absolute after:inset-x-3 after:-bottom-0.5 after:h-0.5 after:rounded-full after:bg-gradient-to-r after:from-coral-500 after:to-coral-600"
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-3">
          <Button
            size="sm"
            nativeButton={false}
            className="hidden sm:inline-flex"
            render={<Link href="/tools" />}
          >
            Browse tools
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}