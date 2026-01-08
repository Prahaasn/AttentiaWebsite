import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: "dark" | "darker" | "gradient" | "transparent";
  id?: string;
  padding?: "default" | "lg" | "none";
}

export function Section({
  children,
  className,
  background = "dark",
  id,
  padding = "default",
}: SectionProps) {
  const backgrounds = {
    dark: "bg-dark text-white",
    darker: "bg-dark-lighter text-white",
    gradient: "bg-gradient-primary text-white",
    transparent: "bg-transparent text-white",
  };

  const paddings = {
    default: "py-24 px-4 md:px-6 lg:px-8",
    lg: "py-32 px-4 md:px-6 lg:px-8",
    none: "px-4 md:px-6 lg:px-8",
  };

  return (
    <section
      id={id}
      className={cn(backgrounds[background], paddings[padding], className)}
    >
      <div className="container-wide">{children}</div>
    </section>
  );
}
