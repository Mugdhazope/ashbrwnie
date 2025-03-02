import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "../styles/ProductCard.css";

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  soldOut?: boolean; // Optional field for "Sold Out"
  rating?: number; // ⭐ Star Rating (1 to 5)
  newTag?: boolean;
}


const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const [hovered, setHovered] = useState(false);

  const handleAddToCart = () => {
    console.log(`Added ${product.name} to cart`);
  };

  return (
    <div className="product-card" 
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
     {product.newTag && (
    <div className="new-tag">New</div>
  )}

      
 
      <img 
        src={product.image} 
        alt={product.name}
        className="product-image"
      />

      <div className="product-details">
        <h3 className="product-name">{product.name}</h3>

        {/* ⭐ Star Ratings */}
        <div className="star-rating">
  {Array.from({ length: 5 }, (_, index) => (
    <span key={index} className={index < (product.rating ?? 0) ? "star filled" : "star"}>★</span>
  ))}
</div>


        <p className="product-price">₹{product.price.toFixed(2)}</p>

        {product.soldOut ? (
          <Button className="sold-out-btn" disabled>
            Sold Out
          </Button>
        ) : (
          <Button 
            onClick={handleAddToCart}
            aria-label={`Add ${product.name} to cart`}
            className="add-to-cart-btn"
            style={{backgroundColor:"#7b594e"}}
          >
            Add to Cart
          </Button>
        )}
      </div>

      {hovered && (
        <div className="product-overlay">
          <p className="product-description">{product.description}</p>
        </div>
      )}
    </div>
  );
};

export default ProductCard;

