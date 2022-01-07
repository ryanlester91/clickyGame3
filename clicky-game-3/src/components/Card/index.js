import React from "react";
import "./style.css";

const Card = props => (
  <div className="card">
    <img alt={props.name} src={props.image} id={props.id}
    onClick={() => props.shuffleArray(props.id)}></img>
  </div>
)
/*const Card = ({ id, name, image, pickCharacters }) => (
  //<div className={`mdc-layout-grid__cell--span-3--order-${Number(id)}`}>
  <div>
      <div
          className="card"
          key={id}
          data-id={id}
          name={name}
          style={{ backgroundImage: `url(${image})` }}
          isClicked={pickCharacters}
      >
      </div>
  </div>
)*/

export default Card;