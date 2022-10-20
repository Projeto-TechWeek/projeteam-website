import { InputHTMLAttributes, ReactNode } from "react";

import { Slot } from "@radix-ui/react-slot";

export interface InputRootProps {
  children: ReactNode;
  label: string;
}

function InputRoot({ children, label }: InputRootProps) {
  return (
    <div className="focus-within:text-indigo-300">
      <label className="relative focus-within:border-indigo-300 focus-within:text-indigo-300 bg-transparent border-2 rounded px-4 py-3 w-full text-[#ededed] flex flex-row-reverse items-center">
        {children}
      </label>
      <span className="flex transform w-fit -translate-y-16 bg-Secundary mx-4 px-2">
        {label}
      </span>
    </div>
  );
}

export interface InputIconProps {
  children: ReactNode;
}

function InputIcon({ children }: InputIconProps) {
  return (
    <>
      <Slot className="w-6 h-6 bg-Secundary ">{children}</Slot>
    </>
  );
}

InputIcon.displayName = "Input.Icon";

export interface InputInputProps
  extends InputHTMLAttributes<HTMLInputElement> {}

function InputInput(props: InputInputProps) {
  return (
    <input
      className="bg-transparent flex-1 text-gray-100 outline-none placeholder:text-gray-400"
      {...props}
    />
  );
}

InputInput.displayName = "Input.Input";

export const Input = {
  Root: InputRoot,
  Input: InputInput,
  Icon: InputIcon,
};
