import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import Animation01_Page from "./pages/Animation01/Animation01_Page";
import Animation02_Page from "./pages/Animation02/Animation02_Page";

import HomePage from "./pages/Home/HomePage";

export default function Router() {
  return (
    <BrowserRouter>
      <nav className="menu_bar">
        <NavLink className={({ isActive }) => "nav-link" + (isActive ? " click" : "")} to='/'>
          Home
        </NavLink>
        <NavLink className={({ isActive }) => "nav-link" + (isActive ? " click" : "")} to='/Animation01'>
        Animation01
        </NavLink>
        <NavLink className={({ isActive }) => "nav-link" + (isActive ? " click" : "")} to='/Animation02'>
        Animation02
        </NavLink>
      </nav>

      <Routes>
        <Route exact path='/' element={<HomePage />} />
        <Route path='/Animation01' element={<Animation01_Page />} />
        <Route path='/Animation02' element={<Animation02_Page />} />
      </Routes>
    </BrowserRouter>
  );
}