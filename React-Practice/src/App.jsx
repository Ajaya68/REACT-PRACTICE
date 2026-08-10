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

// import { useState, useEffect } from "react";
// function App() {
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     fetch("https://fakestoreapi.com/products")
//       .then((response) => response.json())
//       .then((ans) => {
//         setData(ans);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, []);
//   return (
//     <>
//       {data.map((r) => (
//         <div>
//           <img src={r.image} alt={r.title} />
//           <h2>{r.title}</h2>
//           <p>{r.price}</p>
//         </div>
//       ))}
//     </>
//   );
// }
// export default App;

import { useState, useEffect } from "react";
function App() {
  const [pok, setPok] = useState("");
  const [pokDetails, setPokDetails] = useState({});
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        if (pok.length != 0) {
          const result = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${pok}`,
          );
          const data = await result.json();
          setPokDetails(data);
        }
      } catch (error) {
        setError(error);
      }
    }
    fetchData();
  }, [pok]);
  return (
    <>
      <header className="bg-dark text-white text-center d-flex justify-content-evenly">
        <h2 className="">Basic API</h2>
        <div>
          <input
            type="text"
            placeholder="Enter Pokemon Name"
            className="form-control"
            value={pok}
            onChange={(e) => setPok(e.target.value)}
          />
        </div>
      </header>
      <main>
        {pokDetails.name && (
          <>
            <img src={pokDetails.sprites.front_default} alt="" />
            <h2>{pokDetails.name}</h2>
          </>
        )}
      </main>
      <footer className="bg-dark text-white f-bottom text-center">This Site Becomes to Ajaya &copy ;2026</footer>
    </>
  );
}
export default App;
