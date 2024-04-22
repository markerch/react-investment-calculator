import { ChangeEvent } from "react";
import {
  ANNUAL_INVESTMENT,
  DURATION,
  EXPECTED_RETURN,
  INITIAL_INVESTMENT,
  InvestmentInfo,
} from "../model";

export default function UserInput({
  userInput,
  handleChange,
}: Readonly<{
  userInput: InvestmentInfo;
  handleChange: (indentifier: string, newValue: string) => void;
}>) {
  const getInputValue = (event: ChangeEvent<HTMLInputElement>) => {
    return event.target.value;
  };

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            required
            value={userInput.initialInvestment}
            onChange={(event) => {
              handleChange(INITIAL_INVESTMENT, getInputValue(event));
            }}
          ></input>
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            required
            value={userInput.annualInvestment}
            onChange={(event) => {
              handleChange(ANNUAL_INVESTMENT, getInputValue(event));
            }}
          ></input>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            required
            value={userInput.expectedReturn}
            onChange={(event) => {
              handleChange(EXPECTED_RETURN, getInputValue(event));
            }}
          ></input>
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            required
            value={userInput.duration}
            onChange={(event) => {
              handleChange(DURATION, getInputValue(event));
            }}
          ></input>
        </p>
      </div>
    </section>
  );
}
