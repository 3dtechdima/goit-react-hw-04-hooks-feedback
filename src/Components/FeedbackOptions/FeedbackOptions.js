import React from "react";
import { FeedbackOptionsContainer } from "./FeedbackOptionsStyles";

const FeedbackOptions = (props) => {
  const { options, onLeaveFeedback, lang } = props;

  return options.map(({ name, title }) => {
    return (
      <FeedbackOptionsContainer>
        <button
          className="btn"
          key={name}
          type="button"
          name={name}
          onClick={onLeaveFeedback}
        >
          {title[lang]}
        </button>
      </FeedbackOptionsContainer>
    );
  });
};

export default FeedbackOptions;
