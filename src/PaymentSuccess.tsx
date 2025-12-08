import React from "react";
import { useNavigate } from "react-router-dom";

const PaymentSuccess: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div style={{ 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      justifyContent: "center", 
      height: "100vh" 
    }}>
      <h1 style={{ color: "green" }}>🎉 Payment Successful!</h1>
      <p>Thank you for your purchase.</p>
      {/* <button
        onClick={() => navigate("/")}
        style={{ padding: "10px 20px", marginTop: "20px", cursor: "pointer" }}
      >
        Back to Home
      </button> */}
    </div>
  );
};

export default PaymentSuccess;