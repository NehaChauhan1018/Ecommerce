import styled from "styled-components";
import { deviceQuery } from "../../MediaSizes";

export const StyledNavbar = styled.div`
  /* width: 80%;
  margin: auto; */
  .navbar-container {
    display: flex;
    background-color: rgba(212, 212, 212, 0.2);
    justify-content: right;
  }
  .main-content {
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    gap: 130px;
    height: 12vh;
    justify-content: center;
    align-items: center;

    padding: 0 40px;

    a {
      text-decoration: none;
      color: rgb(53, 57, 53);
      cursor: pointer;
    }

    img {
      height: 80px;
      width: auto;
    }
    .content {
      justify-content: space-between;
    }
    .column {
      display: flex;
      gap: 30px;
    }
    @media (${deviceQuery.laptopM}) {
      display: none;
    }
  }
`;
