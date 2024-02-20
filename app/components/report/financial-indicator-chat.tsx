import { useReportStore } from "@/hooks/useReportStore";
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
  const {financialdata}=useReportStore()
  const data=financialdata.map(f=>(
    {'year':f.year,'turnover':f.turnover,'Net Income':f.nprofit}
  ))
  return (
    <div className="flex p-6 justify-center items-center">
      <BarChart
        width={800}
        height={400}
        data={data}
        
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis />
        <Tooltip />
         <Legend verticalAlign="bottom" align="center" margin={{right:40}} />
        <Bar dataKey="turnover" fill="#8884d8" />
        <Bar dataKey="Net Income" fill="#82ca9d" />
      </BarChart>
    </div>
  );
};
