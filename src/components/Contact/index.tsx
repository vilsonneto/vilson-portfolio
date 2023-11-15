import { oswald, monoton } from "@/assets/fonts";
import Info from "./Info";
import style from "./style.module.css";
import { Dispatch, SetStateAction } from "react";

interface IContactProps {
    setOpenContact: Dispatch<SetStateAction<boolean>>
  }

export const Contact = ({setOpenContact}: IContactProps) => {
  return (
    <div className={`${style.bg}`}>
      <div className={`${style.container}`}>
        <button onClick={() => setOpenContact(false)} className={`${style.exit} ${monoton.className}`}>X</button>
        <section className={`w-4/5 md:w-[870px] m-auto mt-[164px] ${style.content}`}>
          <h3 className={`font-bold text-[40px] mb-5 w-full h-[108px] border-b-[5px] border-solid border-b-[#E2EEEC] ${oswald.className}`}>Contato</h3>
          <div className="line"></div>
          <div className="flex flex-col md:flex-row gap-5 md:gap-[56px]">
            <div className="md:w-1/2">
              <Info title="E-MAIL" content="vilson.neto57@gmail.com" href="mailto:vilson.neto57@gmail.com" />
            </div>
            <div className="md:w-1/2">
              <Info title="REDES" content="linkedin" href="https://www.linkedin.com/in/vilson-neto/" target="_blank" />
              <Info title="SOCIAIS" content="github" href="https://github.com/vilsonneto" target="_blank" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
