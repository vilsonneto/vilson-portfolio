import { projectData } from "@/data/projects";
import Image from "next/image";
import style from "./style.module.css";
import { oswald } from "@/assets/fonts";
import { FaGithub } from "react-icons/fa";

interface ICardProps {
  project: projectData;
}

const Card = ({ project }: ICardProps) => {
  return (
    <div
      className={`relative rounded-[11px] overflow-hidden w-fit ${style.card}`}
    >
      <Image
        src={`${project.image}`}
        alt={`Project ${project.title}`}
        width={448}
        height={274}
        objectFit="contain"
      />
      <div className={style.info}>
        <div className="ml-[10%] mr-[10%] mb-[13px] relative cursor-pointer">
          <div>
            <a
              href={project.github}
              target="_blank"
              className="hover:text-[#436db9]"
            >
              <FaGithub className="absolute right-0 top-[-120%] text-2xl" />
            </a>
          </div>
          <a href={project.deploy} target="_blank">
            <h3 className={`m-3 text-2xl font-bold ${oswald.className}`}>
              {project.title}
            </h3>
          </a>
          <p className="m-3 text-xs">{project.description}</p>
          <div className={`${style.boxTechs}`}>
            {project.stack.map((tech) => (
              <strong className={`${style.tech}`} key={crypto.randomUUID()}>
                {tech}
              </strong>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

Card.lazy = true;

export default Card;
