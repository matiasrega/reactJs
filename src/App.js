import React, { Component } from "react";
import "./App.css";

//Components
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ImgGanoder from "./components/ItemListContainer/ganodermalucidum1.jpg";
import ImgCordy from "./components/ItemListContainer/Cordycepsmilitaris.jpg";

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="body">
          <div className="itemListContainer">
            <ItemListContainer
              gretting="Soy un Ganoderma Lucidum"
              img={ImgGanoder}
              DescriptionImg="Soy el texto cuando me pasas el mouse por encima"
              Description="Soy un hongo"
            />
            <ItemListContainer
              gretting="Soy un Cordiceps Militaris"
              img={ImgCordy}
              DescriptionImg="Soy el texto cuando me pasas el mouse por encima"
              Description="Soy un hongo"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
