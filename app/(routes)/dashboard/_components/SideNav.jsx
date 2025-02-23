"use client";
import { useEffect } from "react";
import { UserButton } from "@clerk/nextjs";
import { LayoutGrid, PiggyBank, ReceiptText, ShieldCheck } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";
import Link from "next/link";

const SideNav = () => {
  const path = usePathname();

  useEffect(() => {
    console.log(path);
  }, [path]);

  // Normalize the path by removing trailing slashes
  const normalizedPath = path.endsWith("/") ? path.slice(0, -1) : path;

  const menuItems = [
    { id: 1, name: "Dashboard", icon: LayoutGrid, path: "/dashboard" },
    { id: 2, name: "Budget", icon: PiggyBank, path: "/dashboard/budgets" },
    { id: 3, name: "Expenses", icon: ReceiptText, path: "/dashboard/expenses" },
    { id: 4, name: "Shield", icon: ShieldCheck, path: "/dashboard/upgrade" },
  ];

  return (
    <div className="h-screen p-5 border shadow-sm">
      <Image
        src={"/logo.png"}
        height={100}
        width={160}
        alt="Money Minds Logo"
      />
      <div className="mt-5">
        {menuItems.map((item, index) => (
          <Link key={index} href={item.path}>
            <h2
              className={`flex gap-2 items-center text-gray-500 font-medium p-5 cursor-pointer rounded-md mb-2 hover:text-primary hover:bg-blue-100 ${
                path === item.path && "text-primary bg-blue-100"
              }`}
            >
              <item.icon />
              {item.name}
            </h2>
          </Link>
        ))}
      </div>
      <div className="fixed bottom-10 p-5 flex gap-2 items-center">
        <UserButton />
        Profile
      </div>
    </div>
  );
};

export default SideNav;
