import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Navbar</h1>
      <div className="nav-links">
        {/* <Link to={"/"}>Home</Link>
        <Link to={"/about"}>About</Link>
        <Link to={"/contact"}>Contact</Link> */}
        <NavLink
          className={({ isActive }) => {
            return isActive ? "active" : "link";
          }}
          to={"/"}
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => {
            return isActive ? "active" : "link";
          }}
          to={"/about"}
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) => {
            return isActive ? "active" : "link";
          }}
          to={"/contact"}
        >
          Contact
        </NavLink>
        <NavLink
          className={({ isActive }) => {
            return isActive ? "active" : "link";
          }}
          to={"/products"}
        >
          Products
        </NavLink>
        <NavLink
          className={({ isActive }) => {
            return isActive ? "active" : "link";
          }}
          to={"/login"}
        >
          Login
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
