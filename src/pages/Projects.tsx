import { Plus } from "phosphor-react";
import { Button } from "../components/Button";
import { CardProject } from "../components/CardProject";
import { Navbar } from "../components/Navbar";
import { Searchbar } from "../components/Searchbar";

export function Projects() {
  return (
    <>
      <Navbar />
      <div className="w-screen h-screen flex justify-center items-center gap-12 bg-Primary flex-wrap overflow-y-auto py-12">
        <div className="flex w-full items-center justify-center gap-4 p-4">
          <Searchbar />
          <Button className="w-32 flex gap-2 items-center">
            <Plus size={32} />
            Adicionar Projeto
          </Button>
        </div>

        <CardProject />
      </div>
    </>
  );
}
