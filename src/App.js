import React from "react";
import {Route, Routes} from "react-router";
import Home from "./pages/Home";
import Stuff from "./pages/Stuff";
import Contact from "./pages/Contact";

// localhost:3000           -> Home
// localhost:3000/stuff     -> Stuff
// localhost:3000/contact   -> Contact

function App() {
  return (
    <div>
      <h1>Simple SPA</h1>
      <ul className="header">
          <li><a href="/">Home</a></li>
          <li><a href="/stuff">Stuff</a></li>
          <li><a href="/contact">Contact</a></li>
      </ul>
      <div className="content">
          <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/stuff' element={<Stuff />} />
              <Route path='/contact' element={<Contact />} />
          </Routes>
      </div>
    </div>
  );
}

export default App;
