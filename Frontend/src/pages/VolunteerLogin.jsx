import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function VolunteerLogin(){

 const [email,setEmail] = useState("");
 const [password,setPassword] = useState("");

 const navigate = useNavigate();

 const handleLogin = async (e)=>{

  e.preventDefault();

  try{

   const res = await fetch("http://localhost:8082/api/volunteers/login",{
    method:"POST",
    headers:{
     "Content-Type":"application/json"
    },
    body:JSON.stringify({
     email: email,
     password: password
    })
   });

   const data = await res.text();

   console.log("Server response:", data);

   if(data === "success"){

    localStorage.setItem("volunteer","true");

    alert("Login Successful");

    navigate("/events");

   }else{

    alert("Invalid Email or Password");

   }

  }catch(error){

   console.error(error);

   alert("Server error");

  }

 };

 return(

  <div className="container">

   <h2>Volunteer Login</h2>

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

   <button onClick={handleLogin}>Login</button>

   <p>
    Not registered? <Link to="/volunteer-register">Register</Link>
   </p>

  </div>

 );

}

export default VolunteerLogin;