import styled, { css } from "styled-components";

export interface SpacerProps {
  height: number;
}

export const Spacer = styled.div<SpacerProps>(
  ({ height }) => css`
    width: 100%;
    height: ${height}px;
  `
);
