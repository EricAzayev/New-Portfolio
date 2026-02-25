import { Outlet, Link } from "react-router-dom";
import { Home, Code, Database, Cpu, Pen } from "lucide-react";
import "../Front.css";

const Layout = () => {
  return (
    <div>
      {/* Navbar Section */}
      <nav className="navbar">
        <div className="navbar-right">
          <Link to="/" style={{ textDecoration: 'none' }}>
            <div className="nav-section">
              <Home />
              <span>Home</span>
            </div>
          </Link>
          <Link to="/fullstack" style={{ textDecoration: 'none' }}>
            <div className="nav-section">
              <Code />
              <span>Full-Stack</span>
            </div>
          </Link>
          <Link to="/data" style={{ textDecoration: 'none' }}>
            <div className="nav-section">
              <Database />
              <span>Data</span>
            </div>
          </Link>
          <Link to="/programmatics" style={{ textDecoration: 'none' }}>
            <div className="nav-section">
              <Cpu />
              <span>Programmatics</span>
            </div>
          </Link>
          <Link to="/blog" style={{ textDecoration: 'none' }}>
            <div className="nav-section">
              <Pen />
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
