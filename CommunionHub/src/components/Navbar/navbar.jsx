import './navbar.css';

const Navbar = ({ OnHome, OnEvent, OnAbout }) => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/logo.png" alt="Logo" />
      </div>
      <div className="right">
        <ul className="nav-links">
          <li>
            <a href="/" onClick={OnHome}>
              Home
            </a>
          </li>
          <li>
            <a href="/Event" onClick={OnEvent}>
              Events
            </a>
          </li>
          <li>
            <a href="/About" onClick={OnAbout}>
              About Us
            </a>
          </li>
          <li>
            <a href="/Contact">Contact</a>
          </li>
        </ul>
        <div className="social-icons">
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-square-x-twitter"></i>
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
