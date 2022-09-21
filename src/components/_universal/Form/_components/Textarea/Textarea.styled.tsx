import styled, { css } from "styled-components";

export const TextArea = styled.textarea<{
  isError?: boolean;
}>(
  ({ theme: { colors }, isError }) => css`
    background: white;
    border: 1px solid gray;
    line-height: 28px;
    margin-bottom: ${isError ? "6px" : "0"};
    outline: none;
    padding: 12px 16px;
    resize: vertical;
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

export const TextareaWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
