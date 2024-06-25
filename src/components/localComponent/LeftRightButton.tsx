import { Button } from "../ui/button";
import { ChevronRight } from "lucide-react";
import { ChevronLeft } from "lucide-react";

export default function FeatureButton() {
  return (
    <>
      <Button variant="outline" size="icon" className="bg-amber-400 w-24 mr-5 rounded-s-lg ">
        <ChevronLeft className="h-4 w-4 text-black " />
      </Button>

      <Button variant="outline" size="icon" className="bg-amber-400 w-24 rounded-r-lg">
        <ChevronRight className="h-4 w-4 text-black  text-3xl" />
      </Button>
    </>
  );
}
