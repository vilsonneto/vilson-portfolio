import style from "./style.module.css";
import { oswald } from "@/assets/fonts";

interface IInfoProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  title: string;
  content: string;
}

const Info = ({ title, content, ...props }: IInfoProps) => {
  return (
    <div className="flex justify-around w-[100%] ">
      <span>{title}</span>
      <a className={`${style.anchor}`} {...props }>
        <span className={`${style.set}`}>↗</span> {content}
      </a>
    </div>
  );
};

export default Info;
