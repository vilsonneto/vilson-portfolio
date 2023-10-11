import { oswald, monoton } from "@/assets/fonts";
import Info from "./Info";
import style from "./style.module.css";

export const Contact = () => {
  return (
    <div className={`${style.bg}`}>
      <div className={`${style.container}`}>
        <button className={`${style.exit} ${monoton.className}`}>X</button>
        <section className={`w-[870px] m-auto mt-[164px] ${style.content}`}>
          <h3 className={`font-bold text-[40px] mb-5 w-full h-[108px] border-b-[5px] border-solid border-b-[#E2EEEC] ${oswald.className}`}>Contato</h3>
          <div className="line"></div>
          <div className="flex gap-[56px]">
            <div className="w-[50%]">
              <Info title="E-MAIL" content="vilson.neto57@gmail.com" href="#" />
            </div>
            <div className="w-[50%]">
              <Info title="REDES" content="linkedin" href="#" />
              <Info title="SOCIAIS" content="github" href="#" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
