import styled from "styled-components";
import { deviceQuery } from "../../../MediaSizes";

export const StyledHomeMain = styled.div`
  .main-container {
    background-color: rgba(212, 212, 212, 0.2);
    .main-body {
      width: 80%;
      margin: auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 30px;
      /* background-color: #d4d4d4; */
      @media (${deviceQuery.laptopL}) {
        flex-wrap: wrap-reverse;
        justify-content: center;
      }
      

      .container {
        display: flex;
        flex-direction: column;
        gap: 20px;
        align-items: center;
        @media (${deviceQuery.mobileSM}) {
          .big-head {
            font-size: 32px;
          }
          .medium-head {
            font-size: 18px;
          }
          .small-head {
            font-size: 14px;
          }
        }

        .span {
          color: rgba(17, 17, 17, 0.6);
        }

        button {
          height: 40px;
          width: 160px;
          background: rgba(17, 17, 17, 0.6);
          color: white;
        }
      }

      img {
        height: 500px;
        @media (${deviceQuery.tabletS}) {
          height: 250px;
        }
      }
    }
  }
`;
