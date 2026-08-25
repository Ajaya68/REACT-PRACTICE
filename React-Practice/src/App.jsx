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

// import { useState, useEffect } from "react";
// function App() {
//   const [pok, setPok] = useState("");
//   const [pokDetails, setPokDetails] = useState({});
//   const [error, setError] = useState("");

//   useEffect(() => {
//     async function fetchData() {
//       try {
//         if (pok.length != 0) {
//           const result = await fetch(
//             `https://pokeapi.co/api/v2/pokemon/${pok}`,
//           );
//           const data = await result.json();
//           setPokDetails(data);
//         }
//       } catch (error) {
//         setError(error);
//       }
//     }
//     fetchData();
//   }, [pok]);
//   return (
//     <>
//       <header className="bg-dark text-white text-center d-flex justify-content-evenly">
//         <h2 className="">Basic API</h2>
//         <div>
//           <input
//             type="text"
//             placeholder="Enter Pokemon Name"
//             className="form-control"
//             value={pok}
//             onChange={(e) => setPok(e.target.value)}
//           />
//         </div>
//       </header>
//       <main>
//         {pokDetails.name && (
//           <>
//             <img src={pokDetails.sprites.front_default} alt="" />
//             <h2>{pokDetails.name}</h2>
//           </>
//         )}
//       </main>
//       <footer className="bg-dark text-white f-bottom text-center">This Site Becomes to Ajaya &copy ;2026</footer>
//     </>
//   );
// }
// export default App;

// import React from "react";
// import Todo from "./ReactForms/Todo";
// function App() {
//   return (
//     <>
//       <header className="bg-dark text-white py-4  fs-3 text-center">
//         Simple To do application
//       </header>
//       <Todo></Todo>
//     </>
//   );
// }

// export default App;

// import React from 'react'
// import { useState } from "react";
// import ReactForm from "./ReactForms/ReactForm";
// function App() {
//   const [userName, setUserName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   return (
//     <div>
//       <ReactForm
//         userName={userName}
//         setUserName={setUserName}
//         email={email}
//         setEmail={setEmail}
//         password={password}
//         setPassword={setPassword}
//       ></ReactForm>
//     </div>
//   );
// }

// export default App;

// import React from 'react'
import { useState } from "react";
import { ThemeContext } from "./main";
import Component1 from "./ContextAPI/Component1";
function App() {
  const [theme, setTheme] = useState("light");

  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Component1></Component1>
      </ThemeContext.Provider>
      <button
        onClick={() => {
          let x = theme == "light" ? "dark" : "light";
          setTheme(x);
        }}
        className="btn btn-primary"
      >
        Click Me
      </button>
    </>
  );
}

export default App;
