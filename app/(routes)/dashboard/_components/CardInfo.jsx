import { PiggyBank, ReceiptText, Wallet } from "lucide-react";
import React, { useEffect, useState } from "react";

function CardInfo({ budgetList }) {
  const [totalBudget, setTotalBudget] = useState(0);
  const [totalSpend, setTotalSpend] = useState(0);

  useEffect(() => {
    budgetList && calculateCardInfo();
  }, [budgetList]);

  const calculateCardInfo = () => {
    let totalBudget1 = 0;
    let totalSpend1 = 0;

    budgetList.forEach((budget) => {
      totalBudget1 += Number(budget.amount);
      totalSpend1 += Number(budget.totalSpend);
    });
    setTotalBudget(totalBudget1);
    setTotalSpend(totalSpend1);
  };

  return (
    <div>
      {budgetList?.length > 0 ? (
        <div className="mt-7 grid grid-cols-1 lg:grid-cols-3 gap-5">
          <div className="p-7 border rounded-lg flex items-center justify-between border-b-4">
            <div>
              <h2 className="text-lg">Total Budget</h2>
              <h2 className="font-bold text-3xl">${totalBudget}</h2>
            </div>
            <PiggyBank className="bg-green-700 p-3 h-12 w-12 rounded-full text-white" />
          </div>
          <div className="p-7 border rounded-lg flex items-center justify-between border-b-4">
            <div>
              <h2 className="text-xl">Total Spend</h2>
              <h2 className="font-bold text-3xl">${totalSpend}</h2>
            </div>
            <ReceiptText className="bg-red-700 p-3 h-12 w-12 rounded-full text-white" />
          </div>
          <div className="p-7 border rounded-lg flex items-center justify-between border-b-4">
            <div>
              <h2 className="text-lg">No. of Budget</h2>
              <h2 className="font-bold text-3xl">{budgetList?.length}</h2>
            </div>
            <Wallet className="bg-black p-3 h-12 w-12 rounded-full text-white" />
          </div>
        </div>
      ) : (
        <div className="mt-7 grid grid-cols-1 lg:grid-cols-3 gap-5">
          {[1, 2, 3].map((item, index) => (
            <div
              key={index}
              className="h-[160px] w-full bg-slate-200 animate-pulse rounded-lg"
            ></div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CardInfo;
