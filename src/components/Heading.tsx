import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";
import { ReactNode } from "react";

export interface HeadingProps {
  size?: "sm" | "md" | "lg" | "xl";
  children: ReactNode;
  asChild?: boolean;
  className?: string;
}

export function Heading({
  size = "md",
  children,
  asChild,
  className,
}: HeadingProps) {
  const Component = asChild ? Slot : "h2";
  return (
    <>
      <Component
        className={clsx(
          "text-gray-100 font-bold font-sans",
          {
            "text-lg": size === "sm",
            "text-xl": size === "md",
            "text-2xl": size === "lg",
            "text-4xl": size === "xl",
          },
          className
        )}
      >
        {children}
      </Component>
    </>
  );
}