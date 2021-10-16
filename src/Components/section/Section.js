import React from "react";
import { SectionContainer } from "./SectionStyles";

const Section = ({ title, children }) => {
  return (
    <SectionContainer>
      <h2>{title}</h2>
      {children}
    </SectionContainer>
  );
};

export default Section;
