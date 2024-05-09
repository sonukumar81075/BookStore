import React from "react";
import Banner from "./helper/Banner";
import Footer from "./Footer";
import FreeBook from "./helper/FreeBook";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Banner />
      <FreeBook />
      <Footer />
    </div>
  );
}
