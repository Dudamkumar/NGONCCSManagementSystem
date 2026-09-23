import { useEffect, useState } from "react";
import EventCard from "../components/EventCard";

function History() {
  const [pastEvents, setPastEvents] = useState([]);

  useEffect(() => {
    const today = new Date();
    const allEvents = JSON.parse(localStorage.getItem("events")) || [];

    const filtered = allEvents.filter(event => 
      new Date(event.date) < today
    );

    setPastEvents(filtered);
  }, []);

  return (
    <div className="container">
      <h2>Past Events 📜</h2>

      {pastEvents.length === 0 && <p>No past events available.</p>}

      {pastEvents.map((event, index) => (
  <EventCard key={index} event={event} />
))}
    </div>
  );
}

export default History;