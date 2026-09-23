// import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// import Landing from "./pages/Landing";
// import Home from "./pages/Home";
// import Events from "./pages/Events";
// import History from "./pages/History";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Donate from "./pages/Donate";

// import Admin from "./pages/Admin";
// import AdminLogin from "./pages/AdminLogin";

// import VolunteerForm from "./pages/VolunteerForm";
// import VolunteerLogin from "./pages/VolunteerLogin";
// import VolunteerRegister from "./pages/VolunteerRegister";

// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";


// // Protected Admin Route
// function AdminRoute({ children }) {

//   const admin = localStorage.getItem("admin");

//   if (!admin) {
//     return <Navigate to="/admin-login" replace />;
//   }

//   return children;
// }


// function App() {

//   return (
//     <BrowserRouter>

//       <Navbar />

//       <Routes>

//         {/* Public Pages */}

//         <Route path="/" element={<Landing />} />
//         <Route path="/home" element={<Home />} />
//         <Route path="/events" element={<Events />} />
//         <Route path="/history" element={<History />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/donate" element={<Donate />} />

//         {/* Admin Login */}

//         <Route path="/admin-login" element={<AdminLogin />} />

//         {/* Protected Admin Page */}

//         <Route
//           path="/admin"
//           element={
//             <AdminRoute>
//               <Admin />
//             </AdminRoute>
//           }
//         />

//         {/* Volunteer */}

//         <Route path="/volunteer-login" element={<VolunteerLogin />} />
//         <Route path="/volunteer-register" element={<VolunteerRegister />} />
//         <Route path="/volunteer" element={<VolunteerForm />} />

//       </Routes>

//       <Footer />

//     </BrowserRouter>
//   );
// }

// export default App;
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
import Volunteer from "./pages/Volunteer";   // ✅ correct page

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


// Protected Admin Route
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

        {/* Public Pages */}

        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/history" element={<History />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/donate" element={<Donate />} />

        {/* Admin */}

        <Route path="/admin-login" element={<AdminLogin />} />

        <Route
          path="/admin"
          element={
            <AdminRoute>
              <Admin />
            </AdminRoute>
          }
        />

        {/* Volunteer */}

        <Route path="/volunteer-login" element={<VolunteerLogin />} />
        <Route path="/volunteer-register" element={<VolunteerRegister />} />

        {/* ✅ Event Registration Page */}
        <Route path="/volunteer" element={<Volunteer />} />

      </Routes>

      <Footer />

    </BrowserRouter>

  );

}

export default App;