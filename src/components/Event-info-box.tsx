// Event-info-box.tsx

import React from 'react';
import { Button } from "@/components/ui/button";

interface EventInfoBoxProps {
  totalVisitors: number;
  eventName: string;
  location: string;
  date: string;
  time: string;
}

const EventInfoBox: React.FC<EventInfoBoxProps> = ({ totalVisitors, eventName, location, date, time }) => {
  return (
    <div className="p-4 bg-red-900 text-white rounded-md mb-4">
      <h2 className="text-xl font-bold">{eventName}</h2>
      <p className="mt-2">{location}</p>
      <p>{date}</p>
      <p>{time}</p>
      <p className="mt-4 font-bold">Total Visitor: {totalVisitors}</p>
      <Button variant="outline" size="sm" className="mt-4  bg-amber-400 text-black hover:bg-white">
        <span role="img" aria-label="QR Code">📷</span> Scan me!
      </Button>
    </div>
  );
};

export default EventInfoBox;
