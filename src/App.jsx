import React from "react";
import { createRoot } from "react-dom";

const Pet = (props) => {
    return React.createElement(
        "div",
        {},
        [
            React.createElement("h1", {}, props.name),
            React.createElement("h2", {}, props.animal),
            React.createElement("h2", {}, props.breed),
        ]
    )
}


const App = () => {
    return React.createElement(
        "div",
        {},[
        React.createElement("h1", {}, "Adapt Me!"),
        React.createElement(Pet, {
            name: "Luna",
            animal: "Dog",
            breed: "Harvard"
        }),
        React.createElement(Pet, {
            name: "Dreck",
            animal: "Cat",
            breed: "Mixed"
        }),
        React.createElement(Pet, {
            name: "Pepper",
            animal: "Bird",
            breed: "Cocktail"
        }),
        ])
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));