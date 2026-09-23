import { useNavigate } from "react-router-dom";

function EventCard({ event }) {

 const navigate = useNavigate();

 const handleRegister = () => {

  navigate("/volunteer", {
   state: {
    eventTitle: event.title
   }
  });

 };

 return (

  <div className="event-card">

   <h3>{event.title}</h3>

   <p>{event.description}</p>

   <p>Date : {event.date}</p>

   <button onClick={handleRegister}>
    Register
   </button>

  </div>

 );

}

export default EventCard;