"use client";

import { Category, Risk } from "@/common/types";
import { useRef } from "react";
import { useRiskContext } from "./RiskContextProvider";
import RiskItem from "./RiskItem";

export type TRiskListShowmore = {
  data: Risk;
  column: number | null;
  row: number | null;
};

const detailPanelStyle = {
  height: "100%",
  width: "100%",
  backgroundColor: "#EBF3E7",
  display: "flex",
  padding: "30px",
  borderRadius: "8px",
  columnGap: "100px",
};

const detailStyle: any = {
  height: "100%",
  width: "100%",
  // backgroundColor: 'green',
  display: "flex",
  flexDirection: "column",
};

const detailBodyStyle: any = {
  height: "100%",
  width: "100%",
  // backgroundColor: 'blue',
  display: "flex",
  flexDirection: "column",
  rowGap: "20px",
};

const detailSubBodyStyle: any = {
  height: "100%",
  width: "100%",
  // backgroundColor: 'white',
  display: "flex",
  flexDirection: "column",
};

const contentStyle = {
  color: "#18345C",
  fontFamily: "Poppins",
  fontStyle: "normal",
  fontWeight: 400,
  fontSize: 14,
};

const contentTitleStyle = {
  color: "#18345C",
  fontWeight: 600,
  fontSize: 15,
  fontFamily: "Poppins",
  fontStyle: "normal",
  paddingBottom: 8,
};

const titleStyle = {
  color: "#18345C",
  marginBottom: 20,
  fontWeight: 600,
  fontFamily: "Poppins",
  fontStyle: "normal",
  fontSize: 16,
};

const InitialRiskList = (data: Risk[], batchSize: number) => {
  let batches = [];

  for (let i = 0; i < data.length; i += batchSize) {
    const batch = data.slice(i, i + batchSize);
    batches.push(batch);
  }
  return batches;
};

const RiskCardDetails = (props: { row: number; pointer: number }) => {
  const { row, pointer } = props;
  const riskRef = useRef<HTMLDivElement>(null);
  const id = `RiskCardDetail-${String(row)}`;

  const { selectedRiskShowMore, showmoreIsOpen, setShowmoreIsOpen } =
    useRiskContext();

  const GridWrapperStyle: any = {
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const GridStyle: React.CSSProperties = {
    gridTemplateColumns: "repeat(5, minmax(0, 229px))",
    justifyContent: "center",
    textAlign: "-webkit-center" as any,
  };

  const ActivePointerMain = () => {
    const triangle = {
      width: 0,
      height: 0,
      borderStyle: "solid",
      borderWidth: "0px 20px 20px 20px",
      borderColor: "transparent transparent #EBF3E7 transparent",
    };

    return (
      <div style={GridWrapperStyle}>
        <ul
          role="list"
          className="grid  gap-x-6 gap-y-8 xl:gap-x-8"
          style={GridStyle}
        >
          <li style={{ width: "229px" }}>
            <div
              style={{
                ...triangle,
                display:
                  selectedRiskShowMore.column === 0 && showmoreIsOpen
                    ? "block"
                    : "none",
              }}
            ></div>
          </li>

          <li style={{ width: "229px" }}>
            <div
              style={{
                ...triangle,
                display:
                  selectedRiskShowMore.column === 1 && showmoreIsOpen
                    ? "block"
                    : "none",
              }}
            ></div>
          </li>

          <li style={{ width: "229px" }}>
            <div
              style={{
                ...triangle,
                display:
                  selectedRiskShowMore.column === 2 && showmoreIsOpen
                    ? "block"
                    : "none",
              }}
            ></div>
          </li>

          <li style={{ width: "229px" }}>
            <div
              style={{
                ...triangle,
                display:
                  selectedRiskShowMore.column === 3 && showmoreIsOpen
                    ? "block"
                    : "none",
              }}
            ></div>
          </li>

          <li style={{ width: "229px" }}>
            <div
              style={{
                ...triangle,
                display:
                  selectedRiskShowMore.column === 4 && showmoreIsOpen
                    ? "block"
                    : "none",
              }}
            ></div>
          </li>
        </ul>
      </div>
    );
  };

  return (
    <>
      <ActivePointerMain />

      <div ref={riskRef} id={id} style={detailPanelStyle}>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexFlow: "row nowrap",
            justifyContent: "flex-end",
            alignItems: "flex-end",
            flexDirection: "column",
          }}
        >
          <div style={{ display: "flex" }}>
            <div
              style={{ cursor: "pointer" }}
              onClick={() => setShowmoreIsOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={3.5}
                stroke="black"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "nowrap",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              width: "100%",
            }}
          >
            <div style={titleStyle}>{selectedRiskShowMore?.data?.title}</div>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              columnGap: 40,
              width: "inherit",
            }}
          >
            <div style={detailStyle}>
              <div style={detailBodyStyle}>
                <div style={detailSubBodyStyle}>
                  <div style={contentTitleStyle}>Description</div>
                  <div style={contentStyle}>
                    {selectedRiskShowMore?.data?.description}
                  </div>
                </div>
                <div style={detailSubBodyStyle}>
                  <div style={contentTitleStyle}>Effect / Impact</div>
                  <div style={contentStyle}>
                    {selectedRiskShowMore?.data?.effectOrImpact}
                  </div>
                </div>
              </div>
            </div>
            {selectedRiskShowMore?.data?.mitigation && (
              <div style={detailStyle}>
                <div style={detailBodyStyle}>
                  <div style={detailSubBodyStyle}>
                    <div style={contentTitleStyle}>Mitigation</div>
                    <div style={contentStyle}>
                      {selectedRiskShowMore?.data?.mitigation}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

const RiskListCard = (data: any[]) => {
  const GridWrapperStyle: any = {
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const GridStyle = {
    gridTemplateColumns: "repeat(5, minmax(0, 229px))",
    justifyContent: "center",
  };

  const { showmoreIsOpen, selectedRiskShowMore } = useRiskContext();

  return data.map((val, index: number) => {
    return (
      <div style={GridWrapperStyle} key={index}>
        <ul
          role="list"
          className="grid  gap-x-6 gap-y-8 xl:gap-x-8"
          style={GridStyle}
        >
          {val.map((subVal: any, subIndex: number) => {
            return (
              <RiskItem
                key={subIndex}
                row={index}
                column={subIndex}
                data={subVal}
              />
            );
          })}
        </ul>
        {showmoreIsOpen && selectedRiskShowMore.row === index && (
          <RiskCardDetails row={index} pointer={val.length} />
        )}
      </div>
    );
  });
};

const RiskList = () => {
  const { projectPhaseRisk, selectedCategoryIndex } = useRiskContext();

  const css = {
    container: "wrapper-risk-list",
  };
  const res = InitialRiskList(
    projectPhaseRisk && selectedCategoryIndex > -1
      ? projectPhaseRisk.categories[selectedCategoryIndex].risks
      : [],
    5
  );
  return <div className={css.container}>{RiskListCard(res)}</div>;
};

export default RiskList;
