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
            OLÁ, EU SOU VILSON PADILHA
          </h2>
          <p className={`text-[20px] md:text-[24px] w-full`}>
          &#47;&#47; Sou um desenvolvedor Fullstack Web especializado em Front-end. Meu
            objetivo é criar soluções elegantes, intuitivas e eficientes que
            atendam às necessidades dos usuários. Neste portfólio, você
            encontrará exemplos dos projetos que desenvolvi, demonstrando minha
            experiência em diferentes tecnologias.
          </p>

          <a href="#projects" className="md:text-[24px] bg-blueBaby-300 w-fit px-5 py-[1.37rem] mt-10 mb-12 rounded-md ">
            Explore meus projetos
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
