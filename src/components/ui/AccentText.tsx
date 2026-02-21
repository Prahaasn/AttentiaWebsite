import { cn } from "@/lib/utils";

interface AccentTextProps {
  children: React.ReactNode;
  className?: string;
  as?: "span" | "h1" | "h2" | "h3" | "h4" | "p";
}

export function AccentText({
  children,
  className,
  as: Component = "span",
}: AccentTextProps) {
  return (
    <Component className={cn("text-[#186ff1]", className)}>
      {children}
    </Component>
  );
}
