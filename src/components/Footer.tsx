// Footer.tsx
import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container" style={{backgroundColor:"#7b594e"}}>
      <div className="footer-columns">
        <div className="footer-section" style={{backgroundColor:"#7b594e"}}>
          <h4 style={{fontWeight:"bold"}}>Information</h4>
          <br />
          <ul>
            <li>Home</li>
            <li>Shop All</li>
            <li>Reviews</li>
            <li>Track Order</li>
            <li>About Us</li>
            <li>FAQs</li>
          </ul>
        </div>

        <div className="footer-section" style={{backgroundColor:"#7b594e"}}>
          <h4 style={{fontWeight:"bold"}}>Support & Policies</h4>
          <br />
          <ul>
            <li>Shipping Policy</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
            <li>Refund & Cancellation Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>

        <div className="footer-section" style={{backgroundColor:"#7b594e"}}>
          <h4 style={{fontWeight:"bold"}}>Contact Us</h4>
          <br />
          <ul>
            <li>+91 74000 69609</li>
            <li>care@ashbrownie.com</li>
          </ul>
        </div>

       

      </div>

      <div className="copyright">
        © {new Date().getFullYear()} AshBrownie Collective Pvt. Ltd.
       <br />
       <a 
  style={{ backgroundColor: "#7b594e", padding: "5px", borderRadius: "5px" }} 
  href="https://www.instagram.com/yourprofile" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <img 
    src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" 
    alt="Instagram" 
    style={{ width: "20px", height: "20px", margin: "10px", backgroundColor: "#7b594e" }}
  />
</a>


       
       <hr style={{ width: "200px", margin: "auto" }} />
       <br />
       <p>  Made with ♡ by Mugdha </p>
      </div>
    </footer>
  );
};

export default Footer;