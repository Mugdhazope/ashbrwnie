import React from "react";
import { motion } from "framer-motion";
import "../styles/AboutUs.css"; // Add custom styles

const AboutUs: React.FC = () => {
  return (
    <motion.section 
      className="about-us container mt-5"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="row align-items-center">
        {/* Image Section */}
        <div className="col-md-6">
          <motion.img 
            src={require("../images/aboutuss.png")} 
            alt="Our Story" 
            className="about-image"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          />
        </div>

        {/* Text Section */}
        <div style={{padding:"10px"}}className="col-md-6 text-section">
          <motion.h2 
            className="about-title"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            
            Our Story
          </motion.h2>
          <motion.p 
            className="about-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <i>What if clothing wasn’t just fabric, but a language of the soul?</i> <br />

<strong>AshBrownie</strong> is where the subconscious gets a voice. <br /> We stitch raw, unfiltered thoughts—the kind that flicker in dreams, spiritual clarity, or moments beyond logic—into wearable art. <br />Our designs are maps of the mind’s uncharted realms, blending Ash (the grit of truth) and Brownie (whimsical magic) to celebrate the weird, the limitless, and the spiritually untamed.
<br />
For those who wear their minds on their sleeves: <br />Dare to think louder. Your spirit’s uniform awaits. <br />

— Unravel the unseen.
          </motion.p>
        </div>
      </div>
    </motion.section>
  );
};

export default AboutUs;
