import { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
//import timeGridPlugin from '@fullcalendar/timegrid'
import axios from 'axios'; // Import axios for making HTTP requests
import Navbar from './Navbar';
import Head from 'next/head';
import { useRouter } from 'next/router';
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick
// https://fullcalendar.io/docs/react
export default function Calendar() {
  const router = useRouter();
  const [events, setEvents] = useState([]);
  var username = 'rs13';

//   const handleDateClick = (arg) => {
//     router.push('/daycal');
//   }

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.post('http://localhost:4200/getforuser',{username});
        const eventData = response.data.data.map(subtask => ({
          title: subtask.subtaskname,
          date: new Date(subtask.subtaskdate).toISOString().split('T')[0] // Convert date to ISO format
        }));
        setEvents(eventData);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  return (
    <div>
      <Head>
            <link 
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" 
                rel="stylesheet" 
                integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" 
                crossorigin="anonymous">
            </link>
        </Head>
    <Navbar />
    <br></br>
    <FullCalendar
    plugins={[ dayGridPlugin, interactionPlugin  ]}
    //dateClick={handleDateClick}
    initialView="dayGridDay"
    events={events}
   />
</div>
  )
}