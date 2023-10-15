import { oswald } from "@/assets/fonts";
import Image from "next/image";


export const Hero = () => {
  return (
    <>
      <section className="min-h-[572px] relative ">
        <div className="w-[60%] ml-24 mt-20 flex flex-col justify-center items-center">
          <h2 className={`font-bold text-[60px] mb-5 w-full ${oswald.className}`}>
            OLÁ, EU SOU VILSON PADILHA
          </h2>
          <p className={`text-[24px] w-full`}>
          &#47;&#47; Sou um desenvolvedor Fullstack Web especializado em Front-end. Meu
            objetivo é criar soluções elegantes, intuitivas e eficientes que
            atendam às necessidades dos usuários. Neste portfólio, você
            encontrará exemplos dos projetos que desenvolvi, demonstrando minha
            experiência em diferentes tecnologias.
          </p>

          <button className="text-[24px] bg-blueBaby-300 w-fit px-5 py-[1.37rem] mt-10 mb-12 rounded-md ">
            Explore meus projetos
          </button>
        </div>
        <Image
          className="figure"
          src="/figure.png"
          width={400}
          height={400}
          alt="Picture of the author"
        />
      </section>
      <div className="h-48 w-full bg-blueSerenate-200"></div>
    </>
  );
};