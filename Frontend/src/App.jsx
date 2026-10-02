
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Events from "./pages/Events";
import History from "./pages/History";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";

import Admin from "./pages/Admin";
import AdminLogin from "./pages/AdminLogin";

import VolunteerLogin from "./pages/VolunteerLogin";
import VolunteerRegister from "./pages/VolunteerRegister";
import Volunteer from "./pages/Volunteer";   
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function AdminRoute({ children }) {
  const admin = localStorage.getItem("admin");
  if (!admin) {
    return <Navigate to="/admin-login" replace />;
  }
  return children;
}
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/history" element={<History />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/admin-login" element={<AdminLogin />} />

        <Route
          path="/admin"
          element={
            <AdminRoute>
              <Admin />
            </AdminRoute>}/>
        <Route path="/volunteer-login" element={<VolunteerLogin />} />
        <Route path="/volunteer-register" element={<VolunteerRegister />} />
        <Route path="/volunteer" element={<Volunteer />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
export default App;