"use client";
import React, { useEffect, useState } from "react";
import { db } from "@/utils/dbConfig";
import { Budgets, Expenses } from "@/utils/schema";
import { desc, eq, getTableColumns, sql } from "drizzle-orm";
import { useUser } from "@clerk/nextjs";
import BudgetItem from "../../budgets/_components/BudgetItem";
import AddExpense from "../_components/AddExpense";
import ExpenseListTable from "../_components/ExpenseListTable";

function ShowExpenses({ params }) {
  // Unwrap the Promise using React.use()
  const unwrappedParams = React.use(params);
  const { user } = useUser();
  const [budgetInfo, setBudgetInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [expensesList, setExpensesList] = useState(null);
  useEffect(() => {
    if (user && unwrappedParams?.id) {
      getBudgetInfo();
    }
  }, [unwrappedParams?.id, user]);

  const getBudgetInfo = async () => {
    setLoading(true);
    try {
      const result = await db
        .select({
          ...getTableColumns(Budgets),
          totalSpend: sql`sum(${Expenses.amount})`.mapWith(Number),
          totalItem: sql`count(${Expenses.id})`.mapWith(Number),
        })
        .from(Budgets)
        .leftJoin(Expenses, eq(Budgets.id, Expenses.budgetId))
        .where(
          sql`${Budgets.createdBy} = ${user?.primaryEmailAddress?.emailAddress} AND ${Budgets.id} = ${unwrappedParams?.id}`
        )
        .groupBy(Budgets.id);

      setBudgetInfo(result[0] || null);

      getExpensesList();
    } catch (error) {
      console.error("Error fetching budget info:", error);
    } finally {
      setLoading(false);
    }
  };

  const getExpensesList = async () => {
    const result = await db
      .select()
      .from(Expenses)
      .where(eq(Expenses.budgetId, unwrappedParams?.id))
      .orderBy(desc(Expenses.id));

      console.log(result);
      setExpensesList(result);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!budgetInfo) {
    return <div>No Budget Information Available</div>;
  }

  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold">Expenses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-3 gap-5">
        {budgetInfo ? (
          <BudgetItem budget={budgetInfo} />
        ) : (
          <div className="h-[150px] w-full bg-gray-200 rounded-lg animate-pulse"></div>
        )}
        <AddExpense
          budgetId={unwrappedParams?.id}
          user={user}
          refreshData={()=>getBudgetInfo()}
        />
      </div>
      <div className="mt-4 w-full">
          <h2 className="font-bold text-lg">Latest Expenses</h2>
          <ExpenseListTable expensesList={expensesList} refreshData={()=>getBudgetInfo()}/>
        </div>
    </div>
  );
}

export default ShowExpenses;
