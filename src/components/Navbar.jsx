import { NavLink } from 'react-router-dom';
import { FaNewspaper, FaRss } from 'react-icons/fa';
import { CgProfile } from 'react-icons/cg';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <NavLink to="/news" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <FaNewspaper className="nav-icon" />
          <span>News</span>
        </NavLink>
        
        <NavLink to="/feed" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <FaRss className="nav-icon" />
          <span>Feed</span>
        </NavLink>
        
        <NavLink to="/profile" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
          <CgProfile className="nav-icon" />
          <span>Profile</span>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar; 