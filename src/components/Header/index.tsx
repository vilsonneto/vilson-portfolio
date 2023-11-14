import Image from "next/image";
import style from "./style.module.css"
import { Dispatch, SetStateAction } from "react";

interface IHeaderProps {
  setOpenContact: Dispatch<SetStateAction<boolean>>
}

export const Header = ({setOpenContact}: IHeaderProps) => {
  return (
    <header className={`h-28 w-full bg-blueBaby-300 flex flex-row justify-between font-bold ${style.text}`}>
      <div className={`h-full flex flex-row items-center gap-2 ml-9 `}>
        <Image
          className="w-14 h-14 rounded-full"
          src="/vilson.png"
          width={55}
          height={55}
          alt="Picture of the author"
        />
        <h1 className=" ml-3 text-xl">VILSON PADILHA</h1>
      </div>

      <nav className="h-full flex flex-row items-center gap-5 mr-40">
        <a href="#aboutme">Sobre</a>
        <a href="#projects">Projetos</a>
        <button onClick={() => setOpenContact(true)}>Contatos</button>
      </nav>
    </header>
  );
};
