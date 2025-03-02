// ContactPage.tsx
import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/Contact.css';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    saveInfo: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="contact-page">
      <Navbar />
      
      <main className="contact-container">
        <div className="contact-header">
          <h1>Contact Us</h1>
          <p>For customer service & general inquiries please contact us below. We will get back to you soon.</p>
        </div>

        <div className="contact-content">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                required
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              ></textarea>
            </div>

            <div className="form-checkbox">
              <input
                type="checkbox"
                id="save-info"
                checked={formData.saveInfo}
                onChange={(e) => setFormData({...formData, saveInfo: e.target.checked})}
              />
              <label htmlFor="save-info">Save my name, email, and website in this browser for the next time I comment.</label>
            </div>

            <button type="submit" className="submit-btn">Submit Now</button>
          </form>

          <div  className="contact-info">
            <div className="info-section">
              <h3 >Address</h3>
              <p >Office No. 5054, 3rd Floor Rustomjee Eaze Zone Mall,<br />
              Goregaon - Mulund Link Rd, opp. IDBI BANK,<br />
              Goregaon West, Mumbai, Maharashtra 400064</p>
            </div>

            <div  className="info-grid">
              <div className="info-item">
                <h3 >Call us</h3>
                <p >+91 74000 69609</p>
              </div>
              <div className="info-item" >
                <h3 >WhatsApp us</h3>
                <p >+91 74000 62356</p>
              </div>
              <div className="info-item" >
                <h3 >Write to us</h3>
                <p >care@ashbrownie.com</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;