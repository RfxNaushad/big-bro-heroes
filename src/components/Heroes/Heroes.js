import React from "react";
import "./Heroes.css";

const Heroes = (props) => {
  const { name, image, salary, age } = props.hero;
  const { selected, setSelected } = props;
  // console.log(props.hero.name)
  return (
    <div className="card">
      <img src={image} alt="" />
      <h3>Name: {name}</h3>
      <h4>Age: {age}</h4>
      <p>Address: {selected.address}</p>
      <p>Salary: {salary}</p>

      <button
        className="adding-button"
        onClick={() =>{props.handleHero(props.hero);
        {selected.filter((hero) => hero.name === name).length === 0 && setSelected([...selected, props.hero]);}}}>
        Add Actor
      </button>
    </div>
  );
};

export default Heroes;
