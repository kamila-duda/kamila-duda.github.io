import styled from "styled-components";

export const Wrapper = styled.p`
  font-size: 20px;
  min-height: 230px;
  line-height: 42px;
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    font-size: 16px;
  }
`;
