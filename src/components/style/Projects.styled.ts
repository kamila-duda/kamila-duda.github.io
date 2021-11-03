import styled, { css } from "styled-components";

export const StyledProjectsContainer = styled.div`
  position: relative;
  display: grid;
  height: auto;
  grid-gap: 24px;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  @media (max-width: ${({ theme }) => theme.breakpoint.s}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
