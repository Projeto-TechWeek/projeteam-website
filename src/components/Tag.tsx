import { clsx } from "clsx";
import { Text } from "./Text";

export interface TagProps {
  label: string;
  className?: string;
}

export function Tag({ label, className }: TagProps) {
  return (
    <>
      <div
        className={clsx(
          "bg-green-400 w-fit px-2 rounded-3xl font-bold flex items-center justify-center",
          className
        )}
      >
        <Text className="text-[9px] text-zinc-900">{label}</Text>
      </div>
    </>
  );
}
