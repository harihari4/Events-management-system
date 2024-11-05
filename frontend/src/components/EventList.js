import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../App.css'

const EventList = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const res = await axios.get('http://localhost:5000/api/events');
      setEvents(res.data);
    };
    fetchEvents();
  }, []);

  return (
    <div>
      <h1 id='events'>Events</h1>
      <div className='input-align'>
      <Link to="/create" id='n1' >Create Event</Link>
      <br />
      <ul id='display-li'>
        {events.map((event) => (
          <li key={event._id}>
            <h2>{event.title}</h2>
            <p>{event.description}</p>
            <p>{new Date(event.date).toLocaleDateString()}</p>
          </li>
        ))}
      </ul>
      
      </div>
    </div>
  );
};

export default EventList;
