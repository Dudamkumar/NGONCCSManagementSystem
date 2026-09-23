import { useState } from "react";
import { useNavigate } from "react-router-dom";

function VolunteerRegister(){

 const [name,setName] = useState("");
 const [email,setEmail] = useState("");
 const [password,setPassword] = useState("");

 const navigate = useNavigate();

 const handleRegister = (e)=>{
  e.preventDefault();

  fetch("http://localhost:8082/api/volunteers/register",{
   method:"POST",
   headers:{ "Content-Type":"application/json" },
   body:JSON.stringify({name,email,password})
  })
  .then(res => res.text())
  .then(()=>{
   alert("Registration successful");
   navigate("/volunteer-login");
  })
  .catch(err=>{
   console.error(err);
   alert("Registration failed");
  });

 };

 return(
  <div className="container">

   <h2>Volunteer Register 🌿</h2>

   <input
    placeholder="Name"
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
    type="password"
    placeholder="Password"
    value={password}
    onChange={(e)=>setPassword(e.target.value)}
   />

   <br/><br/>

   <button onClick={handleRegister}>
    Register
   </button>

  </div>
 );
}

export default VolunteerRegister;