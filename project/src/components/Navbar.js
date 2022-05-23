import { useGlobalContext } from "../hooks/context";
import logo from "../logo.svg";

function Navbar() {
  const { onRouteChange, route } = useGlobalContext();

  if (route === "signin") {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <img src={logo} alt="project logo" className="logo" />
          <ul className="nav-links">
            <li>
              <p onClick={() => onRouteChange("about")}>About</p>
            </li>
            <li>
              <p onClick={() => onRouteChange("register")}>Register</p>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
  if (route === "home") {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <img src={logo} alt="project logo" className="logo" />
          <ul className="nav-links">
            <li>
              <p onClick={() => onRouteChange("about")}>About</p>
            </li>
            <li>
              <p onClick={() => onRouteChange("signin")}>Sign Out</p>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
  if (route === "register") {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <img src={logo} alt="project logo" className="logo" />
          <ul className="nav-links">
            <li>
              <p onClick={() => onRouteChange("signin")}>Home</p>
            </li>
            <li>
              <p onClick={() => onRouteChange("about")}>About</p>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
  if (route === "image") {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <img src={logo} alt="project logo" className="logo" />
          <ul className="nav-links">
            <li>
              <p onClick={() => onRouteChange("home")}>Home Page</p>
            </li>
            <li>
              <p onClick={() => onRouteChange("signin")}>Sign Out</p>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
  if (route === "about") {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <img src={logo} alt="project logo" className="logo" />
          <ul className="nav-links">
            <li>
              <p onClick={() => onRouteChange("signin")}>Home</p>
            </li>
            <li>
              <p onClick={() => onRouteChange("register")}>Register</p>
            </li>
            <li>
              <p onClick={() => onRouteChange("signin")}>Sign In</p>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
