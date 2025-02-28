"use client";
import { Button } from "../../components/ui/button";

import Image from "next/image";
import React from "react";
import { useUser, UserButton } from "@clerk/nextjs";
import Link from "next/link";

const Header = () => {
  const { isSignedIn } = useUser();
  return (
    <div className="p-5 flex justify-between items-center border shadow-md">
      <Image src="/logo.png" alt="Logo image" height={100} width={160} />
      {isSignedIn ? (
        <UserButton />
      ) : (
        <Link href={"/sign-in"}>
          <Button>Get Started</Button>
        </Link>
      )}
    </div>
  );
};

export default Header;
