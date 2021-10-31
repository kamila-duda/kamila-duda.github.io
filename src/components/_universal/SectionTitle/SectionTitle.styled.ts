import styled, { css } from "styled-components";
import { SectionTitleProps } from "./SectionTitle";

export const StyledSectionTitle = styled.h2<Pick<SectionTitleProps, "color">>(
  ({ color, theme: { breakpoint } }) => css`
    margin: 30px auto 60px;
    padding-bottom: 10px;
    color: ${color};
    letter-spacing: 0.2em;
    font-size: 28px;
    border-bottom: 1px solid ${color};
    text-transform: uppercase;
    @media (max-width: ${breakpoint.s}) {
      font-size: 20px;
    }
  `
);
