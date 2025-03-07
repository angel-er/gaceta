import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/gaceta">Gaceta</Link>
            <ul>
              <li>
                <Link to="/gaceta/edicion1">Edición 1</Link>
              </li>
              <li>
                <Link to="/gaceta/edicion2">Edición 2</Link>
              </li>
            </ul>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
