import * as Dialog from "@radix-ui/react-dialog";
import { Card } from "./Card";
import { ProjectOwnerProps } from "./CardProject";
import { Heading } from "./Heading";
import { Tag } from "./Tag";
import { Text } from "./Text";

interface ModalInfoProps {
  project?: ProjectOwnerProps;
}

export function ModalInfoProject({ project }: ModalInfoProps) {
  function formatPhoneNumber(numero: string) {
    var length = numero.length;
    var telefoneFormatado;
    const ddd = numero.substring(0, 2);

    if (length === 10) {
      telefoneFormatado =
        "(" +
        ddd +
        ") " +
        numero.substring(2, 6) +
        "-" +
        numero.substring(6, 11);
    } else if (length === 11) {
      telefoneFormatado =
        "(" +
        ddd +
        ") " +
        numero.substring(2, 7) +
        "-" +
        numero.substring(7, 11);
    }
    return telefoneFormatado;
  }

  return (
    <>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/60 backdrop-blur-sm inset-0 fixed z-20">
          <Dialog.Content className="fixed bg-modalBg py-8 px-10 text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg w-[720px] shadow-lg shadow-black/25">
            <div className="flex gap-3 items-center mt-3 flex-wrap">
              <Dialog.Title className="text-2xl font-bold">
                {project?.title}
              </Dialog.Title>
              <Tag
                label={project ? project.area : ""}
                className="!bg-cyan-400"
              />
            </div>

            <div className="py-4 flex flex-col">
              <Heading size="sm" className="text-lg">
                Descrição
              </Heading>
              <hr className="my-2" />
              <Text>{project?.description}</Text>
            </div>

            <div className="flex justify-around mx-12 mt-6">
              <Card.Root className="sm:w-[120px] sm:mb-12 md:w-[170px] h-[200px] p-2 flex border-2 border-zinc-500 bg-black/10 overflow-y-auto">
                <Card.Header>
                  <Heading
                    size="sm"
                    className="flex justify-center items-start text-zinc-200"
                  >
                    Vagas
                  </Heading>
                  <hr className="mb-2" />
                </Card.Header>
                <Card.Content className="mt-2 gap-3 !flex-row flex-wrap overflow-auto">
                  {project?.Role.map((vaga) => (
                    <Tag
                      key={vaga.id}
                      label={`${vaga.name} | ${vaga.vacancies}`}
                      className="bg-green-400"
                    />
                  ))}
                </Card.Content>
              </Card.Root>

              <Card.Root className="sm:w-[120px] sm:mb-12 md:w-[170px] h-[200px] p-2 flex border-2 border-zinc-500 bg-black/10 overflow-y-auto">
                <Card.Header>
                  <Heading
                    size="sm"
                    className="flex justify-center items-start text-zinc-200"
                  >
                    Metodologia
                  </Heading>
                  <hr />
                  <Text className="flex justify-center font-normal mb-3">
                    {project?.methodology}
                  </Text>
                </Card.Header>

                <Card.Content>
                  <Heading
                    size="sm"
                    className="flex justify-center items-start text-zinc-200"
                  >
                    Comunicação
                  </Heading>
                  <hr className="my-3" />
                  <Text className="flex justify-center">
                    {project ? formatPhoneNumber(project.phone) : ""}
                  </Text>
                </Card.Content>
              </Card.Root>
            </div>
            <Card.Footer className="flex !justify-end w-full">
              <Dialog.Close className="bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600">
                Cancelar
              </Dialog.Close>
            </Card.Footer>
          </Dialog.Content>
        </Dialog.Overlay>
      </Dialog.Portal>
    </>
  );
}
