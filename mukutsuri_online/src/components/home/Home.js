import React from "react";
import FeaturedProducts from "../products/FeaturedProducts";
import Hero from "../hero/Hero";

function Home({products}) {
  return (
    <div className="home">
      <Hero/>
      <FeaturedProducts products={products} />
    </div>
  );
}

export default Home;
