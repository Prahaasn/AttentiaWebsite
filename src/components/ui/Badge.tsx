import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "gradient";
  className?: string;
}

export function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium",
        variant === "default" && "bg-gray-100 text-gray-700",
        variant === "gradient" && "gradient-border bg-white text-gray-700",
        className
      )}
    >
      {children}
    </span>
  );
}
