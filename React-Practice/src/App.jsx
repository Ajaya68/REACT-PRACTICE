// import { useState } from "react";
// import Header from "./components/Header";
// import Products from "./components/Products";
// import Footer from "./components/Footer";

// function App() {
//   const [cartCount, setCartCount] = useState(0);

//   const addToCart = () => {
//     setCartCount((prev) => prev + 1);
//   };

//   return (
//     <section className="myDiv">
//       <Header cartCount={cartCount} />
//       <Products onAddToCart={addToCart} />
//       <Footer />
//     </section>
//   );
// }

// export default App;

import { useState, useEffect } from "react";
function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((ans) => {
        setData(ans);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      {data.map((r) => (
        <div>
          <img src={r.image} alt={r.title} />
          <h2>{r.title}</h2>
          <p>{r.price}</p>
        </div>
      ))}
    </>
  );
}
export default App;
