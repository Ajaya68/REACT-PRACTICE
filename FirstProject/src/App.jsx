// App.jsx
import MovieBody from "./components/MovieBody";
import MovieHeader from "./components/MovieHeader";
import MovieFooter from "./components/MovieFooter";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import "./App.css"; // we'll create this

function App() {
  return (
    <div className="app-container">
      <MovieHeader />
      <MovieBody />
      <MovieFooter />
    </div>
  );
}
export default App;