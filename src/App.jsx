import { useState } from "react";
import Categories from "./sections/Categories";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import ProductList from "./sections/ProductList";
import ProductOverviews from "./sections/ProductOverviews";

function App() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Categories />
      <ProductList />
      <ProductOverviews />
    </div>
  );
}

export default App;
