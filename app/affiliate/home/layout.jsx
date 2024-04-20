import Footer from "@/components/affiliate/Footer";
import Header from "@/components/affiliate/Header";
import React from "react";

const affiliateLayout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default affiliateLayout;
