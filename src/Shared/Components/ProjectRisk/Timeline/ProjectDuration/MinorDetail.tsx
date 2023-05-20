interface Props {
  children?: React.ReactNode;
}

const MinorDetail = ({ children }: Props) => {
  const css = {
    container:
      "flex flex-col-reverse absolute h-52 w-36 top-0 left-[12px] border-solid border-[#1CADE4] border-l-2",
    content: "max-h-[40%] pl-2 flex flex-col",
  };
  return (
    <div className={css.container}>
      <div className={css.content}>{children}</div>
    </div>
  );
};

export default MinorDetail;
