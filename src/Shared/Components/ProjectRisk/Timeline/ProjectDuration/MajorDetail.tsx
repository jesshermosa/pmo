interface Props {
  children?: React.ReactNode;
  onClick: () => void;
  active?: boolean;
}

const MajorDetail = ({ active, children, onClick }: Props) => {
  const css = {
    container:
      "absolute h-72 w-36 top-[-18rem] left-[12px] border-solid border-l-2",
    content: "max-h-[60%] pl-2 flex flex-col  hover:cursor-pointer",
  };

  if (active) css.container += " border-gray-400";
  else css.container += " border-[#1CADE4]";

  return (
    <div className={css.container}>
      <div className={css.content} onClick={onClick}>
        {children}
      </div>
    </div>
  );
};

export default MajorDetail;
