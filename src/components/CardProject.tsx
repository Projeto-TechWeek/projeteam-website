import { Card } from "./Card";
import { Heading } from "./Heading";
import { Tag } from "./Tag";
import { Text } from "./Text";

export function CardProject() {
  return (
    <>
      <Card.Root className="bg-[#848484] bg-opacity-10 border-2">
        <div className="flex px-4">
          <div className="flex flex-col max-w-[400px]">
            <Card.Header className="text-zinc-900 !justify-start">
              <div className="h-[146px] w-[340px] rounded overflow-clip bg-gray-300">
                <img src="" />
              </div>
            </Card.Header>
            <Card.Content>
              <div className="flex gap-2 items-center mt-3">
                <Heading className="text-zinc-900">Projeteam</Heading>
                <Tag label="Tecnologia" className="bg-cyan-400" />
              </div>
            </Card.Content>
            <Card.Footer>
              <Text className="text-zinc-900 mt-3">
                O Projeteam é um projeto do curso de Análise e Desenvolvimento
                de Sistemas que visa a possibilitar a formação de grupos para
                realizar projetos sociais, pessoais...
              </Text>
            </Card.Footer>
          </div>

          <div>
            <Card.Root className="w-[170px] p-2">
              <Card.Header>
                <Heading size="sm" className="flex justify-center items-start">
                  Vagas
                </Heading>
              </Card.Header>
              <Card.Content className="mt-2 gap-3 !flex-row flex-wrap">
                <Tag label="Backend | 4" className="bg-green-400" />
                <Tag label="Frontend | 2" className="bg-blue-400" />
                <Tag label="Banco de dados | 4" className="bg-yellow-200" />
              </Card.Content>
            </Card.Root>
          </div>
        </div>
      </Card.Root>
    </>
  );
}
