import styled from "styled-components";
import { deviceQuery } from "../../MediaSizes";

export const StyledCustomDrawer = styled.div`
  display: flex;
  align-items: right;
  .custom {
    display: none;
  }
  @media (${deviceQuery.laptopM}) {
    .custom {
      display: block;
      right: 0;
    }

    .ant-drawer > .ant-drawer-body {
      display: flex;
      flex-direction: column;
    }
  }
`;
