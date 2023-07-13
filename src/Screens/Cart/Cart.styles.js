import styled from "styled-components";

export const StyledCart = styled.div`
  .upper-body {
    background-image: url("/Assets/Cart.png");
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px;
  }
  .cart-body {
    width: 80%;
    margin: auto;
    padding: 50px 0;
    display: grid;
    grid-template-columns: 3fr 0.5fr;
    gap: 20px;

    .cart-total {
      /* width: 80%;
        padding: 20px; */

      .cart-total-body {
        background: #fff9e5;
        display: flex;
        flex-direction: column;
        width: 300px;
        gap: 40px;
        padding: 50px;
        align-items: center;
        .details {
          display: grid;
          grid-template-columns: repeat(2, 1fr);

          .single {
            display: flex;
            flex-direction: column;
            gap: 20px;

            .cost {
              color: #b88e2f;
              font-size: 16px;
              font-family: Poppins;
              font-style: normal;
              font-weight: 500;
              line-height: normal;
            }
          }
        }
      }

      button {
        border-radius: 15px;
        height: 40px;
        width: 140px;

        border: 1px solid #000;
        background: none;
      }
    }
  }
  .ant-table-thead {
    background: #fff9e5;
  }
  .ant-table-wrapper .ant-table-thead > tr > th {
    background: none;
  }
  .anticon > svg {
    font-size: 20px;
  }
`;
