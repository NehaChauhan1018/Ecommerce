import styled from "styled-components";

export const StyledBlogs = styled.div`
  padding: 40px 0px;
  background-color: rgba(212, 212, 212, 0.2);
  .blog-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
  }
  .blogs {
    padding-top: 60px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 80px;
    overflow: auto;
  }
`;
