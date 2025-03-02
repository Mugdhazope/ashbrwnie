// AboutUSpage.tsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import abu from "../images/AboutUsPage.png";
import "../styles/AboutUSpage.css"

const AboutUSpage = () => {
  return (
    <div className="about-page">
      <Navbar />

      {/* Hero Section with Website Stats */}
      <section className="hero-container">
        <div className="content-wrapper">
          <div className="two-column">
            <div className="hero-image">
              <img src={abu} alt="AshBrownie Mind Map Visualization" />
            </div>
            <div className="hero-stats">
              <h1>Digital Sanctuary for Unfiltered Minds</h1>
              <div className="stats-grid">
                <div className="stat-card">
                  <h2>150K+</h2>
                  <p>Monthly Mind Explorers</p>
                </div>
                <div className="stat-card">
                  <h2>94%</h2>
                  <p>Community-Driven Designs</p>
                </div>
                <div className="stat-card">
                  <h2>4.8/5</h2>
                  <p>Avg. Consciousness Rating</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Website Ecosystem */}
      <section className="ecosystem-section">
        <div className="content-wrapper">
          <h2>Our Digital Nervous System</h2>
          <div className="three-column">
            <div className="tech-card">
              <img src="/images/mind-api.png" alt="Neural API Architecture" />
              <h3>MindFlow API</h3>
              <p>Real-time design collaboration platform handling:<br/>
              - 5,000+ concurrent users<br/>
              - AI-assisted pattern generation<br/>
              - Cross-platform sync</p>
            </div>
            <div className="tech-card">
              <img src="/images/design-lab.png" alt="Virtual Design Lab" />
              <h3>Dream Canvas</h3>
              <p>Interactive design tools featuring:<br/>
              - 250+ subconscious-inspired brushes<br/>
              - Neural style transfer<br/>
              - 3D visualization</p>
            </div>
            <div className="tech-card">
              <img src="/images/community-hub.png" alt="Global Community Map" />
              <h3>Global Mind Collective</h3>
              <p>35,000+ members across:<br/>
              - 12 virtual consciousness hubs<br/>
              - Weekly idea marathons<br/>
              - Collaborative NFT projects</p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Brand Story */}
      <section className="story-section">
        <div className="content-wrapper">
          <div className="two-column reversed">
            <div className="story-visuals">
              <img 
                src="/images/design-evolution.jpg" 
                alt="Design Evolution Timeline" 
              />
              <div className="timeline-highlights">
                <div className="timeline-event">
                  <div className="year">2020</div>
                  <p>Launched first AI-assisted design tool</p>
                </div>
                <div className="timeline-event">
                  <div className="year">2022</div>
                  <p>10,000 user-submitted designs processed</p>
                </div>
                <div className="timeline-event">
                  <div className="year">2024</div>
                  <p>AR try-on feature released</p>
                </div>
              </div>
            </div>
            <div className="story-content">
              <h2>From Dorm Room to Digital Universe</h2>
              <p>Our web platform has evolved into a consciousness-powered ecosystem:</p>
              <ul className="platform-stats">
                <li>
                  <strong>2.3M+</strong> 
                  <span>Design iterations created</span>
                </li>
                <li>
                  <strong>18s</strong> 
                  <span>Avg. neural pattern generation time</span>
                </li>
                <li>
                  <strong>74%</strong> 
                  <span>Reduced creative block reported by users</span>
                </li>
              </ul>
              <div className="tech-stack">
                <h4>Powered By:</h4>
                <div className="stack-icons">
                  <img src="/images/react-icon.png" alt="React" />
                  <img src="/images/tensorflow-icon.png" alt="TensorFlow" />
                  <img src="/images/threejs-icon.png" alt="Three.js" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Dashboard */}
      <section className="impact-section">
        <div className="content-wrapper">
          <h2>Conscious Creation Metrics</h2>
          <div className="dashboard-grid">
            <div className="metric-card">
              <img src="/images/carbon-footprint.png" alt="Carbon Metrics" />
              <h3>Environmental Impact</h3>
              <ul>
                <li>92% renewable energy usage</li>
                <li>1.2M trees planted</li>
                <li>Carbon-negative since 2023</li>
              </ul>
            </div>
            <div className="metric-card">
              <img src="/images/community-impact.png" alt="Community Growth" />
              <h3>Mind Expansion</h3>
              <ul>
                <li>500+ free creativity workshops</li>
                <li>$2.1M donated to mental health orgs</li>
                <li>Global mind mapping project</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutUSpage;