import { Button } from "./Button";
import { Card } from "./Card";
import { Heading } from "./Heading";
import { Tag } from "./Tag";
import { Text } from "./Text";

export function CardProject() {
  return (
    <>
      <Card.Root className="bg-white border-zinc-500 bg-opacity-10 backdrop-blur-sm border-2 drop-shadow-lg">
        <div className="flex px-4">
          <div className="flex flex-col max-w-[400px]">
            <Card.Header className="!justify-start">
              <div className="h-[146px] sm:w-[9em] md:w-[11em] lg:w-[22em] rounded overflow-clip bg-gray-300">
                <img src="" />
              </div>
            </Card.Header>
            <Card.Content>
              <div className="flex gap-2 items-center mt-3">
                <Heading className="text-zinc-200">Projeteam</Heading>
                <Tag label="Tecnologia" className="bg-cyan-400" />
              </div>
            </Card.Content>
            <Card.Footer>
              <Text className="text-zinc-200 mt-3 pr-6">
                O Projeteam é um projeto do curso de Análise e Desenvolvimento
                de Sistemas que visa a possibilitar a formação de grupos para
                realizar projetos sociais, pessoais...
              </Text>
            </Card.Footer>
          </div>

          <div className="flex flex-col">
            <Card.Root className="w-[170px] p-2 bg-transparent flex border-2 border-zinc-500">
              <Card.Header>
                <Heading
                  size="sm"
                  className="flex justify-center items-start text-zinc-200"
                >
                  Vagas
                </Heading>
              </Card.Header>
              <Card.Content className="mt-2 gap-3 !flex-row flex-wrap">
                <Tag label="Backend | 4" className="bg-green-400" />
                <Tag label="Frontend | 2" className="bg-blue-400" />
                <Tag label="Banco de dados | 4" className="bg-yellow-200" />
              </Card.Content>
            </Card.Root>
            <Button className="mt-auto bg-gradient-to-r from-[#6b92ed] via-[#9583E2] to-[#BE82D8] transition-colors ease-in delay-105 hover:from-[#da84ff] hover::to-[#6b92ed] text-gray-50">
              Ver mais
            </Button>
          </div>
        </div>
      </Card.Root>
    </>
  );
}
