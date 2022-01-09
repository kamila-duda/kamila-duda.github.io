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

export const StyledLine = styled.p`
  font-weight: bold;
  text-align: center;
  margin: 60px auto;
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    font-size: 15px;
  }
`;

export const Description = styled.p`
  color: ${({ theme }) => theme.color.defaultFontColor};
`;
