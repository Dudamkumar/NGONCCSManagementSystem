import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import EventCard from "../components/EventCard";

function Events() {

  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {

    const user = localStorage.getItem("volunteer");

    if (!user) {
      navigate("/volunteer-login");
      return;
    }

    fetch("http://localhost:8082/api/events")
      .then((res) => res.json())
      .then((data) => {
        console.log("Events from backend:", data);
        setEvents(data);
      })
      .catch((error) => console.error(error));

  }, [navigate]);

  return (
    <div className="container">

      <h2>Upcoming Events 🌿</h2>

      {events.length === 0 ? (
        <p>No upcoming events available</p>
      ) : (
        events.map((event) => (
          <EventCard key={event.id} event={event} />
        ))
      )}

    </div>
  );
}

export default Events;