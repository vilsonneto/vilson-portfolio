interface ISubtitleProps {
  text: String;
}

export const Subtitle = ({ text }: ISubtitleProps) => {
  return (
    <div id="subtitle">
      <h3 className="font-bold text-[40px] mb-5 w-full">
        {text.toUpperCase()}
      </h3>
      <div className="line"></div>
    </div>
  );
};
