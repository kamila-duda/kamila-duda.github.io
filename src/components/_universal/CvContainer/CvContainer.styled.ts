import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled, { css } from "styled-components";
import { CvContainerProps } from "./CvContainer";

export const StyledParagraph = styled.p(
  ({ theme: { breakpoint } }) => css`
    width: 100%;
    padding-bottom: 10px;
    text-align: center;
    text-transform: uppercase;
    font-size: 18px;
    letter-spacing: 2px;
    @media (max-width: ${breakpoint.s}) {
      font-size: 16px;
    }
  `
);
export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)(
  ({ theme: { breakpoint } }) => css`
    font-size: 64px;
    font-weight: bold;
    transition: 0.5s ease-out;
  `
);
export const StyledLink = styled.a(
  ({ theme: { color, breakpoint } }) => css`
    font-size: 15px;
    margin: 5px;
    padding: 15px;
    display: grid;
    grid-gap: 16px;
    justify-items: center;
    text-decoration: none;
    transition: 0.5s ease-out;
    &:hover {
      color: ${color.lightPrimaryColor};
      ${StyledFontAwesomeIcon} {
        color: ${color.lightPrimaryColor};
      }
    }
    @media (max-width: ${breakpoint.xs}) {
      margin: 10px 5px;
      font-size: 12px;
      padding: 10px;
    }
  `
);

export const StyledContainer = styled.div<CvContainerProps>(
  ({ variant, theme: { breakpoint, color } }) => css`
    width: 100%;
    padding: 100px 10px 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    ${variant === "dark" &&
    css`
      ${StyledParagraph}, ${StyledLink} {
        color: ${color.darknestWhite};
      }
    `}
    ${variant === "light" &&
    css`
      ${StyledParagraph}, ${StyledLink} {
        color: ${color.colorFont};
      }
    `}
    @media (max-width: ${breakpoint.s}) {
      padding: 80px 10px 0px;
    }
  `
);
