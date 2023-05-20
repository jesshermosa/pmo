const Arrow = () => {
  const css = {
    arrow: "",
    before: "",
    after: "",
    rightAfter: "",
    rightBefore: "",
  };
  return (
    <span
      className={`${css.arrow} ${css.before} ${css.after} ${css.rightAfter} ${css.rightBefore}`}
    />
  );
};

export default Arrow;
