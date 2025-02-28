import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { db } from "@/utils/dbConfig";
import { Budgets, Expenses } from "@/utils/schema";
import { eq, getTableColumns, param } from "drizzle-orm";
import { Loader } from "lucide-react";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { toast } from "sonner";

function AddExpense({ budgetId, user, refreshData }) {
  const [name, setName] = useState();
  const [amount, setAmount] = useState();
  const [loading, setLoading] = useState(false);
  const [budgetAmount, setBudgetAmount] = useState();
  // used to add new expense
  const addNewExpense = async () => {
    setLoading(true);
    const result = await db
      .insert(Expenses)
      .values({
        name: name,
        amount: amount,
        budgetId: budgetId,
        createdAt: moment().format("DD-MM-YYYY"),
      })
      .returning({ insertedId: Budgets.id });
    console.log(result);
    setAmount("");
    setName("");
    if (result) {
      setLoading(false);
      refreshData();
      toast("New expense is added!");
    }
    setLoading(false);
  };

  useEffect(() => {
    const fetchBudgetAmount = async () => {
      const result = await db
        .select({
          id: Budgets.id,
          amount: Budgets.amount,
        })
        .from(Budgets)
        .where(eq(Budgets.id, budgetId));

      if (result.length > 0) {
        setBudgetAmount(parseFloat(result[0].amount));
      }
    };

    fetchBudgetAmount();
  }, [budgetId]);

  const checkEnteredExpense = async (e) => {
    if (e.target.value > budgetAmount) {
      toast("Expense can't be grater than budget value.");
    } else if (e.target.value < 0) {
      toast("Expense can't be negative");
    } else {
      setAmount(e.target.value);
    }
  };

  return (
    <div className="boder p-5 rounded-lg">
      <h2 className="font-bold text-lg">Add Expense</h2>
      <div className="mt-2">
        <h2 className="text-black font-medium my-1">Expense Name</h2>
        <Input
          value={name}
          placeholder="e.g. Bedroom Decor"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mt-2">
        <h2 className="text-black font-medium my-1">Expense Amount</h2>
        <Input
          value={amount}
          placeholder="e.g. 1000$"
          onChange={(e) => checkEnteredExpense(e)}
        />
      </div>
      <Button
        disabled={!(name && amount) || loading}
        onClick={() => addNewExpense()}
        className="mt-3 w-full"
      >
        {loading ? <Loader className="animate-spin" /> : "Add new expense"}
      </Button>
    </div>
  );
}

export default AddExpense;
