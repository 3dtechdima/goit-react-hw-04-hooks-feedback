import React from "react";
import { FeedbackOptionsContainer } from "./FeedbackOptionsStyles";

const FeedbackOptions = (props) => {
  const { options, onLeaveFeedback } = props;

  return options.map(({ name, title }) => {
    return (
      <FeedbackOptionsContainer key={name}>
        <button
          className="btn"
          type="button"
          name={name}
          onClick={onLeaveFeedback}
        >
          {title}
        </button>
      </FeedbackOptionsContainer>
    );
  });
};

export default FeedbackOptions;
