import { cn } from "@/lib/utils";

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
}

export function PageHeader({
  eyebrow,
  title,
  description,
  align = "center",
  className,
}: PageHeaderProps) {
  return (
    <div
      className={cn(
        "mb-10 max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <p className="label text-primary">{eyebrow}</p>
      )}
      <h1 className="mt-3 font-heading text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
        {title}
      </h1>
      {description && (
        <p className="mt-4 text-muted-foreground text-pretty">{description}</p>
      )}
    </div>
  );
}