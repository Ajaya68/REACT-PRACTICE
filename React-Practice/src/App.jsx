import { useState } from "react";
import Header from "./components/Header";
import Products from "./components/Products";
import Footer from "./components/Footer";

function App() {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount((prev) => prev + 1);
  };

  return (
    <section className="myDiv">
      <Header cartCount={cartCount} />
      <Products onAddToCart={addToCart} />
      <Footer />
    </section>
  );
}

export default App;
