import { AnnualData, InvestmentInfo } from "../model";

const calculateInvestmentResults = (info: InvestmentInfo): AnnualData[] => {
  const annualData = [];
  let investmentValue = info.initialInvestment;

  for (let i = 0; i < info.duration; i++) {
    const interestEarnedInYear = investmentValue * (info.expectedReturn / 100);
    investmentValue += interestEarnedInYear + info.annualInvestment;
    annualData.push({
      year: i + 1,
      interest: interestEarnedInYear,
      valueEndOfYear: investmentValue,
      annualInvestment: info.annualInvestment,
    });
  }

  return annualData;
};

const formatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "THB",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

export default function Result({
  investmentInfo,
}: Readonly<{
  investmentInfo: InvestmentInfo;
}>) {
  const resultInfo = calculateInvestmentResults(investmentInfo);
  const initialInvestment =
    resultInfo[0].valueEndOfYear -
    resultInfo[0].interest -
    resultInfo[0].annualInvestment;

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {resultInfo.map((yearData) => {
          const totalInterest =
            yearData.valueEndOfYear -
            yearData.annualInvestment * yearData.year -
            initialInvestment;
          const totalAmountInvested = yearData.valueEndOfYear - totalInterest;
          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(totalInterest)}</td>
              <td>{formatter.format(totalAmountInvested)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
