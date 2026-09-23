import { Link, useNavigate } from "react-router-dom";

function Navbar() {

 const navigate = useNavigate();

 const volunteer = localStorage.getItem("volunteer");
 const admin = localStorage.getItem("admin");

 const logout = () => {
  localStorage.removeItem("volunteer");
  localStorage.removeItem("admin");
  navigate("/");
 };

 return (
  <nav style={{padding:"15px", background:"#0B3D2E", color:"white"}}>

   <Link to="/">NCCS</Link> | 

   <Link to="/home"> Home</Link> | 
   <Link to="/events"> Events</Link> | 
   <Link to="/history"> History</Link> | 
   <Link to="/about"> About</Link> | 
   <Link to="/contact"> Contact</Link> | 
   <Link to="/donate"> Donate</Link> | 

   {!volunteer && (
     <Link to="/volunteer-login"> Volunteer Login</Link>
   )}

   {!admin && (
     <Link to="/admin-login"> Admin Login</Link>
   )}

   {admin && (
     <Link to="/admin"> Admin Panel</Link>
   )}

   {(admin || volunteer) && (
     <button
      onClick={logout}
      style={{marginLeft:"10px"}}
     >
      Logout
     </button>
   )}

  </nav>
 );
}

export default Navbar;