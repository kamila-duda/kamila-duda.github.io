import styled, { css } from "styled-components";

export const StyledIconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px;
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 3;
  padding: 10px;
  @media (max-width: ${({ theme }) => theme.breakpoint.s}) {
    distplay: none;
  }
`;
export const StyledLink = styled.a`
  font-size: 20px;
  cursor: pointer;
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  margin: 5px 0;
  color: ${({ theme }) => theme.color.primaryColor};
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 50%;
  border: 1px solid ${({ theme }) => theme.color.primaryColor};
  &:hover {
    color: ${({ theme }) => theme.color.white};
    background: linear-gradient(
      330deg,
      ${({ theme }) => theme.color.primaryColor} 40%,
      ${({ theme }) => theme.color.lightPrimaryColor} 100%
    );
    border: 3px solid ${({ theme }) => theme.color.white};
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.s}) {
    margin: 5px;
    width: 40px;
    height: 40px;
  }
`;
