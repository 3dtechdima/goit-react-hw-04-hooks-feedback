// import React, { Component } from "react";
import Statistics from "./statistics/Statistics";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Section from "./section/Section";
import Notification from "./notification/Notification";
import { Main } from "./AppStules";
import { useState } from "react/cjs/react.development";

const optionsValue = [
  { name: "good", title: "Good" },
  { name: "neutral", title: "Neutral" },
  { name: "bad", title: "Bad" },
];

const App = () => {
  const [feedBack, setFeedBack] = useState({ good: 0, neutral: 0, bad: 0 });

  const handlePressBtn = (e) => {
    const { name } = e.target;
    setFeedBack((prev) => ({ ...prev, [name]: prev[name] + 1 }));
  };

  const countTotalFeedback = () => {
    const { good, neutral, bad } = feedBack;
    const total = good + bad + neutral;
    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    const result = total ? (feedBack.good * 100) / total : 0;
    return Math.round(result);
  };

  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();
  return (
    <Main>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={optionsValue}
          onLeaveFeedback={handlePressBtn}
        />
      </Section>

      <Section title="Statistics">
        {total > 0 ? (
          <Statistics
            good={feedBack.good}
            neutral={feedBack.neutral}
            bad={feedBack.bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification className="message" message="No feedback given" />
        )}
      </Section>
    </Main>
  );
};

export default App;
