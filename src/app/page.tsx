// pages/page.tsx

"use client"; //< ----- what sorcery is this

import { useState } from 'react';
import { Attendee_Table } from "../components/attendee-table"; 
import EventInfoBox from "../components/Event-info-box"; 
import { attendees, eventInfo as defaultEventInfo } from "./eventData"
import Footer from './footer';
import Background from './background';
import EventButton from '@/components/localComponent/EventButton';
import Navbar from './Navbar';
import { Event_Attendee } from './Event_Attendee';


export default function Home() {
  return (
    <main className="bg-party max-h-full max-w-full bg-no-repeat bg-cover justify-center relative ">
      <div>
      
        <Navbar />

        <div className="flex-col justify-start items center px-[30vh] py-[30vh]">

          
         
        </div>
        <div>
          <Event_Attendee />
        </div>
        <div>
          <Footer></Footer>
        </div>
      </div>
    </main>
  );
}
