import { Risk } from "@/common/types";
import { useRiskContext } from "./RiskContextProvider";
import { TRiskListShowmore } from "./RiskList";

type RiskCardProps = {
  data: Risk;
  column: number;
  row: number;
};

const RiskCard = (props: RiskCardProps) => {
  const { data, column, row } = props;

  const {
    setShowmoreIsOpen,
    setSelectedRiskShowMore,
    selectedRiskShowMore,
    showmoreIsOpen,
  } = useRiskContext();

  const isActiveBtnStyle =
    selectedRiskShowMore.column === column &&
    selectedRiskShowMore.row === row &&
    showmoreIsOpen
      ? "#45E8DE"
      : "#197A74";

  const isActiveLabelStyle =
    selectedRiskShowMore.column === column &&
    selectedRiskShowMore.row === row &&
    showmoreIsOpen
      ? "#0D1E31"
      : "#FFFFFF";

  const handleShowMore = () => {
    setShowmoreIsOpen(true);
    const riskData: TRiskListShowmore = {
      data: data,
      column: column,
      row: row,
    };

    setSelectedRiskShowMore(riskData);
  };

  const activeCard =
    selectedRiskShowMore.column === column &&
    selectedRiskShowMore.row === row &&
    showmoreIsOpen
      ? "#EBF3E7"
      : "linear-gradient(#D9F4FE, #4093B2)";

  const activeBorder =
    selectedRiskShowMore.column === column &&
    selectedRiskShowMore.row === row &&
    showmoreIsOpen
      ? "2px solid #FFFFFF"
      : "0px solid #FFFFFF";

  const ellipsisStyle: React.CSSProperties = {
    display: "-webkit-box",
    WebkitLineClamp: 7,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis",
  };
  return (
    <div
      style={{
        background: activeCard,
        height: "341px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "stretch",
        border: activeBorder,
      }}
    >
      <div className="p-6">
        <div
          className="text-sm font-medium leading-6 text-gray-900"
          style={{
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            width: "100%",
            overflow: "hidden",
            fontWeight: 500,
            fontSize: 16,
          }}
        >
          {data.title}
        </div>
      </div>
      <div className="flex" style={{ height: "215px", padding: 20 }}>
        <div
          className="text-sm font-medium leading-6 text-gray-900"
          style={{
            height: "auto",
            fontWeight: 400,
            ...ellipsisStyle,
          }}
        >
          {data.description}
        </div>
      </div>
      <div className="items-center gap-x-4" style={{ padding: "0.5rem" }}>
        <div className="text-sm font-medium leading-6 text-gray-900">
          <button
            type="button"
            style={{
              width: "100%",
              backgroundColor: isActiveBtnStyle,
              color: isActiveLabelStyle,
            }}
            onClick={handleShowMore}
            className="rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
          >
            Show more
          </button>
        </div>
      </div>
    </div>
  );
};

export default RiskCard;
