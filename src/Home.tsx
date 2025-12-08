import React from "react";
import { Link } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div style={{ 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      justifyContent: "center", 
      height: "100vh" 
    }}>
      <h1>Welcome to Our Shop</h1>
      <div style={{ marginTop: "20px" }}>
        <Link to="/payment-success" style={{ marginRight: "20px", fontSize: "18px" }}>
          ✅ Simulate Success
        </Link>
        <Link to="/payment-cancelled" style={{ fontSize: "18px", color: "red" }}>
          ❌ Simulate Cancel
        </Link>
      </div>
    </div>
  );
};

export default Home;