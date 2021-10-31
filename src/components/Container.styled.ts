import styled, { css } from "styled-components";

export interface ContainerProps {
  backgroundColor?: string;
  variant: "fluid" | "normal";
}

export const Container = styled.div<ContainerProps>(
  ({ backgroundColor, variant, theme: { breakpoint } }) => css`
    position: relative;
    display: flex;
    @media (max-width: ${breakpoint.s}) {
      border-radius: 25px 25px 0% 0%;
    }
    ${variant === "fluid" &&
    css`
      padding-bottom: 100px;
      width: 100%;
      background: ${backgroundColor};
      :before {
        content: "";
        position: absolute;
        width: 100%;
        height: 40px;
        top: -38px;
        left: 0;
        border-radius: 70px 70px 0% 0%;
        background: ${backgroundColor};
      }
    `}

    ${variant === "normal" &&
    css`
      margin: 0 auto;
      max-width: 1140px;
      flex-direction: column;
      padding: 20px;
    `}
  `
);
