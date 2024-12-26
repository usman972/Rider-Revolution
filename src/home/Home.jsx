import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import NewBikes from "../components/NewBikes";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <NewBikes />
      <Footer />
    </>
  );
}

export default Home;
