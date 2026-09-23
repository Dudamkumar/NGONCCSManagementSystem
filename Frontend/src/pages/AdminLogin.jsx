// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// function AdminLogin(){

//  const [username,setUsername] = useState("");
//  const [password,setPassword] = useState("");

//  const navigate = useNavigate();

//  const handleLogin = async () => {

//   try{

//    const res = await axios.post(
//     "http://localhost:8082/api/admin/login",
//     {
//      username: username,
//      password: password
//     }
//    );

//    if(res.data === "success"){

//     localStorage.setItem("admin","true");

//     navigate("/admin");

//    }else{

//     alert("Invalid Admin Login");

//    }

//   }catch(err){

//    alert("Server Error");

//   }

//  };

//  return(
//   <div className="container">

//    <h2>Admin Login 🔐</h2>

//    <input
//     placeholder="Username"
//     onChange={(e)=>setUsername(e.target.value)}
//    />

//    <br/><br/>

//    <input
//     type="password"
//     placeholder="Password"
//     onChange={(e)=>setPassword(e.target.value)}
//    />

//    <br/><br/>

//    <button onClick={handleLogin}>
//     Login
//    </button>

//   </div>
//  );
// }

// export default AdminLogin;
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AdminLogin(){

 const [username,setUsername] = useState("");
 const [password,setPassword] = useState("");

 const navigate = useNavigate();

 const handleLogin = async () => {

  try{

   const res = await
    axios.post("http://localhost:8082/api/admin/login",{
 username,
 password
});

   console.log(res.data); // for debugging

   if(res.data === "success"){

    localStorage.setItem("admin","true");

    navigate("/admin");

   }else{

    alert("Invalid Admin Login");

   }

  }catch(err){

   console.error(err);
   alert("Server Error");

  }

 };

 return(
  <div className="container">

   <h2>Admin Login 🔐</h2>

   <input
    placeholder="Username"
    value={username}
    onChange={(e)=>setUsername(e.target.value)}
   />

   <br/><br/>

   <input
    type="password"
    placeholder="Password"
    value={password}
    onChange={(e)=>setPassword(e.target.value)}
   />

   <br/><br/>

   <button onClick={handleLogin}>
    Login
   </button>

  </div>
 );
}

export default AdminLogin;