import { Outlet, Link } from "react-router-dom";
import "../Front.css";

const Layout = () => {
  return (
    <div>
      {/* Navbar Section */}
      <nav className="navbar">
        <div className="navbar-right">
          <Link to="/fullstack" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="nav-section">
              <img src="src\assets\dataSci.png" alt="Full-Stack Icon" />
              <span>Full-Stack</span>
            </div>
          </Link>
          <Link to="/data" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="nav-section">
              <img src="#" alt="Data Icon" />
              <span>Data</span>
            </div>
          </Link>
          <Link to="/blog" style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className="nav-section">
              <img src="#" alt="Blog Icon" />
              <span>Blog</span>
            </div>
          </Link>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
