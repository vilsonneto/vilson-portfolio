import { oswald } from "@/assets/fonts";

interface ISubtitleProps {
  text: String;
}

export const Subtitle = ({ text }: ISubtitleProps) => {
  return (
    <div id="subtitle" className="mb-[19px]">
      <h3 className={`font-bold text-[40px] text-center mb-5 w-full ${oswald.className}`}>
        {text.toUpperCase()}
      </h3>
      <div className="line"></div>
    </div>
  );
};
