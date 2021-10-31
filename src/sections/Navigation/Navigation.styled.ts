import styled, { css } from "styled-components";

export const StyledNav = styled.nav`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0;
  margin: 0;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  z-index: 100;
  @media (max-width: ${({ theme }) => theme.breakpoint.another}) {
    background-color: ${({ theme }) => theme.color.white};
    border-radius: 0 0 25px 25px;
  }
`;
export const StyledIconWrapper = styled.div`
  display: flex;
  padding: 0px;
`;
export const StyledLink = styled.a`
  font-size: 20px;
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  margin: 10px;
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
export const StyledNavList = styled.ul`
  list-style-type: none;
  display: flex;
  margin: 0;
  padding: 10px;
  border-radius: 0 0 0 50px;
  background-color: ${({ theme }) => theme.color.white};
  @media (max-width: ${({ theme }) => theme.breakpoint.s}) {
    padding: 0;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.another}) {
    display: none;
  }
`;
export const StyledNavLink = styled.a<{ selected?: boolean }>(
  ({ selected, theme: { color } }) => css`
    cursor: pointer;
    text-decoration: none;
    text-transform: capitalize;
    color: ${color.primaryColor};
    position: relative;
    z-index: 1;
    transition: 1s;
  `
);

export const StyledNavItem = styled.li`
  position: relative;
  margin: 15px 30px;
  font-size: 16px;
  letter-spacing: 5px;
  text-align: center;
  @media (max-width: ${({ theme }) => theme.breakpoint.m}) {
    font-size: 12px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.another}) {
    font-size: 20px;
    margin: 50px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    margin: 40px;
    font-size: 18px;
  }
  :after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0%;
    height: 2px;
    background: ${({ theme }) => theme.color.lightPrimaryColor};
    transition: 1s;
    border-radius: 25px;
  }
  :hover {
    &:after {
      width: 100%;
    }
  }
`;
export const StyledIcon = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
  border: 1px solid ${({ theme }) => theme.color.primaryColor};
  border-radius: 50px;
  background-color: ${({ theme }) => theme.color.white};
  color: ${({ theme }) => theme.color.primaryColor};
  @media (max-width: ${({ theme }) => theme.breakpoint.s}) {
    width: 40px;
    height: 40px;
  }
`;
export const StyledNavListMobile = styled.ul<{ open: boolean }>(
  ({ open, theme: { breakpoint, color } }) => css`
    display: none;
    @media (max-width: ${breakpoint.another}) {
      list-style-type: none;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0;
      width: 100%;
      margin: -400px 0 0px;
      border-radius: 0 0 25px 25px;
      ${open &&
      css`
        margin: 0;
        background-color: ${color.white};
        ${StyledIcon} {
          border: 1px solid ${color.primaryColor};
          color: ${color.primaryColor};
        }
      `}
    }
  `
);
