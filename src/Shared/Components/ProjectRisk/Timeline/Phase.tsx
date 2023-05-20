interface PhaseProps {
  bg?: "default" | "light-blue" | "blue" | "dark-blue";
  size?: "sm" | "md" | "lg" | "xlg";
  children?: React.ReactNode;
}

const Phase = ({ size, bg, children }: PhaseProps) => {
  const css = {
    container: "h-[100%] flex justify-center items-center relative",
  };

  if (size === "sm") css.container = css.container + " w-14";
  else if (size === "lg") css.container = css.container + " w-52";
  else if (size === "xlg") css.container = css.container + " w-80";
  else if (size === "md") css.container = css.container + " w-28";

  if (bg === "light-blue") css.container = css.container + " bg-[#75CAEA]";
  else if (bg === "blue") css.container = css.container + " bg-[#1482AC]";
  else if (bg === "dark-blue") css.container = css.container + " bg-[#4C6F85]";

  return <div className={css.container}>{children}</div>;
};

export default Phase;
