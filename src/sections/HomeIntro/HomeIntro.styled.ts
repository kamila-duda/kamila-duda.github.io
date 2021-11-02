import { Container } from "@components/Container.styled";
import { motion } from "framer-motion";
import styled, { css } from "styled-components";

export const StyledContainer = styled(Container)`
  min-height: 100vh;
  display: grid;
  grid-gap: 60px;
  grid-template-columns: 1fr minmax(300px, 450px);
  grid-template-rows: minmax(300px, 450px);
  align-items: center;
  align-content: center;
  @media (max-width: ${({ theme }) => theme.breakpoint.s}) {
    grid-template-columns: 1fr;
    grid-template-rows: 50% 50%;
    grid-gap: 0;
  }
`;

export const StyledText = styled(motion.h1)`
  top: 200px;
  left: 300px;
  color: ${({ theme }) => theme.color.fontColor};
  font-size: 52px;
  font-weight: bold;
  margin: 0;
  line-height: 1.4;
  letter-spacing: 1px;
  @media (max-width: ${({ theme }) => theme.breakpoint.m}) {
    font-size: 48px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.s}) {
    font-size: 40px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    font-size: 24px;
  }
`;

export const StyledColoredText = styled(motion.h2)`
  color: ${({ theme }) => theme.color.lightPrimaryColor};
  font-size: 46px;
  margin-bottom: 5px;
  &::after {
    content: "_";
    position: absolute;
    animation: pulse 1s infinite;
    @keyframes pulse {
      from {
        transform: scale(0);
      }
      to {
        transform: scale(1);
      }
    }
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.m}) {
    font-size: 28px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.s}) {
    font-size: 18px;
  }
`;
export const StyledImage = styled(motion.img)(
  ({ theme: { breakpoint } }) => css`
    position: relative;
    width: 100%;
    object-fit: cover;

    @media (max-width: ${breakpoint.s}) {
    }
    @media (max-width: ${breakpoint.xs}) {
    }
  `
);

export const ImageWrapper = styled.div(
  ({ theme: { breakpoint } }) => css`
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-radius: 50%;
    @media (max-width: ${breakpoint.s}) {
      width: 400px;
      height: 400px;
      margin: auto;
    }
    @media (max-width: ${breakpoint.xs}) {
      width: 300px;
      height: 300px;
    }
  `
);

export const Decoration = styled.div<{ variant: "pink" | "purple" }>(
  ({ variant, theme: { color } }) => css`
    position: absolute;
    z-index: -1;
    border-radius: 50%;
    ${variant === "pink" &&
    css`
      background: ${color.lightPrimaryColor};
      filter: blur(80px);
      height: 60%;
      left: -15px;
      opacity: 0.5;
      top: 0%;
      width: 60%;
    `}
    ${variant === "purple" &&
    css`
      background: ${color.primaryColor};
      bottom: -15%;
      filter: blur(80px);
      height: 70%;
      opacity: 0.5;
      right: -10%;
      width: 70%;
    `}
  `
);

export const Wrapper = styled.div(
  ({ theme: { breakpoint } }) => css`
    position: relative;
    width: 100%;
    height: 100%;
    @media (max-width: ${breakpoint.s}) {
    }
    @media (max-width: ${breakpoint.xs}) {
    }
  `
);
