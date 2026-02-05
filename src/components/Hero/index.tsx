import { oswald } from "@/assets/fonts";
import { Player } from "@lottiefiles/react-lottie-player";
import Image from "next/image";
import Animation from "../../../public/devAnimation.json"


export const Hero = () => {
  return (
    <>
      <section className="min-h-[572px] relative ">
        <div className="md:w-[80%] lg:w-[60%] p-5 md:ml-24 mt-5 md:mt-20 flex flex-col justify-center items-center">
          <h2 className={`font-bold text-[30px] md:text-[60px] mb-5 w-full ${oswald.className}`}>
            VILSON PADILHA
          </h2>
          <p className={`text-[20px] md:text-[24px] w-full`}>
            Frontend Developer especializado em <strong>aplicações B2B de alta complexidade</strong>.
            Atuo com arquitetura WebSocket, gerenciamento de estado em tempo real e
            cálculos de negócio críticos. <strong>1.258+ commits</strong> em 4 sistemas
            em produção, promovido de Junior para Pleno em 6 meses.
          </p>

          <a href="#projects" className="md:text-[24px] bg-blueBaby-300 w-fit px-5 py-[1.37rem] mt-10 mb-12 rounded-md ">
            Ver projetos
          </a>
        </div>
        {/* <Image
          className="figure"
          src="/figure.png"
          width={400}
          height={400}
          alt="Picture of the author"
        /> */}
        {/* <Player
          className="figure invisible lg:visible"
          autoplay
          loop
          src={Animation}
        /> */}
      </section>
      <div className="md:h-48 w-full bg-blueSerenate-200"></div>
    </>
  );
};
