import styled from "styled-components";

export const StyledWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: ${({ theme }) => theme.breakpoint.s}) {
    order: 1;
    width: 100%;
  }
`;

export const StyledTitle = styled.h3`
  color: ${({ theme }) => theme.color.lighterPrimaryColor};
  letter-spacing: 0.2em;
  font-size: 20px;
  margin: 30px 0;
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    font-size: 18px;
  }
`;

export const StyledContentItem = styled.p`
  border-radius: 25px;
  border: 1px solid white;
  margin: 16px;
  padding: 16px 24px;
  font-size: 16px;
  color: ${({ theme }) => theme.color.darknestWhite};
  letter-spacing: 0.2em;
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    font-size: 15px;
    letter-spacing: 1px;
    padding: 12px 18px;
  }
`;
export const StyledDecorationItem = styled.span`
  display: block;
  font-size: 18px;
  padding-bottom: 5px;
  text-transform: uppercase;
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    font-size: 14px;
  }
`;
