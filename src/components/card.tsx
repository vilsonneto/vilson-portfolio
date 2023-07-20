import { projectData } from "@/schemas/project.schema";

interface ICardProps {
  project: projectData;
}

const Card = ({ project }: ICardProps) => {
  return (
    <div className="bg-grey-900 w-[230px]">
      <h3 className="m-3 text-2xl">{project.name}</h3>
      <p className="m-3 text-xs">{project.description}</p>
    </div>
  );
};

export default Card;
