import { Card } from "./Card";
import { Input } from "./Input";
import { MagnifyingGlass } from "phosphor-react";
import { Select } from "./Select";

export function Searchbar() {
  return (
    <>
      <Card.Root className="w-[540px] flex">
        <Card.Content className="flex !flex-row gap-1">
          <Input.Root className="">
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
