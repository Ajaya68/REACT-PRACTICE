// MovieFooter.jsx
import "./MovieFooter.css";
import "../../node_modules/bootstrap-icons/font/bootstrap-icons.css";

function MovieFooter() {
  return (
    <footer className="foot-nav bg-dark text-light border-top border-secondary py-4">
      <div className="container-fluid">
        <div className="row align-items-center">
          {/* Left: Brand & icons */}
          <div className="col-12 col-md-3 text-center text-md-start mb-3 mb-md-0">
            <h3 className="text-danger">Midnight Cinema</h3>
            <div className="mt-2">
              <span className="bi bi-emoji-smile-fill mx-2 fs-3"></span>
              <span className="bi bi-camera-fill mx-2 fs-3"></span>
              <span className="bi bi-megaphone-fill mx-2 fs-3"></span>
            </div>
          </div>
          {/* Right: Links */}
          <div className="col-12 col-md-9">
            <div className="row">
              <div className="col-6 col-md-4 mb-3 mb-md-0">
                <a href="#" className="d-block text-decoration-none text-light">Help Center</a>
                <a href="#" className="d-block text-decoration-none text-light">Gift Cards</a>
                <a href="#" className="d-block text-decoration-none text-light">Media Center</a>
                <a href="#" className="d-block text-decoration-none text-light">Investor Relations</a>
              </div>
              <div className="col-6 col-md-4 mb-3 mb-md-0">
                <a href="#" className="d-block text-decoration-none text-light">Jobs</a>
                <a href="#" className="d-block text-decoration-none text-light">Terms of Use</a>
                <a href="#" className="d-block text-decoration-none text-light">Privacy</a>
                <a href="#" className="d-block text-decoration-none text-light">Legal Notice</a>
              </div>
              <div className="col-6 col-md-4">
                <a href="#" className="d-block text-decoration-none text-light">Cookies Preference</a>
                <a href="#" className="d-block text-decoration-none text-light">Corporate Information</a>
                <a href="#" className="d-block text-decoration-none text-light">Contact Us</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default MovieFooter;