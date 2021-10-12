import React, { Component } from "react";
import Statistics from "./statistics/Statistics";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Section from "./section/Section";
import Notification from "./notification/Notification";
import { Main } from "./AppStules";

const optionsValue = [
  { name: "good", title: { en: "Good", ru: "Хорошо" } },
  { name: "neutral", title: { en: "Neutral", ru: "Нейтрально" } },
  { name: "bad", title: { en: "Bad", ru: "Плохо" } },
];

// const errorOptions = {
//   warning: { message: "warning", className: "warning" },
//   error: { message: "error", className: "error" },
// };

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    lang: "en",
    errorType: "warning",
  };

  handleSelectLang = (e) => {
    const { value, name } = e.target;
    console.log(e);
    this.setState({
      [name]: value,
    });
  };

  handlePressBtn = (e) => {
    const { name } = e.target;
    this.setState((prevStat) => ({
      [name]: prevStat[name] + 1,
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + bad + neutral;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const result = total ? (this.state.good * 100) / total : 0;
    return Math.round(result);
  };

  render() {
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    return (
      <Main>
        <Section title="Language">
          <select
            className="selectLang"
            onChange={this.handleSelectLang}
            name="lang"
          >
            <option value="en">en</option>
            <option value="ru">ru</option>
          </select>
        </Section>

        <Section title="Please leave feedback">
          <FeedbackOptions
            options={optionsValue}
            onLeaveFeedback={this.handlePressBtn}
            lang={this.state.lang}
          />
        </Section>

        <Section title="Statistics">
          {total > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification className="message" message="No feedback given" />
          )}
        </Section>
      </Main>
    );
  }
}

export default App;
