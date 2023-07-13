import styled from "styled-components";
import { deviceQuery } from "../../MediaSizes";

export const StyledFooter = styled.div`
  .footer-container {
    display: grid;
    grid-template-columns: 1fr 0.5fr 0.5fr 1fr;
    align-items: flex-start;
    padding: 60px 0px;
    gap: 50px;
    @media (${deviceQuery.tabletS}) {
      gap: 0;
    }
    @media (${deviceQuery.mobileSM}) {
      grid-template-columns: repeat(1, 1fr);
      text-align: center;
    }

    ul > li {
      list-style-type: none;
    }
    ul {
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
    .field-container {
      display: flex;
      flex-direction: column;
      gap: 20px;
      align-items: left;
    }
    .logo {
      width: 100%;
      margin: auto;
    }
    .btn-container {
      display: flex;
      gap: 10px;
      @media (${deviceQuery.laptopL}) {
        flex-wrap: wrap;
      }

      input {
        border: none;
        border-bottom: 1px solid #6e6e6e;
      }
      button {
        border: none;
        border-bottom: 1px solid #6e6e6e;
        background: none;
        width: 70px;
        border-radius: 0px;
      }
    }
  }
`;
