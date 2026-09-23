import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Admin() {

 const navigate = useNavigate();

 const [title, setTitle] = useState("");
 const [date, setDate] = useState("");
 const [description, setDescription] = useState("");
 const [events, setEvents] = useState([]);

 useEffect(() => {

  const admin = localStorage.getItem("admin");

  if (!admin) {
   navigate("/admin-login");
  }

  loadEvents();

 }, []);

 const loadEvents = () => {

  fetch("http://localhost:8082/api/events")
   .then(res => res.json())
   .then(data => setEvents(data))
   .catch(err => console.error(err));

 };

 const addEvent = (e) => {

  e.preventDefault();

  const newEvent = {
   title,
   date,
   description
  };

  fetch("http://localhost:8082/api/events", {
   method: "POST",
   headers: {
    "Content-Type": "application/json"
   },
   body: JSON.stringify(newEvent)
  })
   .then(res => res.json())
   .then(() => {

    alert("Event Added Successfully 🎉");

    setTitle("");
    setDate("");
    setDescription("");

    loadEvents();

   })
   .catch(err => console.error(err));

 };

 const deleteEvent = (id) => {

  fetch(`http://localhost:8082/api/events/${id}`, {
   method: "DELETE"
  })
   .then(() => {

    alert("Event Deleted");

    loadEvents();

   })
   .catch(err => console.error(err));

 };

 const updateEvent = (event) => {

  const newTitle = prompt("Enter new title", event.title);
  const newDate = prompt("Enter new date", event.date);
  const newDescription = prompt("Enter new description", event.description);

  if (!newTitle || !newDate || !newDescription) return;

  fetch(`http://localhost:8082/api/events/${event.id}`, {
   method: "PUT",
   headers: {
    "Content-Type": "application/json"
   },
   body: JSON.stringify({
    title: newTitle,
    date: newDate,
    description: newDescription
   })
  })
   .then(() => {

    alert("Event Updated");

    loadEvents();

   })
   .catch(err => console.error(err));

 };

 return (

  <div className="container">

   <h2>Admin Panel 🔐</h2>

   <input
    placeholder="Event Title"
    value={title}
    onChange={(e) => setTitle(e.target.value)}
   />

   <br /><br />

   <input
    type="date"
    value={date}
    onChange={(e) => setDate(e.target.value)}
   />

   <br /><br />

   <textarea
    placeholder="Description"
    value={description}
    onChange={(e) => setDescription(e.target.value)}
   />

   <br /><br />

   <button onClick={addEvent}>Add Event</button>

   <hr />

   <h3>All Events</h3>

   {events.map(event => (

    <div
     key={event.id}
     style={{
      border: "1px solid gray",
      padding: "10px",
      margin: "10px"
     }}
    >

     <h4>{event.title}</h4>
     <p>{event.date}</p>
     <p>{event.description}</p>

     <button onClick={() => updateEvent(event)}>Update</button>
     <button onClick={() => deleteEvent(event.id)}>Delete</button>

    </div>

   ))}

  </div>

 );

}

export default Admin;