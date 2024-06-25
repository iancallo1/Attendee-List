"use client";
import { Button } from "../ui/button";
import { Video } from "lucide-react";
import { LogOut } from "lucide-react";
import { Montserrat as Mont } from "next/font/google";

import * as React from "react";

import { cn } from "@/lib/utils"

import { useRouter } from "next/navigation";

const fm = Mont({
    subsets: ['latin'],
    variable: "--font-sans",
    weight: "400",
  })

export default function Logout() {
  const router = useRouter();
  return (
    <>
   
      <Button  onClick={() => {
          router.push("/");
        }}
      
        className={cn(fm.variable, "border-0 text-black bg-amber-300")}
        variant="outline"
      >
        <LogOut className="h-5 w-5 mt-0 ml-2 mr-3" /> Log out
      </Button>
    </>
  );
}
