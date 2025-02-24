'use client';
import { Button } from "@/components/ui/button";
import { PenBox } from "lucide-react";
import React, { useState } from "react";
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
import EmojiPicker from "emoji-picker-react";
import { useUser } from "@clerk/nextjs";
import { Input } from "@/components/ui/input";
import { db } from "@/utils/dbConfig";
import { eq } from "drizzle-orm";
import { toast } from "sonner";
import { Budgets } from "@/utils/schema";

function EditBudget({budgetInfo,refreshData}) {
    const [emojiIcon, setEmojiIcon] = useState(budgetInfo.icon);
    const [openEmojiDialogue, setOpenEmojiDialogue] = useState(false);
    const [name, setName] = useState(budgetInfo.name);
    const [amount, setAmount] = useState(budgetInfo.amount);
  
    const { user } = useUser();
  
    const onUpdateBudget = async () => {
      const result = await db
        .update(Budgets)
        .set({
          name: name,
          amount: amount,
          icon: emojiIcon,
        }).where(eq(Budgets.id,budgetInfo.id))
        .returning();
      if (result) {
        refreshData();
        toast("Budget updated successfully.");
      }
    };

    return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Button className="flex gap-2">
            <PenBox /> Edit
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Update Budget</DialogTitle>
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
                    defaultValue={budgetInfo.name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mt-2">
                  <h2 className="text-black font-medium my-1">Budget Amount</h2>
                  <Input
                    type="number"
                    placeholder="e.g. 5000$"
                    defaultValue={budgetInfo.amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button
                disabled={!(name && amount)}
                onClick={() => onUpdateBudget()}
                className="mt-5 w-full"
              >
                Update Budget
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default EditBudget;
