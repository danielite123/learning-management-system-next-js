import React from "react";
import Header from "../_component/Header";
import Footer from "../_component/Footer";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-[120vh]">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
