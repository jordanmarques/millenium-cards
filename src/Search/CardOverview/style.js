import React from "react";
import styled from "react-emotion";
import { Link } from "react-router-dom";
import posed from "react-pose";

const PosedSpringAnimationImg = posed.img({
  visible: {
    scale: 0.8,
    height: 200,
     transition: {
       scale: {
         type: 'spring',
         velocity: 20
       }
     }
  }
});

export const SpringAnimationImg = ({ src }) => {
  return <PosedSpringAnimationImg initialPose={{}} pose={"visible"} src={src} />;
};


export const CardWrapper = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  box-shadow: inset 0 0 0 1px rgba(67, 90, 111, 0.3), inset 0 1px 2px rgba(67, 90, 111, 0.14);
  border-radius: 3px;
  margin: 5px;
  padding: 5px;
  display: flex;
  &:hover {
    background-color: #e4e7eb;
  }
`;

export const StatsWrapper = styled("div")`
  display: flex;
`
export const StatWrapper = styled("div")`
  display: flex;
  align-items: center;
  margin: 10px;
`
export const CardStats = styled("div")`
  display: flex;
  flex-flow: column wrap;
  flex-grow: 1;
  align-items: center;
  margin: 0 5px;
  color: #425a70;
`;

export const Icon = styled("img")`
  height: 2em;
`
