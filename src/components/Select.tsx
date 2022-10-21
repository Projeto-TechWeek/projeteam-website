import * as SelectPrimitive from "@radix-ui/react-select";
import { CaretDown, Check } from "phosphor-react";

export function Select() {
  const dados = ["Tecnologia", "Arte", "Turismo", "Mecâninca"];
  return (
    <>
      <SelectPrimitive.Root>
        <SelectPrimitive.Trigger
          aria-label="categoria"
          className="bg-slate-400 w-fit flex items-center px-2 rounded-md"
        >
          <SelectPrimitive.Value placeholder="Escolha a categoria…" />
          <SelectPrimitive.Icon>
            <CaretDown />
          </SelectPrimitive.Icon>
        </SelectPrimitive.Trigger>

        <SelectPrimitive.Portal>
          <SelectPrimitive.Content>
            <SelectPrimitive.ScrollUpButton />
            <SelectPrimitive.Viewport className="bg-gray-400 rounded">
              {dados.map((item) => {
                return (
                  <SelectPrimitive.Item
                    value={item}
                    className="w-full flex px-4 py-2 gap-1 justify-center items-center"
                  >
                    <SelectPrimitive.ItemText>{item}</SelectPrimitive.ItemText>
                    <SelectPrimitive.ItemIndicator>
                      <Check />
                    </SelectPrimitive.ItemIndicator>
                  </SelectPrimitive.Item>
                );
              })}

              <SelectPrimitive.Separator />
            </SelectPrimitive.Viewport>
            <SelectPrimitive.ScrollDownButton />
          </SelectPrimitive.Content>
        </SelectPrimitive.Portal>
      </SelectPrimitive.Root>
    </>
  );
}