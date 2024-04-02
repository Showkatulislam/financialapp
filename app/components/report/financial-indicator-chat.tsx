import { ReportState } from "@/hooks/ReportState";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export const FinancailIndicatorChart = () => {
  const {
    report: { financialDatas },
  } = ReportState();
  const data = financialDatas.map((f) => ({
    year: f.year,
    turnover: f.turnover,
    "Net Income": f.nprofit,
    "Net profitability":f.nprofit/f.turnover
  }));
  return (
    <div className="flex p-6 justify-center items-center">
      <BarChart width={800} height={400} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
        <Legend verticalAlign="bottom" align="center" margin={{ right: 40 }} />
        <Bar dataKey="turnover" fill="#70ad47" />
        <Bar dataKey="Net Income" fill="#70ad47" />
        <Bar dataKey="Net profitability" fill="#ffc000" />
      </BarChart>
    </div>
  );
};
