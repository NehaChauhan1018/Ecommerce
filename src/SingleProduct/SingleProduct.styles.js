import styled from "styled-components";

export const StyledSingleProduct = styled.div`
  width: 80%;
  margin: auto;
  .single-product-container {
    display: flex;
    flex-direction: column;
    gap: 80px;
    padding: 60px 0;

    .upper-container {
      display: grid;
      grid-template-columns: 0.5fr 2fr 1.5fr;
      gap: 20px;

      .middle-container {
        display: flex;
        background: rgba(212, 212, 212, 0.2);
        border-radius: 15px;
        align-items: center;
        justify-content: center;

        img {
          width: 80%;
          height: 90%;
          margin: 0;
        }
      }

      .right-container {
        display: flex;
        gap: 60px;
        flex-direction: column;
        padding: 0 0 0 20px;

        .text{
            display: flex;
            flex-direction: column;
            gap: 10px;
            }
      }
    }
  }
  
  .lower-container {
    width: 80%;
    margin: auto;
  }
  .ant-tabs > .ant-tabs-nav .ant-tabs-nav-list {
    width: 100%;
    justify-content: flex-start;
    gap: 240px;
    font-size: 32px !important;
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    color: rgb(53, 57, 53);
  }
  .ant-tabs .ant-tabs-tabpane {
    font-size: 16px;
    font-family: Poppins;
    font-style: normal;
    color: #adabae;
    font-weight: 500;
  }
  /* .ant-tabs-tab {
    background: yellow;
    display: flex !important;
  } */
  .ant-tabs .ant-tabs-tab {
    
    display: flex !important;
    align-items: left;
    justify
  }

  .image-container{
    display: flex;
    justify-content: space-around;
    .images{
        display: flex;
        height: 320px;
        width: 350px;
        background: rgba(212, 212, 212, 0.2);
        justify-content: center;
        padding: 40px;
    }
  }
`;
