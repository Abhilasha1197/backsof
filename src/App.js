import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
function App() {
  return (
    <BrowserRouter>
    <div className="flex flex-col h-full">
      <Header />
      <Routes>
        <Route
          path="/"
          exact
          element={<Home />}
        />
       
      </Routes>
    </div>
   
  </BrowserRouter>
   
  );
}

export default App;
