import styled, { css } from "styled-components";

export const Title = styled.h4`
  font-size: 1.5em;
`;

export const Content = styled.ul`
  font-size: 20px;
  line-height: 42px;
  padding-bottom: 40px;
  position: relative;
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    font-size: 16px;
  }
`;

export const ContentItem = styled.li``;

export const StyledLink = styled.a(
  ({ theme: { color } }) => css`
    text-decoration: none;
    color: ${color.primaryColor};
  `
);
