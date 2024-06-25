"use client";
import { Button } from "../ui/button";
import { Video } from "lucide-react";
import { Search } from "lucide-react";

import * as React from "react";

import { useRouter } from "next/navigation";

export default function EventButton() {
  const router = useRouter();
  return (
    <>
      <Button
        onClick={() => {
          router.push("/eventcreate");
        }}
        variant="default"
        className="px-[65px] py-[30px] rounded-full text-3xl text-black bg-amber-400 ml-7"
      >
        <Video size={30} className="mr-3" />
        Create an Event
      </Button>

      <Button
        onClick={() => {
          router.push("/findevent");
        }}
        variant="default"
        className="px-[75px] py-[30px] rounded-full text-3xl text-black bg-white ml-7"
      >
        <Search size={25} className="mr-3" />
        Find an Event
      </Button>
    </>
  );
}
