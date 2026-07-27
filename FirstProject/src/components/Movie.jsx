// Movie.jsx
import React, { useRef, useState, useEffect } from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "./Movie.css";

function Movie({ title = "Popular Movies", movieList = [] }) {
  const containerRef = useRef(null);
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  const updateButtons = () => {
    const container = containerRef.current;
    if (!container) return;
    const { scrollLeft, scrollWidth, clientWidth } = container;
    setShowLeft(scrollLeft > 5);
    setShowRight(scrollLeft + clientWidth < scrollWidth - 5);
  };

  useEffect(() => {
    updateButtons();
    window.addEventListener("resize", updateButtons);
    return () => window.removeEventListener("resize", updateButtons);
  }, [movieList]);

  const scroll = (direction) => {
    const container = containerRef.current;
    if (!container) return;
    const firstCard = container.querySelector(".movie-card");
    if (!firstCard) return;
    const cardWidth = firstCard.offsetWidth;
    const gap = 16; // matches Bootstrap gap-3 (1rem ≈ 16px)
    const scrollAmount = cardWidth + gap;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
    setTimeout(updateButtons, 300);
  };

  return (
    <div className="movie-row">
      <h2 className="row-title text-light ms-4">{title}</h2>
      <div className="position-relative">
        {/* Left Button */}
        {showLeft && (
          <button className="carousel-btn left-btn" onClick={() => scroll("left")}>
            &#10094;
          </button>
        )}
        {/* Right Button */}
        {showRight && (
          <button className="carousel-btn right-btn" onClick={() => scroll("right")}>
            &#10095;
          </button>
        )}
        <div
          ref={containerRef}
          className="d-flex flex-nowrap overflow-auto p-3 gap-3 scroll-container"
          onScroll={updateButtons}
        >
          {movieList.map((movie) => (
            <div key={movie.title} className="movie-card flex-shrink-0">
              <div className="poster-wrapper">
                <img src={movie.image} alt={movie.title} className="w-100 movie-poster" />
                {movie.badge && (
                  <span className={`badge-overlay badge-${movie.badge.toLowerCase().replace(/ /g, '-')}`}>
                    {movie.badge}
                  </span>
                )}
              </div>
              <div className="card-body d-flex flex-column text-center bg-dark text-light p-2">
                <h6 className="text-truncate">{movie.title}</h6>
                <p className="small text-secondary mb-1">Released: {movie.releaseYear}</p>
                <button className="btn btn-warning btn-sm mt-auto align-self-center watch-now-btn">
                  Watch Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Movie;