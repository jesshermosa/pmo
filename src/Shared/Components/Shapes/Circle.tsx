interface Props {
  size: "xsm" | "md";
  bg?: "yellow" | "blue";
}

const Circle = ({ size, bg }: Props) => {
  const css = {
    circle: "rounded-full hover:cursor-pointer",
  };

  if (size === "md") css.circle += " w-[26px] h-[26px]";
  else css.circle += " w-[14px] h-[14px]";
  if (bg === "yellow") css.circle += " bg-[#FED658]";
  else css.circle += " bg-[#1CADE4]";

  return <div className={css.circle} />;
};

export default Circle;
