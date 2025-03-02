import React, { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import "../styles/Carousel.css";
import ProductCard from "../components/ProductCard";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";




const mukti = require("../images/mukti.jpg");
const tshirt = require("../images/tshitt.jpg");
const gh = require("../images/GodHand.jpg")





const products = [
    {
      id: 1,
      name: "GodHand",
      price: 999,
      image: require("../images/Godhand.jpeg"), 
      description: "What if the divine whispers through the chaos we ignore?",
      soldOut : true
    },
    {
      id: 2,
      name: "Mukti",
      price: 1999,
      image: require("../images/mukti.jpeg"), 
      description: "The period is not an end, but a doorway to what lies beneath."
    },
    {
      id: 3,
      name: "DryState",
      price: 1499,
      image: require("../images/DryState.png"), 
      description: "A desert is just a mind that hasn’t rained yet."
    },
    {
      id: 4,
      name: "Raw",
      price: 2499,
      image: require("../images/raw2.jpeg"), 
      description: "In the raw, we find the fingerprints of the soul."
    }
  ];
  


const slides = [
  { image: gh },
  { image: mukti },
  { image: tshirt },
];

const CustomCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused]);

  // ... (keep keyboard and touch handlers same as before)

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div
      className="custom-carousel relative"
      ref={carouselRef}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      role="region"
      aria-label="Image Carousel"
    >
      <div className="slide-container relative h-96 overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className="absolute w-full h-full transition-opacity duration-500"
            style={{ opacity: currentSlide === index ? 1 : 0 }}
            aria-hidden={currentSlide !== index}
          >
            <img src={slide.image as string} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>

      {/* Arrows remain */}
      <button 
        className="carousel-arrow left-arrow"
        onClick={goToPrevSlide}
        aria-label="Previous slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      <button 
        className="carousel-arrow right-arrow"
        onClick={goToNextSlide}
        aria-label="Next slide"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>
    </div>
  );
};

const LandingPage: React.FC = () => {
  return (
    <div className="landing-page">
      <Navbar />
      <CustomCarousel />
      
      <div className="container mt-5">
        <h3 className="section-title mb-4">Featured Products</h3>
        <div style={{color:"#7b594e"}} className="row">
          {products.map((product) => (
            <div key={product.id} className="col-md-3 col-sm-6 mb-4">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>

      <AboutUs />

      <div className="guarantee-banner" style={{padding:"10px", borderBottom:"1px solid #e3d5ca " ,paddingBottom:"1.5rem" ,height:"250px", marginTop:"50px", textAlign:'center', marginBottom:"1rem" }}>

        <h3 style={{fontWeight:"bold", color:"#7b594e"}}>100% No Risk</h3>

        <div  style={{color:"black", fontSize:"1.1rem"}}>
          We're sure that the AshBrownie product you buy will meet your expectation. <br />
          But if for some reason, you are not whistling with joy in the first 3 days of buying, 
          just drop us an email at <br />care@ashbrownie.com. T&C.
        </div>
      </div>

      
      <Footer />
    </div>
  );
};

export default LandingPage;