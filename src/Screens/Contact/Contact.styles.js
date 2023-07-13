import styled from "styled-components";

export const StyledContact = styled.div`
  .upper-body {
    background-image: url("/Assets/Contact.png");
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px;
  }
  .contact-body {
    width: 80%;
    margin: auto;
    padding: 50px 0;

    .heading {
      display: flex;
      width: 70%;
      margin: auto;
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 20px;
    }
  }
  .container {
    display: flex;
    flex-direction: column;
    gap: 50px;
  }
  .contact-details {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 50px 0;

    .single-container {
      display: flex;
      gap: 20px;
      align-items: center;
    }
  }

  p {
    padding: 5px;
  }
  .field-container {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-bottom: 20px;
  }
`;
