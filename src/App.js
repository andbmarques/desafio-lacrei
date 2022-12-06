import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import GlobalStyle from './Utils/globalStyle';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from "./Pages/Home/Home";
import User from "./Pages/User/User";
import Professional from "./Pages/Professional/Professional";

function App() {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pessoa-usuaria" element={<User />} />
          <Route path="/profissional" element={<Professional />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
