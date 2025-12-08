import React from "react";
import { useNavigate } from "react-router-dom";

const PaymentCancelled: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div style={{ 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      justifyContent: "center", 
      height: "100vh" 
    }}>
      <h1 style={{ color: "red" }}>❌ Payment Cancelled</h1>
      <p>Your payment was not processed.</p>
      {/* <button
        onClick={() => navigate("/")}
        style={{ padding: "10px 20px", marginTop: "20px", cursor: "pointer" }}
      >
        Back to Home
      </button> */}
    </div>
  );
};

export default PaymentCancelled;