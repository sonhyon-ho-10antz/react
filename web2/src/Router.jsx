import React from "react";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";

const animationPages = require.context('./pages', true, /Animation\d+_Page\.jsx$/);

const pages = animationPages.keys().map((path) => {
  const pageLabel = path.split('/')[2].replace('_Page.jsx', ''); 
  const PageComponent = animationPages(path).default;
  
  return { path: `/${pageLabel}`, component: PageComponent, label: pageLabel };
});

export default function Router() {
  return (
    <BrowserRouter>
      <nav className="menu_bar">
        <NavLink className={({ isActive }) => "nav-link" + (isActive ? " click" : "")} to='/'>
          Home
        </NavLink>

        {pages.map((page) => (
          <NavLink
            key={page.label}
            className={({ isActive }) => "nav-link" + (isActive ? " click" : "")}
            to={page.path}
          >
            {page.label}
          </NavLink>
        ))}
      </nav>

      <Routes>
        <Route exact path='/' element={<HomePage />} />

        {pages.map((page) => (
          <Route key={page.label} path={page.path} element={<page.component />} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}
