const Arrow = () => {
  const css = {
    arrow: "w-full border-solid h-2 border-b-2 border-black mt-2 ",
    after:
      "after:content-[''] after:absolute after:top-[32.7px;] after:left-[100%] after:w-0 after:h-0 after:border-t-[7.9px] after:border-l-[10px] after:border-b-[7.9px] after:border-solid after:border-t-transparent after:border-b-transparent after:border-l-black",
  };
  return <div className={`${css.arrow} ${css.after}`} />;
};

export default Arrow;
