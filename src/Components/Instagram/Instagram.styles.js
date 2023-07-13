import styled from "styled-components";
import { deviceQuery } from "../../MediaSizes";

export const StyledInstagram = styled.div`
  background-image: url("/Assets/Instagram.png");
  background-repeat: no-repeat;
  background-size: cover
  background-color: #cccccc;

  .insta-container {
    width: 40%;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 60px;
    gap: 30px;

    @media (${deviceQuery.laptopL}) {
        width:100%;
      }

    .btn {
      border-radius: 20px;
      height: 40px;
      width: 140px;
      box-shadow: 5px 10px #EDEADE;
    }
  }
`;
