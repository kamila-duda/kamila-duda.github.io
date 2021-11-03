import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled, { css } from "styled-components";

export const StyledUpButton = styled.div(
  ({ theme: { color } }) => css`
    position: fixed;
    font-size: 15px;
    right: 40px;
    bottom: 40px;
    z-index: 100;
    text-align: center;
    cursor: pointer;
    color: ${color.primaryColor};
    animation: up 2s infinite linear;
    @keyframes up {
      0% {
        bottom: 40px;
        opacity: 1;
      }
      100% {
        bottom: 70px;
        opacity: 0;
      }
    }
  `
);
export const StyledText = styled.h3`
  margin: 0;
`;
export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  font-size: 80px;
  font-weight: 600;
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    font-size: 40px;
  }
`;
