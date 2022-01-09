import { Container } from "@components/Container.styled";
import styled from "styled-components";

export const StyledContainer = styled(Container)`
  min-height: calc(100vh - 63px);
  width: 100%;
`;

export const Text = styled.p`
  font-size: 28px;
  color: ${({ theme }) => theme.color.defaultFontColor};
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 50px;
`;
