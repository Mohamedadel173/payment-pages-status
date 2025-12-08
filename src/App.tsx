import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PaymentSuccess from "./PaymentSuccess";
import PaymentCancelled from "./PaymentCancelled";
import Home from "./Home";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />
        <Route path="/payment-cancelled" element={<PaymentCancelled />} />
      </Routes>
    </Router>
  );
};

export default App;
