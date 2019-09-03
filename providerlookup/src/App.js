import React from "react";
import Header from "./component/layout/header";
import SearchCriteria from "./component/layout/searchCriteria"
//import './App.scss';
import "./App1.css";

function App() {
  return (
   <form>
    <div id="AL_Container">
      <div id="AL_Content"> 
      <Header />
      <SearchCriteria/>
      </div></div>
    </form>
  );
}

export default App;
