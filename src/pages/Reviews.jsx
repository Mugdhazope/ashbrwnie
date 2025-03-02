import React, { useState, useMemo } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Reviews.css";
import user1 from "../images/user1.png";
import user2f from "../images/user2f.png";
import user3 from"../images/user3.png";

const initialReviews = [
  { id: 1, name: "Aryan", rating: 5, comment: "Absolutely love the quality!", image: {user1}},
  { id: 2, name: "Sneha", rating: 4, comment: "Beautiful design, wish the price was a bit lower.", image: {user2f} },
  { id: 3, name: "Rahul", rating: 5, comment: "Great craftsmanship, worth every penny!", image: {user3} },
  { id: 1, name: "Sahil", rating: 5, comment: "Absolutely love the quality!", image: {user1} },
  { id: 2, name: "Vishal", rating: 4, comment: "Beautiful design, wish the price was a bit lower.", image: {user3} },
  { id: 3, name: "Nidhi", rating: 5, comment: "Great craftsmanship, worth every penny!", image: {user2f} },
];

const Reviews: React.FC = () => {
  const [reviews, setReviews] = useState(initialReviews);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Calculate rating distribution
  const ratingDistribution = useMemo(() => {
    const totalReviews = reviews.length;
    const counts = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
    
    reviews.forEach((review) => {
      counts[review.rating] += 1;
    });
    
    return Object.keys(counts).reduce((acc, rating) => {
      acc[rating] = totalReviews ? (counts[rating] / totalReviews) * 100 : 0;
      return acc;
    }, {});
  }, [reviews]);

  return (
    <div className="reviews-page">
      <Navbar />
      <div className="reviews-container">
        {/* Review Summary */}
        <div  className="review-summary">
          <div c className="summary-text">
            <h2 style={{color:"black"}}>Based on {reviews.length} reviews</h2>
            <div className="star-ratings">
              {[5, 4, 3, 2, 1].map((num) => (
                <div key={num} className="rating-bar">
                  <span style={{backgroundColor:"#f9f5f3", }}>{num} ★</span>
                  <div style={{backgroundColor:"#f9f5f3"}}className="bar">
                    <div  className="fill" style={{ width: `${ratingDistribution[num]}%` }}></div>
                  </div>
                  <span style={{backgroundColor:"#f9f5f3"}}>{ratingDistribution[num].toFixed(1)}%</span>
                </div>
              ))}
            </div>
          </div>
          <button className="write-review-btn" onClick={() => setIsModalOpen(true)}>Write a Review</button>
        </div>

        {/* Review Form Modal */}
        {isModalOpen && (
          <div className="modal-overlay">
            <div className="review-modal">
              <h2>Write a Review</h2>
              <form className="review-form">
                <input type="text" placeholder="Enter your name (public)" required />
                <input type="email" placeholder="Enter your email (private)" required />
                <select required>
                  <option>5 Stars</option>
                  <option>4 Stars</option>
                  <option>3 Stars</option>
                  <option>2 Stars</option>
                  <option>1 Star</option>
                </select>
                <input type="text" placeholder="Give your review a title" required />
                <textarea placeholder="Write your comments here" required></textarea>
                <input type="file" accept="image/*,video/*" />
                <p className="data-policy">How we use your data: We’ll only contact you about the review you left, if necessary. By submitting, you agree to Judge.me’s terms.</p>
                <button type="submit">Submit Review</button>
                <button type="button" className="close-btn" onClick={() => setIsModalOpen(false)}>Close</button>
              </form>
            </div>
          </div>
        )}

        {/* Customer Reviews */}
        <div className="reviews-list">
          {reviews.map((review) => (
            <div style={{backgroundColor:"#f9f5f3"}} key={review.id} className="review-card">
              <img style={{backgroundColor:"#f9f5f3",color:"black"}} src={review.image} alt={review.name} className="review-user-image" />
              <div style={{backgroundColor:"#f9f5f3"}}>
                <h4 style={{backgroundColor:"#f9f5f3", color:"black"}}>{review.name}</h4>
                <div style={{backgroundColor:"#f9f5f3", marginRight:"270px"}}className="star-rating">
                  {[...Array(5)].map((_, index) => (
                    <span style={{backgroundColor:"#f9f5f3"}} key={index} className={index < review.rating ? "star filled" : "star"}>★</span>
                  ))}
                </div>
                <p style={{backgroundColor:"#f9f5f3", color:"black"}}>{review.comment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Reviews;
