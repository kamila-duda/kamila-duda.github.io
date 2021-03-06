import { motion } from "framer-motion";
import styled from "styled-components";

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
export const StyledImage = styled(motion.img)`
  position: relative;
  width: 68vh;
  height: 68vh;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 10px 10px 30px 0px ${({ theme }) => theme.color.primaryColor}24;
  @media (max-width: 1025px) {
    margin-top: 20px;
    width: 50vw;
    height: 50vw;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.s}) {
    margin-top: 0px;
    width: 70vw;
    height: 70vw;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    width: 80vw;
    height: 80vw;
  }
  @media (max-width: 325px) {
    margin-top: 20px;
  }
`;
