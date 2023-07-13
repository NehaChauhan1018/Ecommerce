import styled from "styled-components";
import { deviceQuery } from "../../MediaSizes";

export const StyledPick = styled.div`
  padding: 40px 0px;
  .pick-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
  }
  .cards {
    padding-top: 60px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 80px;
    @media (${deviceQuery.laptopL}) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (${deviceQuery.mobileSM}) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;
