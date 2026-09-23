import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();

  return (
    <div className="container">
<motion.img
  src="/logo.png"
  alt="NCCS Logo"
  style={{ width: "clamp(70px, 9vw, 100px)", height: "auto" }}
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1 }}
/>
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Welcome to NCCS 🌿
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        Nature Conservation & Community Support
      </motion.p>

      <button onClick={() => navigate("/home")}>Enter Website</button>
    </div>
  );
}

export default Landing;