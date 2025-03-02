import React,{useState} from "react";
import styles from "../styles/ShopWall.css";
import Navbar from "../components/Navbar";
import "../styles/Carousel.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../components/Footer";
import shopall from "../images/shopall.png";
import ProductCard from "../components/ProductCard";
import { Rating } from "@mantine/core";



const products = [
    {
      id: 1,
      name: "GodHand",
      price: 999,
      image: require("../images/Godhand.jpeg"), 
      description: "What if the divine whispers through the chaos we ignore?",
      soldOut : true,
      rating: 5

    },
    {
      id: 2,
      name: "Mukti",
      price: 1999,
      image: require("../images/mukti.jpeg"), 
      description: "The period is not an end, but a doorway to what lies beneath.",
      newTag: true,

    },
    {
      id: 3,
      name: "DryState",
      price: 1499,
      image: require("../images/DryState.png"), 
      description: "A desert is just a mind that hasn’t rained yet.",
      newTag: true
    },
    {
      id: 4,
      name: "Raw",
      price: 2499,
      image: require("../images/raw2.jpeg"), 
      description: "In the raw, we find the fingerprints of the soul."
    },
    {
        id: 5,
        name: "GodHand",
        price: 999,
        image: require("../images/Godhand.jpeg"), 
        description: "What if the divine whispers through the chaos we ignore?",

      },
      {
        id: 6,
        name: "Mukti",
        price: 1999,
        image: require("../images/mukti.jpeg"), 
        description: "The period is not an end, but a doorway to what lies beneath."
      },
      {
        id: 7,
        name: "DryState",
        price: 1499,
        image: require("../images/DryState.png"), 
        description: "A desert is just a mind that hasn’t rained yet."
      },
      {
        id: 8,
        name: "Raw",
        price: 2499,
        image: require("../images/raw2.jpeg"), 
        description: "In the raw, we find the fingerprints of the soul."
      }
  ];


  
  const ShopAll = () => {
    const [visibleProducts, setVisibleProducts] = useState(4); // ✅ Declare useState
  
    const handleLoadMore = () => {
      setVisibleProducts((prev) => prev + 4); // ✅ Update visible products count
    };
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <div className="hero-container">
        <img 
          src={shopall} // Replace with actual image URL
          alt="Shop Banner"
          className="hero-image"
        />
        {/* Overlay Button */}
        <a href="/ShopAll" className="hero-button">
          Shop Now
        </a>
      </div>

      {/* Render Product Cards */}

      <div className="container">
        <div className="row">
          {products.slice(0, visibleProducts).map((product) => (
            <div key={product.id} className="col-md-3 col-sm-6 mb-4">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
      {visibleProducts < products.length && (
        <div className="text-center my-4">
          <button className="load-more-btn" onClick={handleLoadMore}>
            Load More
          </button>
        </div>
      )}

      <Footer />
    </div>
  );
};


export default ShopAll;
