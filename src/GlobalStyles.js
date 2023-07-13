import Button from "@mui/material/Button";
import styled from "styled-components";

export const StyledButton = styled(Button)`
  border-radius: 3px;
  font-family: "Lato";
  font-weight: 700;
  font-size: 17px;
  line-height: 20px;
  color: #ffffff;
  &&:hover {
    background: #fb2e86;
  }
`;

export const GlobalStyledContainer = styled.div`
  /* width: 80%;
  margin: auto; */
  .big-head {
    font-size: 32px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    color: rgb(53, 57, 53);
  }
  .medium-head {
    font-size: 20px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    color: rgb(53, 57, 53);
  }
  .small-head {
    font-size: 18px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 400;
    color: rgb(53, 57, 53);
  }
  .big-text {
    font-size: 16px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 400;
    color: rgb(53, 57, 53);
  }
  .normal-text {
    font-size: 14px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 400;
    color: rgb(53, 57, 53);
  }
  .light-text {
    font-size: 14px;
    font-family: Poppins;
    font-style: normal;
    color: #adabae;
    font-weight: 500;
  }
  .light-big-text {
    font-size: 16px;
    font-family: Poppins;
    font-style: normal;
    color: #adabae;
    font-weight: 500;
  }
`;

export const StyledFullContainer = styled.div`
  .big-head {
    font-size: 52px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    color: rgb(53, 57, 53);
  }
  .bigger-head {
    font-size: 42px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    color: rgb(53, 57, 53);
  }
  .medium-head {
    font-size: 32px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    color: rgb(53, 57, 53);
  }
  .small-head {
    font-size: 24px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    color: rgb(53, 57, 53);
  }
  .big-text {
    font-size: 16px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    color: rgb(53, 57, 53);
  }
  .normal-text {
    font-size: 14px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 400;
    color: rgb(53, 57, 53);
  }
  .small-text {
    font-size: 12px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 400;
    color: rgb(53, 57, 53);
  }
  .light-text {
    font-size: 14px;
    font-family: Poppins;
    font-style: normal;
    color: #adabae;
    font-weight: 500;
  }
  .light-big-text {
    font-size: 16px;
    font-family: Poppins;
    font-style: normal;
    color: #adabae;
    font-weight: 500;
  }
  .cursor {
    cursor: pointer;
  }
`;
