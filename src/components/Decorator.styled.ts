import styled, { css } from "styled-components";

export const Decorator = styled.div<{
  left?: number;
  right?: number;
  top: number;
  width: number;
  height: number;
  color: string;
}>(
  ({ left, top, right, width, height, color }) => css`
    position: absolute;
    width: ${width}px;
    height: ${height}px;
    right: ${right}px;
    left: ${left}px;
    top: ${top}px;
    border-radius: 50%;
    background: ${color};
    filter: blur(120px);
    z-index: -1;
  `
);
