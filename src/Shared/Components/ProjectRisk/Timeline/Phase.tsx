interface PhaseProps {
  bg?: "default" | "light-blue" | "blue" | "dark-blue";
  size?: "sm" | "md" | "lg" | "xlg";
  children?: React.ReactNode;
  pointed?: boolean;
}

const Phase = ({ size, bg, pointed, children }: PhaseProps) => {
  const css = {
    container: "h-[100%] flex justify-center items-center relative",
  };

  if (size === "sm") css.container += " w-14";
  else if (size === "lg") css.container += " w-52";
  else if (size === "xlg") css.container += " w-80";
  else if (size === "md") css.container += " w-28";

  if (bg === "light-blue")
    css.container += ` bg-[#75CAEA] ${
      pointed ? "after:border-l-[#75CAEA]" : ""
    }`;
  else if (bg === "blue")
    css.container += ` bg-[#1482AC] ${
      pointed ? "after:border-l-[#1482AC]" : ""
    }`;
  else if (bg === "dark-blue")
    css.container += ` bg-[#4C6F85] ${
      pointed ? "after:border-l-[#4C6F85]" : ""
    }`;

  if (pointed)
    css.container +=
      " after:content-[''] after:absolute after:top-0 after:left-[100%] after:w-0 after:h-0 after:border-t-[27.9px] after:border-l-[30px] after:border-b-[27.9px] after:border-solid after:border-t-transparent after:border-b-transparent";

  return <div className={css.container}>{children}</div>;
};

export default Phase;
