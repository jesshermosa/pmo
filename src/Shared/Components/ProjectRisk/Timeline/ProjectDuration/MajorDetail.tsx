interface Props {
  children?: React.ReactNode;
}

const MajorDetail = ({ children }: Props) => {
  const css = {
    container:
      "absolute h-72 w-36 top-[-18rem] left-[12px] border-solid border-[#1CADE4] border-l-2",
    content: "max-h-[60%] pl-2 flex flex-col  hover:cursor-pointer",
  };
  return (
    <div className={css.container}>
      <div className={css.content}>{children}</div>
    </div>
  );
};

export default MajorDetail;
