import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import styled from "styled-components";

export const StyledWrapperIcons = styled(motion.div)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 30px;
`;
export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
  transition: transform 1s;
  font-size: 30px;
  color: ${({ theme }) => theme.color.white};
  @media (max-width: ${({ theme }) => theme.breakpoint.s}) {
    font-size: 20px;
  }
`;
export const StyledIcon = styled(motion.div)`
  width: 50px;
  height: 50px;
  padding: 5px;
  margin: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(100, 35, 255);
  background: linear-gradient(
    330deg,
    ${({ theme }) => theme.color.primaryColor} 40%,
    ${({ theme }) => theme.color.lightPrimaryColor} 100%
  );
  background-color: ${({ theme }) => theme.color.primaryColor};
  border-radius: 50%;
  @media (max-width: ${({ theme }) => theme.breakpoint.s}) {
    width: 40px;
    height: 40px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    width: 30px;
    height: 30px;
  }
`;
