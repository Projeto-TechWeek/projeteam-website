import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

export function Navbar() {
  return (
    <>
      <div className="w-full h-14 absolute bg-[#252323] shadow-sm flex justify-between px-14 items-center text-zinc-400 z-10">
        <a href="#">
          <img src="logo.svg" alt="logo" className="w-9 h-9" />
        </a>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild className="cursor-pointer">
            <img
              src="defaultAvatar.png"
              alt="foto de perfil"
              className="w-9 h-9 bg-zinc-600 rounded-full"
            />
          </DropdownMenu.Trigger>

          <DropdownMenu.Content className="bg-[#322f2f] rounded-sm p-1 mt-2 text-sm text-zinc-200 max-w-[120px]">
            <DropdownMenu.Item className="px-5 py-2 hover:bg-purple flex justify-center">
              Perfil
            </DropdownMenu.Item>
            <DropdownMenu.Item className="px-5 py-2 hover:bg-purple flex justify-center">
              Sair
            </DropdownMenu.Item>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </div>
    </>
  );
}
