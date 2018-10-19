import React from "react";
import { Icon, StatWrapper } from "./style";

const Stat = ({ icon, children }) => {
  return (
    <StatWrapper>
      <Icon src={icon} />
      {children}
    </StatWrapper>
  );
};

export default Stat;
