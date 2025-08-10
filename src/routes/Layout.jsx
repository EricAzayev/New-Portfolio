import { Outlet, Link } from "react-router-dom";
import "../Front.css";

const Layout = () => {
  return (
    <div>
      {/* Navbar Section */}
      <nav className="navbar">
        <div className="navbar-left">
          <h2 className="site-title">MySite</h2>
        </div>
        <div className="navbar-right">
          {/* <div className="nav-section">
            <img src="#" alt="Game Dev Icon" />
            <span>Featured</span>
          </div> */}
          <div className="nav-section">
            <img src="src\assets\dataSci.png" alt="Full-Stack Icon" />
            <span>Full-Stack</span>
          </div>
          <div className="nav-section">
            <img src="#" alt="Data Icon" />
            <span>Data</span>
          </div>
          {/* <div className="nav-section">
            <img src="#" alt="Game Dev Icon" />
            <span>Game Development</span>
          </div> */}
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
