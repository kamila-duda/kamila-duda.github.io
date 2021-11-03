import styled, { css } from "styled-components";

export const StyledButton = styled.button(
  ({ theme: { color, breakpoint } }) => css`
    background: ${color.lightPrimaryColor};
    border-radius: 50px;
    border: unset;
    display: block;
    padding: 20px 30px;
    color: ${color.white};
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 0.2em;

    position: relative;
    text-align: center;
    text-decoration: none;
    transition: background 0.5s linear;
    &:hover {
      background: ${color.primaryColor};
    }
    @media (max-width: ${breakpoint.xs}) {
      font-size: 15px;
    }
  `
);

export const ButtonWrapper = styled.a`
  text-decoration: none;
  margin: 60px auto;
`;
