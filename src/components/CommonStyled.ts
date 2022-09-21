import styled, { css } from "styled-components";

export const ErrorText = styled.p`
  margin: 0;
  color: red;
  font-size: 12px;
  letter-spacing: 0.2px;
`;

export const Label = styled.label(
  ({ theme: { color } }) =>
    css`
      padding-bottom: 8px;
      line-height: 18px;
      color: ${color.defaultFontColor};
    `
);
