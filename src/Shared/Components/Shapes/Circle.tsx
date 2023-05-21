interface Props {
  size: "xsm" | "md";
  bg?: "yellow" | "blue";
  active?: boolean;
  onClick?: () => void;
  animate?: boolean;
}

const Circle = ({ size, bg, onClick, animate, active = true }: Props) => {
  const css = {
    circle: "rounded-full hover:cursor-pointer",
  };

  if (size === "md") css.circle += " w-[26px] h-[26px]";
  else css.circle += " w-[14px] h-[14px]";

  if (active) {
    if (bg === "yellow") css.circle += " bg-[#FED658]";
    else css.circle += " bg-gray-400";
  } else {
    css.circle += " bg-[#1CADE4]";
  }

  if (!active && animate) css.circle += " animate-pulse";

  return <div className={css.circle} onClick={onClick} />;
};

export default Circle;
