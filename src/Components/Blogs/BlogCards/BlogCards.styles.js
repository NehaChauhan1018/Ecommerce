import styled from "styled-components";

export const StyledBlogCards = styled.div`
  .blogcard-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
  .img {
    width: 300px;
    height: 300px;

    margin: 0 0 20px 0;
  }
  .field-date {
    display: flex;
    gap: 10px;
    align-items: center;
  }

  .ant-divider {
    color: white;
    height: 6px;
    width: 2px;
    border-color: black;
    margin-top: 10 !important;
  }
`;
