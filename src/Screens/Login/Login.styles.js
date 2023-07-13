import styled from "styled-components";

export const StyledLogin = styled.div`
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
  button {
    width: 150px;
    border-radius: 15px;
    border: 1px solid #000;
  }
  .main-container {
    padding: 40px;
    width: 70%;
    margin: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 220px;

    .container {
      display: flex;
      flex-direction: column;
      gap: 40px;
    }

    .field-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 20px;
    }
  }
  .text {
    display: flex;
    gap: 20px;
  }
  .ant-col-offset-8 {
    margin: 0 !important;
  }
  .button-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
  }
  .user-container {
    display: flex;
    flex-direction: column;
    width: 40%;
    margin: auto;
    align-items: center;
    gap: 20px;

    img {
      height: 80px;
      width: 80px;
    }
  }
`;
