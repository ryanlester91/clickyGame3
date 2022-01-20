import React from "react";
import "./style.css";

const Card = props => (
  <div className="card">
    <div className="img-container">
      <img id={props.id} alt={props.name} src={props.image} 
        onClick={() => props.pickCharacter(props.id)}></img>
    </div>
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