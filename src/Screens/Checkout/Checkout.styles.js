import styled from "styled-components";

export const StyledCheckout = styled.div`
  .upper-body {
    background-image: url("/Assets/Checkout.png");
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px;
  }
  .checkout-body {
    width: 80%;
    margin: auto;
    padding: 50px 0;
  }
  .basic {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  .container-one {
    padding: 40px 80px 0 0;
  }
  .first-field-container {
    display: flex;
    gap: 20px;
  }
  .button-container {
    display: flex;
    gap: 30px;
    align-items: center;
  }
  .ant-select.ant-select-in-form-item {
    width: 100% !important;
    height: 40px !important;
  }
  .label {
    padding-bottom: 8px;
  }
  .field-container {
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding-bottom: 25px;
  }
  .one {
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding-bottom: 25px;
  }
  .two {
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding-bottom: 25px;
  }
  .container {
    display: flex;
    flex-direction: column;

    .single {
      display: grid;
      grid-template-columns: repeat(2, 1fr);

      p {
        padding: 10px 0;
      }

      .cost {
        color: #b88e2f;
        font-size: 24px;
        font-family: Poppins;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
      }
    }
    button {
      width: 40%;
      margin: 20px 125px;
    }
  }
`;
