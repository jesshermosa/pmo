interface Props {
  size?: "full-sm" | "full-md" | "full-lg" | "sm" | "md";
  bg?: "default" | "blue" | "yellow";
  marginTop?: boolean;
  zIndex?: "mid" | "top";
  children?: React.ReactNode;
}

const Rectangle = ({ size, bg, marginTop, zIndex, children }: Props) => {
  const css = {
    rectangle: `relative ${marginTop ? "mt-5" : ""}`,
  };

  if (size === "full-sm") css.rectangle += " h-[40px] w-[100%]";
  else if (size === "full-md") css.rectangle += " h-[45px] w-[100%]";
  else if (size === "full-lg") css.rectangle += " h-[54px] w-[100%]";
  else if (size === "sm") css.rectangle += " h-[18px] w-12";
  else if (size === "md") css.rectangle += " h-[18px] w-16";

  if (bg === "blue") css.rectangle += " bg-[#E0EDEC]";
  else if (bg === "yellow") css.rectangle += " bg-[#FED658]";
  else css.rectangle += " bg-white";

  if (zIndex === "top") css.rectangle += " z-[2]";
  else if (zIndex === "mid") css.rectangle += " z-[1]";

  return <div className={css.rectangle}>{children}</div>;
};

export default Rectangle;
