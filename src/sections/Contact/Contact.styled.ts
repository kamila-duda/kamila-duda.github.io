import { Container } from "@components/Container.styled";
import styled from "styled-components";

export const StyledLine = styled.p`
  width: 100%;
  margin: 0;
  font-size: 18px;
  color: ${({ theme }) => theme.color.white};
  text-align: center;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 50px 50px 0px;
`;

export const StyledContainer = styled(Container)`
  align-items: center;
`;

export const StyledLink = styled.a`
  font-size: 36px;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  margin: 20px;
  color: ${({ theme }) => theme.color.white};
  border-radius: 50%;
  background: linear-gradient(
    330deg,
    ${({ theme }) => theme.color.primaryColor} 40%,
    ${({ theme }) => theme.color.lightPrimaryColor} 100%
  );
  &:hover {
    border: 3px solid ${({ theme }) => theme.color.white};
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.s}) {
    font-size: 28px;
    width: 50px;
    height: 50px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    font-size: 18px;
    width: 40px;
    height: 40px;
    margin: 10px;
  }
`;
export const StyledImage = styled.img`
  position: relative;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin: 40px 0;
  object-fit: cover;
`;
