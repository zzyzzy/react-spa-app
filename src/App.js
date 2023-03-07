import React from "react";
import {Route, Routes} from "react-router";
import Home from "./pages/Home";
import Stuff from "./pages/Stuff";
import Contact from "./pages/Contact";
import {NavLink} from "react-router-dom";
import NoPath from "./pages/NoPath";

// localhost:3000           -> Home
// localhost:3000/stuff     -> Stuff
// localhost:3000/contact   -> Contact

function App() {
  return (
    <div>
      <h1>Simple SPA</h1>
      <ul className="header">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/stuff">Stuff</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
      <div className="content">
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/stuff' element={<Stuff />} />
              <Route path='/contact' element={<Contact />} />
              <Route path='*' element={<NoPath />} />
          </Routes>
      </div>
    </div>
  );
}

export default App;
