import Image from "next/image";
import style from "./style.module.css";
import { Dispatch, SetStateAction } from "react";
import { FaCode, FaHome } from "react-icons/fa";
import { SiAboutdotme } from "react-icons/si";
import { IoIosContact } from "react-icons/io";

interface IHeaderProps {
  setOpenContact: Dispatch<SetStateAction<boolean>>;
}

export const Header = ({ setOpenContact }: IHeaderProps) => {
  return (
    <header
      id="home" className={`h-28 w-full bg-blueBaby-300 flex flex-row justify-between font-bold ${style.text}`}
    >
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

      <div className={`${style.navbar}`}>
        <nav className="h-full flex flex-row items-center gap-10 md:gap-5 md:mr-40">
          <a href="#home">
            <span className={`${style.icon}`}><FaHome /></span>
          </a>
          <a href="#aboutme">
            <span className={`${style.textLink}`}>Sobre</span>
            <span className={`${style.icon}`}><SiAboutdotme /></span>
          </a>
          <a href="#projects">
            <span className={`${style.textLink}`}>Projetos</span>
            <span className={`${style.icon}`}><FaCode /></span>
          </a>
          <button onClick={() => setOpenContact(true)}>
            <span className={`${style.textLink}`}>Contatos</span>
            <span className={`${style.icon}`}><IoIosContact /></span>
          </button>
        </nav>
      </div>
    </header>
  );
};
