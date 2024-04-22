export const INITIAL_INVESTMENT = "initialInvestment";
export const ANNUAL_INVESTMENT = "annualInvestment";
export const EXPECTED_RETURN = "expectedReturn";
export const DURATION = "duration";

export interface InvestmentInfo {
  initialInvestment: number;
  annualInvestment: number;
  expectedReturn: number;
  duration: number;
}

export interface AnnualData {
  year: number;
  interest: number;
  valueEndOfYear: number;
  annualInvestment: number;
}
