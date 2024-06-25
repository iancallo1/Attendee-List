import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Background = () => {
  return (
    <div>
      <Card className="m-2 border-none bg-transparent">
        <CardContent>
          <h1 className="text-white text-6xl font-semibold">
            A SMART WAY TO
          </h1>
          <h1 className="text-white text-7xl font-semibold">
            REACH THE RIGHT
          </h1>
          <h1 className="text-white text-8xl font-semibold">
            MANAGEMENT
          </h1>
        </CardContent>
      </Card>
    </div>
  );
};

export default Background;
