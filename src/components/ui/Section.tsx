import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: "white" | "light" | "dark";
  id?: string;
  padding?: "default" | "lg" | "none";
}

export function Section({
  children,
  className,
  background = "white",
  id,
  padding = "default",
}: SectionProps) {
  const backgrounds = {
    white: "bg-white text-[#191f2d]",
    light: "bg-[#f5f6f8] text-[#191f2d]",
    dark: "bg-[#191f2d] text-white",
  };

  const paddings = {
    default: "py-20 md:py-24 lg:py-28 px-6 md:px-10 lg:px-20",
    lg: "py-24 md:py-32 lg:py-40 px-6 md:px-10 lg:px-20",
    none: "px-6 md:px-10 lg:px-20",
  };

  return (
    <section
      id={id}
      className={cn(backgrounds[background], paddings[padding], className)}
    >
      <div className="max-w-[1400px] mx-auto">{children}</div>
    </section>
  );
}
