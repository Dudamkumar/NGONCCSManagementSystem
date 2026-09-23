import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      style={{
        background: "#0B3D2E",
        padding: "30px",
        marginTop: "50px",
        textAlign: "center"
      }}
    >
      <h3 style={{ color: "#A5D6A7" }}>NCCS 🌿</h3>

      <p>
        Nature Conservation & Community Support <br />
        Working towards a greener tomorrow.
      </p>

      <div style={{ margin: "15px 0" }}>
        <Link to="/home">Home</Link> |{" "}
        <Link to="/events">Events</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link> |{" "}
        <Link to="/donate">Donate</Link>
      </div>

      <p style={{ fontSize: "14px", marginTop: "10px" }}>
        📍 Solapur, Maharashtra, India <br />
        📧 nccs.ngo@gmail.com <br />
        📞 +91 9876543210
      </p>

      <hr style={{ margin: "20px 0", opacity: "0.3" }} />

      <p style={{ fontSize: "13px" }}>
        © {new Date().getFullYear()} NCCS NGO. All Rights Reserved.
      </p>
    </motion.footer>
  );
}

export default Footer;