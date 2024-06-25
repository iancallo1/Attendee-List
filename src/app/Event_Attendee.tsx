// Attendee.tsx

"use client";

import { useState } from 'react';
import { Attendee_Table } from "../components/attendee-table"; 
import EventInfoBox from "../components/Event-info-box"; 
import { attendees, eventInfo as defaultEventInfo } from "./eventData"


export function Event_Attendee() {
  const [eventInfo, setEventInfo] = useState(defaultEventInfo);
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
