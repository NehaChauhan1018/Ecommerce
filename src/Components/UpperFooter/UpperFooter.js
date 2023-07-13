import React from "react";
import { GlobalStyledContainer } from "../../GlobalStyles";
import { StyledUpperFooter } from "./UpperFooter.styles";

function UpperFooter() {
  return (
    <GlobalStyledContainer>
      <StyledUpperFooter>
        <div className="main-body">
          <div className="main-content">
            <div className="container">
              <p className="medium-head">Free Delivery</p>
              <p className="light-big-text">
                For all oders over $50, consectetur adipim scing elit.
              </p>
            </div>
            <div className="container">
              <p className="medium-head">90 days return</p>
              <p className="light-big-text">
                If goods have problems, consectetur adipim scing elit.
              </p>
            </div>

            <div className="container">
              <p className="medium-head">Secure Payment</p>
              <p className="light-big-text">
                100% secure payment, consectetur adipim scing elit.
              </p>
            </div>
          </div>
        </div>
      </StyledUpperFooter>
    </GlobalStyledContainer>
  );
}

export default UpperFooter;
