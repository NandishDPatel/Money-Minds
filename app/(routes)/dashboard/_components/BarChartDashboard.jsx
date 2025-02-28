import React from "react";
import { Bar, BarChart, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

function BarChartDashboard({ budgetList }) {
  console.log(budgetList);
  return (
    <div className="border rounded-lg p-5">
        <h2 className="font-bold text-lg">Total Spend v/s. Amount</h2>
        <ResponsiveContainer width={'80%'} height={300}>
      <BarChart width={500} height={300} data={budgetList} margin={{ top: 7 }}>
        <XAxis dataKey="name" /> 
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="totalSpend" stackId="a" fill="#B91C1C"/>
        <Bar dataKey="amount" stackId="a" fill="#15803D" />
      </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default BarChartDashboard;
