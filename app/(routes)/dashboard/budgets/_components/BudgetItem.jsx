import React from "react";
import { useRouter } from "next/navigation";

function BudgetItem({ budget }) {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/dashboard/expenses/${budget.id}`);
  };

  const calculatePercentage = () => {
    const percentage = (budget.totalSpend / budget.amount) * 100;
    return percentage.toFixed(2);
  };

  return (
    <div
      onClick={handleClick}
      className="p-5 border rounded-lg hover:shadow-md cursor-pointer h-[170px]"
    >
      <div className="flex gap-2 items-center justify-between">
        <div className="flex gap-2 items-center">
          <h2 className="text-2xl p-2 bg-slat-100 rounded-full">
            {budget?.icon}
          </h2>
          <div>
            <h2 className="font-bold">{budget?.name}</h2>
            <h2 className="text-sm text-gray-500">{budget?.totalItem} Item</h2>
          </div>
        </div>
        <h2 className="font-bold text-lg text-blue-700">${budget?.amount}</h2>
      </div>
      <div className="mt-5">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-xs text-slat-400">
            ${budget?.totalSpend ? budget.totalSpend : 0} Spend
          </h2>
          <h2 className="text-xs text-slat-400">
            ${budget?.amount - budget?.totalSpend} Remaining
          </h2>
        </div>
        <div className="w-full rounded-full bg-slate-400 h-2">
          <div
            className="rounded-full bg-blue-600 h-2"
            style={{ width: `${calculatePercentage()}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default BudgetItem;
