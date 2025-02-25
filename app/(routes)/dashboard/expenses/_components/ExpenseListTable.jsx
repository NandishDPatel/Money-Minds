import { db } from "@/utils/dbConfig";
import { Expenses } from "@/utils/schema";
import { eq } from "drizzle-orm";
import { Trash } from "lucide-react";
import React from "react";
import { toast } from "sonner";

function ExpenseListTable({ expensesList, refreshData }) {
  const handleDeleteExpense = async (exp) => {
    const result = await db
      .delete(Expenses)
      .where(eq(Expenses.id, exp.id))
      .returning();

    console.log(result);

    if (result) {
      toast("Expense is deleted successfully!");
      refreshData();
    }
  };

  return (
    <div className="mt-3 w-full">
      <h2 className="font-bold text-lg">Latest Expenses</h2>
      <div className="grid grid-cols-4 bg-slate-400 p-2 mt-2">
        <h2 className="font-bold">Name</h2>
        <h2 className="font-bold">Amount</h2>
        <h2 className="font-bold">Date</h2>
        <h2 className="font-bold">Action</h2>
      </div>
      {expensesList?.map((expense, index) => (
        <div key={index} className="grid grid-cols-4 bg-slate-50 p-2">
          <h2>{expense?.name}</h2>
          <h2>{expense?.amount}</h2>
          <h2>{expense?.createdAt}</h2>
          <h2 className="cursor-pointer">
            <Trash
              className="text-red-600"
              onClick={() => handleDeleteExpense(expense)}
            />
          </h2>
        </div>
      ))}
    </div>
  );
}

export default ExpenseListTable;
