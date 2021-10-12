import React from "react";
import { SectionContainer } from "./SectionStyles";

const Section = ({ title, children }) => {
  // console.log(props);
  // console.log(children[0]);
  // const { good, neutral, bad, total, positivePercentage } = props;
  return (
    <SectionContainer>
      <h2>{title}</h2>
      {children}
    </SectionContainer>
  );
};

export default Section;
