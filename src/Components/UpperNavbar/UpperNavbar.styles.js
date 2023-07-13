import styled from "styled-components";
import { deviceQuery } from "../../MediaSizes";

export const StyledUpperNavbar = styled.div`
  background-color: rgba(134, 134, 134, 0.6);

  .main-container {
    display: flex;
    justify-content: space-between;
    padding: 10px 80px;
    height: 10vh;
    color: white;
    @media (${deviceQuery.tabletL}) {
      padding: 0;
    }

    .column {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;

      .icons {
        font-size: 25px;
      }

      button {
        background: #4e4b4b;
        border: none;
        color: white;
        
      }
    }
  }
`;
