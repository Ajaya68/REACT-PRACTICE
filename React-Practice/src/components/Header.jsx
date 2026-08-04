import "./Header.css";

function Header({ cartCount }) {
  // destructure cartCount
  return (
    <header className="header">
      <div className="nav-logo">
        <a href="#">
          <h3>Lumina-Shop</h3>
        </a>
      </div>
      <nav>
        <ul className="nav-links">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </nav>
      <nav className="fs-5">
        <span className="bi bi-person m-1 p-2 "></span>
        <span className="bi bi-cart-fill m-1 p-2 ">
          <sup>{cartCount}</sup>
        </span>
      </nav>
    </header>
  );
}

export default Header;
