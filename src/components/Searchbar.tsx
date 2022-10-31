import { Card } from "./Card";
import { Input } from "./Input";
import { MagnifyingGlass } from "phosphor-react";
import { Select } from "./Select";

export function Searchbar() {
  return (
    <>
      <Card.Root className="sm:text-sm lg:text-base sm:p-2 sm:w-[430px] md:w-[540px] md:p-4">
        <Card.Content className="flex !flex-row gap-1 flex-wrap">
          <Input.Root>
            <Input.Icon>
              <MagnifyingGlass />
            </Input.Icon>
            <Input.Input placeholder="Pesquise algum projeto..."></Input.Input>
          </Input.Root>
          <Select />
        </Card.Content>
      </Card.Root>
    </>
  );
}
