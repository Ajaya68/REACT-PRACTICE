import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="nav-logo">
        <img 
          src="https://imgs.search.brave.com/7W7_6SSS8Wxt-pGIk69VLhSrexcvYZF2Svg03aoYUFs/rs:fit:0:180:1:0/g:ce/aHR0cHM6Ly93d3cu/ZnJlZXBuZ2xvZ29z/LmNvbS91cGxvYWRz/L25ldGZsaXgtbG9n/by1wbmctZW1ibGVt/LTE1LnBuZw" 
          alt="Logo" 
        />
      </div>
      <nav>
        <ul className="nav-links">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;