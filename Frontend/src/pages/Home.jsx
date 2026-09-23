import { motion } from "framer-motion";

function Home() {
  return (
    <div className="container">
      <motion.h2 initial={{opacity:0}} animate={{opacity:1}}>
        Our Mission 🌍
      </motion.h2>

      <p>
        NCCS works to protect nature, plant trees, and build sustainable communities.
      </p>

      <h3>Impact</h3>
      <p>🌳 5000+ Trees Planted</p>
      <p>👨‍👩‍👧 2000+ Volunteers</p>
    </div>
  );
}
export default Home;