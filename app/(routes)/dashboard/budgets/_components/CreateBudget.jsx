"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";

import EmojiPicker from "emoji-picker-react";
import { db } from "@/utils/dbConfig";

import { toast } from "sonner";
import { Budgets } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";

const CreateBudget = ({ refreshData }) => {
  const [emojiIcon, setEmojiIcon] = useState("😀");
  const [openEmojiDialogue, setOpenEmojiDialogue] = useState(false);
  const [name, setName] = useState();
  const [amount, setAmount] = useState();

  const { user } = useUser();

  const onCreateBudget = async () => {
    const result = await db
      .insert(Budgets)
      .values({
        name: name,
        amount: amount,
        createdBy: user?.primaryEmailAddress?.emailAddress,
        icon: emojiIcon,
      })
      .returning({ insertedId: Budgets.id });
    if (result) {
      refreshData();
      toast("New budget is created successfully.");
    }
  };

  const checkEnteredBudgetValue = (e) => {
    if (e.target.value < 0) {
      toast("Budget can't be negative");
    } else {
      setAmount(e.target.value);
    }
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <div className="bg-slate-100 p-10 rounded-md items-center flex flex-col border-2 border-dashed cursor-pointer hover:shadow-md">
            <h2 className="text-3xl">+</h2>
            <h2>Create new Budget</h2>
          </div>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Create New Budget</DialogTitle>
            <DialogDescription>
              <div className="pt-5">
                <Button
                  variant="outline"
                  onClick={() => setOpenEmojiDialogue(!openEmojiDialogue)}
                  size="lg"
                  className="text-lg"
                >
                  {emojiIcon}
                </Button>
                <div className="absolute z-20">
                  <EmojiPicker
                    open={openEmojiDialogue}
                    onEmojiClick={(e) => {
                      setEmojiIcon(e.emoji);
                      setOpenEmojiDialogue(false);
                    }}
                  />
                </div>
                <div className="mt-2">
                  <h2 className="text-black font-medium my-1">Budget Name</h2>
                  <Input
                    placeholder="e.g. Home Decor"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mt-2">
                  <h2 className="text-black font-medium my-1">Budget Amount</h2>
                  {/* <Input
                    type="number"
                    placeholder="e.g. 5000$"
                    onChange={(e) => setAmount(e.target.value)}
                  /> */}
                  <Input
                    type="number"
                    placeholder="e.g. 5000$"
                    onChange={(e) => checkEnteredBudgetValue(e)}
                  />
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button
                disabled={!(name && amount)}
                onClick={() => onCreateBudget()}
                className="mt-5 w-full"
              >
                Create Budget
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CreateBudget;
