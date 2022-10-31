import { ButtonHTMLAttributes } from "react";
import { Slot } from "@radix-ui/react-slot";
import { clsx } from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  className?: string;
}

export function Button({
  children,
  asChild,
  className,
  ...props
}: ButtonProps) {
  const Component = asChild ? Slot : "button";
  return (
    <>
      <Component
        className={clsx(
          "font-sans py-3 px-4 bg-violet-500 rounded font-semibold text-black text-sm w-full transition-colors hover:bg-violet-400 focus:ring-2 ring-white",
          className
        )}
        {...props}
      >
        {children}
      </Component>
    </>
  );
}
