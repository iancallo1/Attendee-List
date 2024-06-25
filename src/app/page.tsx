// pages/page.tsx

"use client"; //< ----- what sorcery is this


import Footer from './footer';
import Navbar from './Navbar';
import { Event_Attendee } from './Event_Attendee';
import Background from './background';
import EventButton from '@/components/localComponent/EventButton';


export default function Home() {
  return (
    <main className="bg-party max-h-full max-w-full bg-no-repeat bg-cover justify-center relative ">
      <div>
      
        <Navbar />

        <div className="flex-col justify-start items center px-[2vh] py-[2vh]">

         
         
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
