import { CardProject } from "../components/CardProject";
import { Select } from "../components/Select";
import { Tag } from "../components/Tag";

export function Projects() {
  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center gap-2">
        <Tag label="Arte" />
        <Tag label="Turismo" className="bg-pink-400" />
        <Tag label="Tecnologia" className="bg-cyan-400" />
        <Select />
        <CardProject />
      </div>
    </>
  );
}
