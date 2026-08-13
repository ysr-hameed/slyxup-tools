import Link from "next/link";
import { Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 font-medium">
          <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Wrench className="size-4" />
          </span>
          <span className="text-lg tracking-tight">Slyxup Tools</span>
        </Link>
        <nav className="hidden items-center gap-1 sm:flex">
          <Button variant="ghost" nativeButton={false} render={<Link href="/" />}>
            Home
          </Button>
          <Button variant="ghost" nativeButton={false} render={<Link href="/tools" />}>
            Tools
          </Button>
          <Button variant="ghost" nativeButton={false} render={<Link href="/about" />}>
            About
          </Button>
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}