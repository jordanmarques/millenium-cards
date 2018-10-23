import React from "react";
import styled from "react-emotion";
import posed from "react-pose";

const PosedFadeInImg = posed.img({
  visible: {
    marginRight: 40,
    x: -10,
    y: -10,
    transition: { duration: 400 }
  },
  init: {
    boxShadow: "rgba(44, 43, 45, 0.27) 10px 10px 20px"
  }
});

export const CardDetailImage = ({ src }) => {
  return <PosedFadeInImg initialPose={"init"} pose={"visible"} src={src} />;
};

export const CardDetailWraper = styled("div")`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  align-items: flex-start;
  justify-content: center;
  margin: 20px;
  color: #425a70;
`;

export const CardDetailTableWrapper = styled("div")``;

export const CardDetailTableRow = styled("div")`
  display: flex;
  align-items: center;
  flex-grow: 1;
  color: #425a70;
  padding: 5px;
  border-bottom: 2px solid #e4e7eb;
`;

export const CardStatsTitle = styled("div")`
  flex-grow: 1;
  font-style: bold;
`;

export const CardStatsValue = styled("div")``;
