import styled, { css } from "styled-components";

export const Title = styled.h1(
  ({ theme: { color } }) => css`
    font-size: 36px;
    color: ${color.primaryColor};
    letter-spacing: 0.1em;
  `
);

export const Wrapper = styled.header`
  padding: 150px 0px;
  width: 100%;
`;
