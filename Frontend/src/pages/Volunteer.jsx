import { useLocation } from "react-router-dom";
import { useState } from "react";

function Volunteer(){

 const location = useLocation();
const eventTitle = location.state?.eventTitle;

 const [name,setName] = useState("");
 const [email,setEmail] = useState("");
 const [mobile,setMobile] = useState("");

const handleSubmit = () => {

 console.log("BUTTON CLICKED");

 fetch("http://localhost:8082/api/event-registration",{
  method:"POST",
  headers:{
   "Content-Type":"application/json"
  },
  body:JSON.stringify({
   name:name,
   email:email,
   phone:mobile,
   eventTitle:eventTitle
  })
 })
 .then(res => res.text())
 .then(data => {
  console.log("Server:", data);
  alert("Registration Successful");
 })
 .catch(err => {
  console.error(err);
 });

};

 return(

  <div className="container">

   <h2>Volunteer Registration</h2>

   <h3>Event : {eventTitle}</h3>

   <br/>

   <input
    type="text"
    placeholder="Name"
    value={name}
    onChange={(e)=>setName(e.target.value)}
   />

   <br/><br/>

   <input
    type="email"
    placeholder="Email"
    value={email}
    onChange={(e)=>setEmail(e.target.value)}
   />

   <br/><br/>

   <input
    type="text"
    placeholder="Mobile"
    value={mobile}
    onChange={(e)=>setMobile(e.target.value)}
   />

   <br/><br/>

   <button type="button" onClick={handleSubmit}>
 Register
</button>

  </div>

 );

}

export default Volunteer;