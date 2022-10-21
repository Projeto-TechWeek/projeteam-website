import { ReactNode } from "react";
import { clsx } from "clsx";

export interface CardRootProps {
  children: ReactNode;
  className?: string;
}

function CardRoot({ children, className }: CardRootProps) {
  return (
    <div
      className={clsx(
        "p-6 bg-Secundary text-gray-300 rounded flex flex-col",
        className
      )}
    >
      {children}
    </div>
  );
}

CardRoot.displayName = "Card.Root";

export interface CardHeaderProps {
  children: ReactNode;
  className?: string;
}

function CardHeader({ children, className }: CardHeaderProps) {
  return (
    <>
      <div
        className={clsx(
          "font-bold flex flex-col gap-3 justify-center",
          className
        )}
      >
        {children}
      </div>
    </>
  );
}

CardHeader.displayName = "Card.Header";

export interface CardContentProps {
  children: ReactNode;
  className?: string;
}

function CardContent({ children, className }: CardContentProps) {
  return (
    <>
      <div className={clsx("flex flex-col justify-around", className)}>
        {children}
      </div>
    </>
  );
}

CardContent.displayName = "Card.Content";

export interface CardFooterProps {
  children: ReactNode;
  className?: string;
}

function CardFooter({ children, className }: CardFooterProps) {
  return (
    <>
      <div className={clsx("flex gap-3 justify-between", className)}>
        {children}
      </div>
    </>
  );
}

CardFooter.displayName = "Card.Footer";

export const Card = {
  Root: CardRoot,
  Header: CardHeader,
  Content: CardContent,
  Footer: CardFooter,
};
