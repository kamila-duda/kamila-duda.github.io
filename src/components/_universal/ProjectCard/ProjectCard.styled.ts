import styled, { css } from "styled-components";

export const StyledDetailsContainer = styled.p`
  position: absolute;
  display: none;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  margin: 0;
  border-radius: 15px;
  text-transform: uppercase;
  background: #00000038;
  cursor: pointer;
  justify-content: center;
  align-items: center;
`;

export const StyledCardImage = styled.div<{ image: string }>(
  ({ image, theme: { color, breakpoint } }) => css`
    position: relative;
    height: 200px;
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    color: ${color.white};
    text-transform: uppercase;
    border-radius: 15px;
    background-color: rgba(0, 0, 0, 30%);
    transition: 1s;
    &::after {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      border-radius: 12px;
      background-image: url(${image});
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }

    @media (max-width: ${breakpoint.xs}) {
      font-size: 13px;
    }
  `
);

export const StyledCard = styled.div`
  position: relative;
  width: 100%;
  text-align: center;
  margin: 8px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.color.white};
  box-shadow: 0px 0px 25px 0px #e4e4e4;
  &:hover {
    ${StyledDetailsContainer} {
      display: flex;
    }
    ${StyledCardImage} {
      filter: blur(2px);
    }
  }
`;

export const Info = styled.span`
  position: absolute;
  bottom: 30%;
  width: 100%;
  background: ${({ theme }) => theme.color.white};
`;

export const StyledLink = styled.a`
  align-items: center;
  border-radius: 50%;
  color: ${({ theme }) => theme.color.white};
  cursor: pointer;
  display: flex;
  font-size: 56px;
  font-weight: bold;
  height: 100px;
  justify-content: center;
  text-align: center;
  text-decoration: none;
  transition: transform 1s;
  width: 100px;
  &:hover {
    color: ${({ theme }) => theme.color.primaryColor};
  }
`;

export const StyledTagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: center;
  padding: 10px;
`;

export const StyledDetail = styled.span`
  position: relative;
  font-size: 14px;
  padding: 5px;
  margin: 2px;
  text-align: center;
  color: ${({ theme }) => theme.color.secondColor};
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    padding: 2px;
    margin: 5px;
  }
  &::after {
    position: absolute;
    content: "/";
    margin: 2px;
    color: ${({ theme }) => theme.color.lighterPrimaryColor};
    top: 5px;
    right: -5px;
    height: 100%;
    @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
      top: 0;
      right: -10px;
    }
  }
  :last-of-type {
    &::after {
      display: none;
    }
  }
`;

export const StyledName = styled.h4`
  text-transform: capitalize;
`;
