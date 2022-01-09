import styled, { css, keyframes } from "styled-components";

export const Wrapper = styled.button`
  z-index: 110;
  width: 70px;
  height: 40px;
  border-radius: 25px;
  border: 1px solid ${({ theme }) => theme.color.secondColor};
  position: relative;
  cursor: pointer;
`;

export const IconWrapper = styled.div<{
  isDarkTheme: boolean;
}>(
  ({ isDarkTheme, theme: { color } }) => css`
    position: absolute;
    font-size: 30px;
    color: ${color.toggleIcon};
    top: 4px;
    transform: ${isDarkTheme ? "translateX(26px)" : "translate(0px)"};
    transition-property: transform;
    transition-duration: 0.5s;
    transition-timing-function: ease-in-out;
  `
);
