import React from "react";
import { GlobalStyledContainer } from "../../GlobalStyles";
import Cards from "./Cards/Cards";
import { StyledPick } from "./Picks.styles";

function Picks() {
  const cardDetails = [
    {
      img: "/Assets/Pick1.png",
      title: "Brake System",
      cost: "Rs. 25,000",
    },
    {
      img: "/Assets/Pick2.png",
      title: "Branded Tires ",
      cost: "Rs. 25,000",
    },
    {
      img: "/Assets/Pick3.png",
      title: "Air Filter System",
      cost: "Rs. 25,000",
    },
    {
      img: "/Assets/Pick4.png",
      title: "Car Headlights",
      cost: "Rs. 25,000",
    },
  ];
  return (
    <StyledPick>
      <GlobalStyledContainer>
        <div className="pick-container">
          <p className="medium-head">Top Picks For You</p>
          <p>
            Find a bright ideal to suit your taste with our great selection of
            products.
          </p>
          <div className="cards">
            {cardDetails.map((item) => {
              return (
                <Cards img={item.img} title={item.title} cost={item.cost} />
              );
            })}
          </div>
        </div>
      </GlobalStyledContainer>
    </StyledPick>
  );
}

export default Picks;
