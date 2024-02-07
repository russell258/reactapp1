import React from "react";
import './App.css';
import Card from "./Card";

function App(){
    return(
        <div className="App">
            <Card name="Alan Smith"/>
            <Card name="John Doe"/>
            <Card name="Mary Jane"/>
        </div>
    );
}

export default App;