import styled, { css } from "styled-components";

export const Input = styled.input<{
  isError?: boolean;
}>(
  ({ theme: { color }, isError }) => css`
    padding: 12px 16px;
    margin-bottom: ${isError ? "6px" : "0"};
    outline: none;
    line-height: 28px;
    width: 100%;
    &::placeholder {
      color: gray;
    }
    ::-ms-input-placeholder {
      color: gray;
    }
    &:active,
    &:focus {
      border-color: #cf5fe3;
    }
  `
);

export const InputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
