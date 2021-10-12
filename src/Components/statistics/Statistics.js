import React from "react";
import PropTypes from "prop-types";
import { StatisticsContainer } from "./StatisticsStyles";

const Statistics = (props) => {
  const { good, neutral, bad, total, positivePercentage } = props;
  return (
    <StatisticsContainer>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total:{total}</p>
      <p>Positive feedback: {positivePercentage}%</p>
    </StatisticsContainer>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  goneutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};

export default Statistics;
