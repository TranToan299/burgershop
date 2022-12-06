import React from "react";
import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";

const HomeTemplate = () => {
  return (
    <div>
      <header className="header bg-dark text-white text-center">
        <h1 className="mx-3">Header</h1>
      </header>
      <nav class="nav justify-content-center  ">
        <li className="nav-item">
          <NavLink to="/burger" className="nav-link">
            Burger
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/total" className="nav-link">
            Total
          </NavLink>
        </li>
      </nav>
<div style={{height:'100vh'}}>

      <Outlet/>
</div>
      <footer className="footer bg-dark text-white text-center">
      <h1 className="mx-3">Footer</h1>
      </footer>
    </div>
  );
};

export default HomeTemplate;
