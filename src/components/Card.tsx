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
        "p-6 bg-Secundary text-gray-300 w-[400px] rounded flex flex-col",
        className
      )}
    >
      {children}
    </div>
  );
}

CardRoot.displayName = "Card.Root";

export interface CardHeaderProps {
  title: string;
  className?: string;
}

function CardHeader({ title, className }: CardHeaderProps) {
  return (
    <>
      <div
        className={clsx(
          "font-bold text-4xl text-white flex justify-center mt-3 mb-12",
          className
        )}
      >
        {title}
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
      <div className={clsx("flex flex-col h-2/3 justify-around", className)}>
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

/*
export function LoginCard({ title, children, dontHaveAccount }: CardProps) {
  return (
    <>
      <div className="p-6 bg-Secundary text-gray-300 w-[400px] rounded flex flex-col">
        <div className="font-bold text-4xl text-white flex justify-center mt-3 mb-12">
          {title}
        </div>
        <div className="flex flex-col h-2/3 justify-around">{children}</div>
        <div className="flex gap-3 justify-between">
          <span className="text-xs">
            Não tem uma conta?
            <br /> Cadastre-se{" "}
            <span
              className="text-blue-500 underline cursor-pointer"
              onClick={dontHaveAccount}
            >
              aqui!
            </span>
          </span>
          <Button className="w-36">Entrar</Button>
        </div>
      </div>
    </>
  );
}
*/
