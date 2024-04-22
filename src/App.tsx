import { useState } from "react";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import { InvestmentInfo } from "./model";
import Result from "./components/Result";

function App() {
  const [info, setInfo] = useState<InvestmentInfo>({
    initialInvestment: 50000,
    annualInvestment: 10000,
    expectedReturn: 6,
    duration: 10,
  });

  const handleChange = (indentifier: string, newValue: string) => {
    setInfo((prevInfo) => {
      return {
        ...prevInfo,
        [indentifier]: +newValue,
      };
    });
  };

  const inputIsValid = info.duration >= 1;

  return (
    <>
      <Header></Header>
      <UserInput handleChange={handleChange} userInput={info}></UserInput>
      {inputIsValid && <Result investmentInfo={info}></Result>}
    </>
  );
}

export default App;
