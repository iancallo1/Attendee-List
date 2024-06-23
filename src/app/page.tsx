// pages/page.tsx

"use client"; //< ----- what sorcery is this

import { useState } from 'react';
import { Attendee_Table } from "../components/attendee-table"; 
import EventInfoBox from "../components/Event-info-box"; 

//Table Attendees API HERE
const attendees = [
  {
    name: "John Doe",
    dateTime: "2024-06-22 10:00 AM",
    table: "Table 1",
    status: "Checked In",
  },
];

export default function Home() {
  // Event Data API Here
  const [eventInfo, setEventInfo] = useState({
    eventName: "Mr. & Mrs. Malik Wedding 2026",
    location: "Luxe Hotel Lapasan, Cagayan De Oro",
    date: "August 23, 2026",
    time: "9:00 AM - 3:00 PM",
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* Event Info Box component render here */}
      <div className="w-full max-w-5xl">
        <EventInfoBox 
          totalVisitors={attendees.length} 
          eventName={eventInfo.eventName}
          location={eventInfo.location}
          date={eventInfo.date}
          time={eventInfo.time}
        />
      </div>

      {/* The Table component render here */}
      <div className="w-full max-w-5xl mt-8">
        <Attendee_Table attendees={attendees} />
      </div>
    </main>
  );
}
