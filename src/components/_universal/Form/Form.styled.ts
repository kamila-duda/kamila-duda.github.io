import styled, { css } from "styled-components";

export const FormWrapper = styled.form`
  align-items: center;
  display: grid;
  grid-gap: 24px;
  max-width: 600px;
  width: 100%;
`;

export const Button = styled.input(
  ({ theme: { color } }) => css`
    padding: 20px 30px;
    width: 100%;
    cursor: pointer;
    background-color: ${color.lightPrimaryColor};
    margin: 0 auto;
    color: ${color.white};
    font-size: 18px;
    border-radius: 25px;
    border: none;
  `
);
