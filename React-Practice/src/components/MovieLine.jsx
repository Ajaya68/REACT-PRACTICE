import Movie from "./Movie";
import './MovieLine.css';
function MovieLine() {
  return (
    <div className="movieLine">
      <h2>K-drama Movies</h2>
      <Movie />
      <Movie />
      <Movie />
      <Movie />
    </div>
  );
}
export default MovieLine;
