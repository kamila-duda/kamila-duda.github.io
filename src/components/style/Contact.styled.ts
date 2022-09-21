import { Container } from "@components/Container.styled";
import styled from "styled-components";

export const StyledContainer = styled(Container)`
  min-height: calc(100vh - 63px);
  width: 100%;
  align-items: center;
`;

export const Text = styled.p`
  font-size: 28px;
  color: ${({ theme }) => theme.color.defaultFontColor};
  margin: 0 0 30px;
  width: 100%;
  max-width: 600px;
`;

export const CenterText = styled(Text)`
  text-align: center;
  margin: 30px 0;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 50px;
`;
