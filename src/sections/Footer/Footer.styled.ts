import { Container } from "@components/Container.styled";
import styled from "styled-components";

export const StyledFooter = styled.footer``;

export const StyledContainer = styled(Container)`
  padding: 0px 40px 40px;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    justify-content: flex-start;
  }
`;

export const StyledWrapper = styled.div`
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    justify-content: flex-start;
  }
`;
export const StyledText = styled.p`
  padding: 5px 10px 0;
  font-size: 12px;
  letter-spacing: 2px;
  margin: 0;
  color: ${({ theme }) => theme.color.white};
  @media (max-width: ${({ theme }) => theme.breakpoint.xs}) {
    font-size: 10px;
  }
`;
