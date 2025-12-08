import React from "react";

const PaymentSuccess: React.FC = () => {
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
    </div>
  );
};

export default PaymentSuccess;