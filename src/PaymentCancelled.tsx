import React from "react";

const PaymentCancelled: React.FC = () => {
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
    </div>
  );
};

export default PaymentCancelled;