import { Card } from "../components/Card";
import { Input } from "../components/Input";
import { Envelope, Key } from "phosphor-react";
import { useState } from "react";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";

export function Login() {
  const [wantToLogIn, setWantToLogIn] = useState(true);

  function dontHaveAccount() {
    setWantToLogIn(!wantToLogIn);
  }
  return (
    <>
      <div className="w-screen h-screen bg-Primary flex justify-center items-center">
        <Card.Root className="w-[400px]">
          <Card.Header className="items-center pb-10 pt-4">
            <Heading size="xl" className="text-gray-100">
              {wantToLogIn ? "Entrar" : "Registrar"}
            </Heading>
          </Card.Header>
          <Card.Content>
            <Input.Root label="Email" className="mb-4">
              <Input.Icon>
                <Envelope />
              </Input.Icon>
              <Input.Input
                id="email"
                type="email"
                placeholder={"johndoe@gmail.com"}
              />
            </Input.Root>

            <Input.Root label="Senha" className="mb-3">
              <Input.Icon>
                <Key />
              </Input.Icon>
              <Input.Input
                id="password"
                type="password"
                placeholder={"*******"}
              />
            </Input.Root>
          </Card.Content>
          <Card.Footer>
            {wantToLogIn ? (
              <span className="text-xs">
                Não tem uma conta?
                <br /> Cadastre-se{" "}
                <span
                  className="text-blue-500 underline cursor-pointer"
                  onClick={() => dontHaveAccount()}
                >
                  aqui!
                </span>
              </span>
            ) : (
              <span className="text-xs">
                Já possui uma conta?
                <br /> Entre{" "}
                <span
                  className="text-blue-500 underline cursor-pointer"
                  onClick={() => dontHaveAccount()}
                >
                  aqui!
                </span>
              </span>
            )}
            <Button className="w-36">
              {wantToLogIn ? "Entrar" : "Registrar"}
            </Button>
          </Card.Footer>
        </Card.Root>
      </div>
    </>
  );
}
