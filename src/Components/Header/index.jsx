import React from "react";
import { NavLink } from "react-router-dom";

export default function index() {
  
  return (
    <header className="py-2 bg-orange-100/50 backdrop-blur border-b border-orange-200">
      <div className="container">
        <nav className="flex items-center justify-between">
          <div className="brand">
            <NavLink to="/" className="text-2xl font-bold text-orange-600">
              LoGo
            </NavLink>
          </div>
          <ul className="flex items-center menu">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About us</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact us</NavLink>
            </li>

          </ul>
        </nav>
      </div>
    </header>
  );
}
