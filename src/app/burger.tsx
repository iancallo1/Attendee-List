"use client";
import * as React from "react";

import { Staatliches as Staat } from "next/font/google";
import { Montserrat as Mont } from "next/font/google";
import { Button } from "@/components/ui/button";
import { CircleUserRound } from "lucide-react";
import { Bell } from "lucide-react";
import { ContactRound } from "lucide-react";
import { MessageCircle } from "lucide-react";
import { Settings } from "lucide-react";
import { Mail } from "lucide-react"; 

import Logout from "@/components/localComponent/logout";

const f = Staat({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: "400",
});

const fm = Mont({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: "400",
});

import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, LayoutDashboard, CalendarCheck } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Burger() {
  const [open, setOpen] = React.useState(false);
  const router = useRouter();

  return (
    <NavigationMenu className="text-right">
      <NavigationMenuList>
        <Sheet>
          <SheetTrigger>
            <Menu className="h-10 w-10 mt-3.5 ml-0" />
          </SheetTrigger>
          <SheetContent
            side={"left"}
            className="grid-flow-row grid-cols-[1fr_auto] gap-0 content-start"
          >
            <div className="grid grid-flow-column grid-cols-[1fr_auto] gap-0 w-full content-center">
              <Image
                className=""
                src="/eLogo.png"
                alt="This is the logo"
                width={300}
                height={300}
              />
            </div>
            <div className="grid grid-flow-column grid-cols-1 pt-6 h-2/4 items-start justify-items-start">
              <Button
                onClick={() => {
                  router.push("/profile");
                }}
                className="border-0 text-white text-2xl"
                variant="outline"
              >
                <CircleUserRound className="h-8 w-8 mt-0 ml-2 mr-3" />
                My Profile
              </Button>

              <Button
                onClick={() => {
                  router.push("/");
                }}
                className="border-0 mt-10"
                variant="outline"
              >
                <Bell className="h-5 w-5 mt-0 ml-2 mr-3" /> Notification
              </Button>


              <Button
                onClick={() => {
                  router.push("/invitation");
                }}
                className="border-0"
                variant="outline"
              >
                <Mail className="h-5 w-5 mt-0 ml-2 mr-3" /> Invitation
              </Button>
              <Button className="border-0" variant="outline">
                <ContactRound className="h-5 w-5 mt-0 ml-2 mr-3" /> Attendees
              </Button>
              <Button className="border-0" variant="outline">
                <MessageCircle className="h-5 w-5 mt-0 ml-2 mr-3" /> Feedbacks
              </Button>
              <Button
                onClick={() => {
                  router.push("/settings");
                }}
                className="border-0"
                variant="outline"
              >
                <Settings className="h-5 w-5 mt-0 ml-2 mr-3" /> Settings
              </Button>

              <div className="mt-40">
                <Logout />
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </NavigationMenuList>
    </NavigationMenu>
  );
}
