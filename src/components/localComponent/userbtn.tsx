"use client";
import { Button } from "@/components/ui/button";
import * as React from "react";

export default function UserButton() {
  return (
    <>
      <Button className="text-white text-2xl" variant="link">
        Hello, <p className="text-amber-300 ml-2 italic"> @User</p>
      </Button>
    </>
  );
}
