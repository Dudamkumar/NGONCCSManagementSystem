import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function VolunteerForm(){

 const location = useLocation();
 const navigate = useNavigate();

 const eventTitle = location.state?.eventTitle;

 const [name,setName] = useState("");
 const [email,setEmail] = useState("");
 const [phone,setPhone] = useState("");

 const handleSubmit = (e)=>{
  e.preventDefault();

  fetch("http://localhost:8082/api/volunteers",{
   method:"POST",
   headers:{ "Content-Type":"application/json" },
   body:JSON.stringify({
    name,
    email,
    phone,
    eventTitle
   })
  })
  .then(res => res.text())   // safer than res.json()
  .then(()=>{
   alert("Volunteer Registered Successfully 🌿");
   navigate("/events");
  })
  .catch(err=>{
   console.error(err);
   alert("Registration Failed");
  });
 };

 if(!eventTitle){
  return <h3>No Event Selected</h3>;
 }

 return(
  <div className="container">

   <h2>Volunteer Registration</h2>

   <p>Event: <b>{eventTitle}</b></p>

   <input
    placeholder="Your Name"
    value={name}
    onChange={(e)=>setName(e.target.value)}
   />

   <br/><br/>

   <input
    placeholder="Email"
    value={email}
    onChange={(e)=>setEmail(e.target.value)}
   />

   <br/><br/>

   <input
    placeholder="Phone"
    value={phone}
    onChange={(e)=>setPhone(e.target.value)}
   />

   <br/><br/>

   <button onClick={handleSubmit}>
    Register
   </button>

  </div>
 );
}

export default VolunteerForm;