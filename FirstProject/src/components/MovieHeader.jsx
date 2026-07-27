// MovieHeader.jsx
import { useState } from "react";
import "./MovieHeader.css";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../../node_modules/bootstrap-icons/font/bootstrap-icons.css";

function MovieHeader() {
  const [activeLink, setActiveLink] = useState("home");
  const [isNavOpen, setIsNavOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home" },
    { id: "movies", label: "Movies" },
    { id: "tv", label: "TV Show" },
    { id: "popular", label: "New & Popular" },
    { id: "mylist", label: "My List" },
  ];

  return (
    <header className="movie-header d-flex flex-wrap justify-content-between align-items-center p-2">
      <a href="#" className="p-2 text-decoration-none">
        <h1
          className="fw-bold text-danger mb-0"
          style={{ fontSize: "clamp(1.2rem, 4vw, 2rem)" }}
        >
          Midnight Cinema
        </h1>
      </a>

      {/* Hamburger button (visible on small screens) */}
      <button
        className="navbar-toggler d-lg-none border-0 bg-transparent"
        onClick={() => setIsNavOpen(!isNavOpen)}
        aria-label="Toggle navigation"
      >
        <span className="bi bi-list fs-2 text-light"></span>
      </button>

      {/* Navigation links */}
      <nav className={`nav-links ${isNavOpen ? "show" : ""}`}>
        {navItems.map((item) => (
          <a
            key={item.id}
            href="#"
            className={`nav-link ${activeLink === item.id ? "active" : ""}`}
            onClick={(e) => {
              e.preventDefault();
              setActiveLink(item.id);
              setIsNavOpen(false);
            }}
          >
            {item.label}
          </a>
        ))}
      </nav>

      {/* Right side buttons */}
      <div className="d-flex gap-2 align-items-center">
        <span className="btn btn-primary btn-sm d-none d-sm-inline-block">
          <span className="bi bi-translate me-1"></span>
          <span className="d-none d-md-inline">English</span>
          <span className="bi bi-chevron-down ms-1"></span>
        </span>
        <span className="btn btn-danger btn-sm">Sign in</span>
      </div>
    </header>
  );
}

export default MovieHeader;
