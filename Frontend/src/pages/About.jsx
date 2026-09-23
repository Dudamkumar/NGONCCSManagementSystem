import { motion } from "framer-motion";

function About() {
  return (
    <div className="container">
      <motion.h2 
        initial={{ opacity: 0, y: -40 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
      >
        About NCCS 🌿
      </motion.h2>

      <p>
        <strong>NCCS (Nature Conservation & Community Support)</strong> is a 
        nature-focused NGO dedicated to protecting the environment, promoting 
        sustainability, and empowering local communities.
      </p>

      <h3>🌍 Our Mission</h3>
      <p>
        To conserve biodiversity, promote tree plantation drives, organize 
        awareness campaigns, and create eco-friendly communities.
      </p>

      <h3>👁 Our Vision</h3>
      <p>
        A greener and cleaner world where humans and nature live in harmony.
      </p>

      <h3>🌱 Our Activities</h3>
      <ul style={{listStyle:"none"}}>
        <li>🌳 Tree Plantation Drives</li>
        <li>♻️ Cleanliness Campaigns</li>
        <li>📢 Environmental Awareness Programs</li>
        <li>🤝 Community Development</li>
      </ul>
    </div>
  );
}

export default About;