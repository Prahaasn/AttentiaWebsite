import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: "light" | "dark" | "gray" | "gradient";
  id?: string;
  padding?: "default" | "lg" | "none";
}

export function Section({
  children,
  className,
  background = "light",
  id,
  padding = "default",
}: SectionProps) {
  const backgrounds = {
    light: "bg-white",
    dark: "bg-dark text-white",
    gray: "bg-gray-50",
    gradient: "bg-gradient-primary text-white",
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
