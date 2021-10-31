import styled, { css } from "styled-components";

export const StyledArticle = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;

export const StyledTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 80%;
  padding: 45px 0;
  font-size: 18px;
  @media (max-width: ${({ theme }) => theme.breakpoint.s}) {
    max-width: 100%;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.another}) {
    font-size: 16px;
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    font-size: 14px;
  }
`;

export const StyledCategoryTitle = styled.h3`
  color: ${({ theme }) => theme.color.primaryColor};
  text-transform: uppercase;
  font-size: 16px;
`;

export const StyledProjectsContainer = styled.div`
  position: relative;
  display: grid;
  height: auto;
  grid-gap: 24px;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  @media (max-width: ${({ theme }) => theme.breakpoint.s}) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const StyledDetailsContainer = styled.p`
  position: absolute;
  display: none;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  margin: 0;
  background: linear-gradient(
    329deg,
    rgba(100, 35, 255, 0.6731734930300245) 40%,
    rgba(207, 95, 228, 0.6423611681000525) 100%
  );
  border-radius: 15px;
  text-transform: uppercase;
  cursor: pointer;
`;

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
      display: block;
    }
  }
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
    &::after {
      content: "";
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      border-radius: 12px;
      ${image &&
      css`
        background-image: url(${image});
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
      `}
    }

    @media (max-width: ${breakpoint.xs}) {
      font-size: 13px;
    }
  `
);

export const StyledImage = styled.img`
  display: block;
  width: 90%;
  object-fit: contain;
  border-radius: 50px;
`;

export const StyledGithubLink = styled.a<{ github?: boolean }>(
  ({ github, theme: { color, breakpoint } }) => css`
    margin: 5px 15px;
    text-decoration: none;
    transition: transform 1s;
    color: ${color.white};
    position: relative;
    ${github &&
    css`
      background: linear-gradient(
        330deg,
        ${color.primaryColor} 40%,
        ${color.lightPrimaryColor} 100%
      );
      padding: 20px;
      margin: 30px 0;
      border: 3px solid ${color.white};
      border-radius: 50px;
      display: block;
      &:hover {
        background: ${color.primaryColor};
      }
    `}
    @media (max-width: ${breakpoint.xs}) {
      font-size: 15px;
    }
  `
);

export const StyledLink = styled(StyledGithubLink)`
  width: 100px;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: ${({ theme }) => theme.color.white};
  font-size: 56px;
  position: absolute;
  left: 50%;
  top: 35%;
  :first-of-type {
    left: 20%;
  }
  &:hover {
    transform: scale(1.2);
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

export const StyledLine = styled.p`
  font-weight: bold;
  text-align: center;
  margin: 60px auto;
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    font-size: 15px;
  }
`;

export const StyledName = styled.h4`
  text-transform: capitalize;
`;
