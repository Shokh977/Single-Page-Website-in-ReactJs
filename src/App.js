import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import Analytics from "./components/Analytics";
import NewsLetter from "./components/newsLetter";
import Card from "./components/cards";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Analytics />
      <NewsLetter />
      <Card />
      <Footer />
    </div>
  );
}

export default App;
