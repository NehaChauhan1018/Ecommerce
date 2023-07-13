import React from "react";
import { StyledCards } from "./Cards.styles";

function Cards({ img, title, cost }) {
  return (
    <StyledCards>
      <div className="card-container">
        <div className="img">
          <img src={img} alt="" />
        </div>
        <div>
          <p className="small-head">{title}</p>
        </div>
        <div>
          <p className="medium-head">{cost}</p>
        </div>
      </div>
    </StyledCards>
  );
}

export default Cards;
