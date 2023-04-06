import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Components
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

//Import Router-dom
import Contacto from "./Pages/Contacto";
import Error from "./Pages/Error";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <NavBar />
          <Routes>
            <Route path="/Contacto" element={<Contacto />}></Route>
            <Route path="/" element={<ItemListContainer />}></Route>
            <Route path="/category/:id" element={<ItemListContainer />}></Route>
            <Route path="/item/:id" element={<ItemDetailContainer />}></Route>
            <Route path="*" element={<Error />}></Route>
          </Routes>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
