import React from "react";
import { StyledFooter, StyledText, StyledContainer } from "./Footer.styled";

export const Footer = () => {
  return (
    <StyledFooter>
      <StyledContainer backgroundColor="#CF5FE4" variant="fluid">
        <StyledText>Copyright 2022 © All rights reserved.</StyledText>
        <StyledText>designed by Kamila Duda</StyledText>
      </StyledContainer>
    </StyledFooter>
  );
};
