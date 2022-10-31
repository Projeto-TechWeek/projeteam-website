import { Plus } from "phosphor-react";
import { Button } from "../components/Button";
import { CardProject } from "../components/CardProject";
import { Navbar } from "../components/Navbar";
import { Searchbar } from "../components/Searchbar";
import { useEffect, useState, useCallback } from "react";
import { ListAllProjects } from "../services/projects";

export interface RoleProp {
  id: string;
  projectId: string;
  name: string;
  description: string;
  vacancies: number;
}

export interface ListProjectProp {
  id: string;
  title: string;
  description: string;
  area: string;
  createdAt: string;
  Role: Array<RoleProp>;
}

export function Projects() {
  const [projects, setProjects] = useState([]);

  function formatProject(project: ListProjectProp) {
    return {
      id: project.id,
      title: project.title,
      description: project.description,
      area: project.area,
      createdAt: new Date(project.createdAt).toLocaleDateString(),
      Role: project.Role,
    };
  }

  const listProjects = useCallback(() => {
    ListAllProjects()
      .then((response) =>
        response.map((project: ListProjectProp) => formatProject(project))
      )
      .then((projectFormated) => setProjects(projectFormated));
  }, []);

  useEffect(() => {
    listProjects();
  }, []);

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

        {projects.map((project: ListProjectProp) => (
          <CardProject key={project.id} project={project} />
        ))}
      </div>
    </>
  );
}
