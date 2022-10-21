import { clsx } from "clsx";

export interface TagProps {
  label: string;
  className?: string;
}

export function Tag({ label, className }: TagProps) {
  return (
    <>
      <div
        className={clsx(
          "bg-gray-400 w-fit px-2 py-1 rounded-3xl text-[9px] font-bold",
          className
        )}
      >
        {label}
      </div>
    </>
  );
}
