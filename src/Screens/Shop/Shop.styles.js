import styled from "styled-components";

export const StyledShop = styled.div`
  .upper-body {
    background-image: url("/Assets/Login.png");
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px;
  }
  .shop-body {
    width: 80%;
    margin: auto;
  }
  .card-body {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
  }
`;
