import { ListProjectProp, RoleProp } from "../pages/Projects";
import { Button } from "./Button";
import { Card } from "./Card";
import { Heading } from "./Heading";
import { Tag } from "./Tag";
import { Text } from "./Text";
import * as Dialog from "@radix-ui/react-dialog";
import { ModalInfoProject } from "./ModalInfoProject";
import { useState, useCallback } from "react";
import { GetProjectData } from "../services/projects";

interface UserProjectProps {
  userId: string;
  projectId: string;
  tierId: number;
  roleId: string;
}

export interface GetProjectProps extends ListProjectProp {
  methodology: string;
  User_Project: Array<UserProjectProps>;
}

interface ContactProjectProps {
  phone: string;
}

export interface ProjectOwnerProps extends GetProjectProps {
  phone: string;
}

interface ResponseProps {
  project: GetProjectProps;
  contactProject: ContactProjectProps;
}

interface CardProjectProps {
  project: ListProjectProp;
}

export function CardProject({ project }: CardProjectProps) {
  const [projectData, setProjectData] = useState<ProjectOwnerProps>();

  function formatProject(
    project: GetProjectProps,
    { phone }: ContactProjectProps
  ) {
    return {
      id: project.id,
      title: project.title,
      description: project.description,
      methodology: project.methodology,
      area: project.area,
      createdAt: new Date(project.createdAt).toLocaleDateString(),
      Role: project.Role,
      User_Project: project.User_Project,
      phone: phone,
    };
  }

  const getProjectData = useCallback(() => {
    GetProjectData(project.id)
      .then((response: ResponseProps) =>
        formatProject(response.project, response.contactProject)
      )
      .then((projectFormated) => setProjectData(projectFormated));
  }, []);

  const handleGetData = () => {
    getProjectData();
  };

  return (
    <>
      <Card.Root className="bg-white border-zinc-500 bg-opacity-10 backdrop-blur-sm border-2 drop-shadow-lg">
        <div className="flex px-4">
          <div className="flex flex-col lg:h-[260px] sm:w-[190px] md:w-[340px] lg:w-[400px]">
            <Card.Header className="!justify-start">
              <div className="sm:h-[120px] md:h-[146px] sm:w-[10em] md:w-[19em] lg:w-[22em] rounded overflow-clip bg-gray-300">
                <img src="" />
              </div>
            </Card.Header>

            <Card.Content>
              <div className="flex gap-2 items-center mt-3 flex-wrap">
                <Heading className="text-zinc-200">{project.title}</Heading>
                <Tag label={project.area} className="!bg-cyan-400" />
              </div>
            </Card.Content>
            <Card.Footer>
              <Text className="text-zinc-200 mt-3 pr-6">
                {project.description}
              </Text>
            </Card.Footer>
          </div>

          <div className="flex flex-col justify-between">
            <Card.Root className="sm:w-[120px] sm:mb-12 md:w-[170px] p-2 bg-transparent flex border-2 border-zinc-500">
              <Card.Header>
                <Heading
                  size="sm"
                  className="flex justify-center items-start text-zinc-200"
                >
                  Vagas
                </Heading>
              </Card.Header>
              <Card.Content className="mt-2 gap-3 !flex-row flex-wrap overflow-auto">
                {project.Role.map((vaga) => (
                  <Tag
                    key={vaga.id}
                    label={`${vaga.name} | ${vaga.vacancies}`}
                    className="bg-green-400"
                  />
                ))}
              </Card.Content>
            </Card.Root>
            <Dialog.Root>
              <Dialog.Trigger asChild>
                <Button
                  className="mt-auto bg-gradient-to-r from-[#6b92ed] via-[#9583E2] to-[#BE82D8] transition-colors ease-in delay-105 hover:from-[#da84ff] hover::to-[#6b92ed] text-gray-50 sm:"
                  onClick={handleGetData}
                >
                  Ver mais
                </Button>
              </Dialog.Trigger>
              {projectData ? <ModalInfoProject project={projectData} /> : ""}
            </Dialog.Root>
          </div>
        </div>
      </Card.Root>
    </>
  );
}
