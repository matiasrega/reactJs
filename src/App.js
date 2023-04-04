import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Components
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

//Import Router-dom
import Contacto from "./Pages/Contacto";
import Home from "./Pages/Home";
import ItemDetail from "./Pages/ItemDetail";
import Error from "./Pages/Error";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/Contacto" element={<Contacto />}></Route>
            <Route path="/" element={<Home />}></Route>
            <Route path="/category/:id" element={<ItemListContainer />}></Route>
            <Route path="/item/:id" element={<ItemDetail />}></Route>
            <Route path="*" element={<Error />}></Route>
          </Routes>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
