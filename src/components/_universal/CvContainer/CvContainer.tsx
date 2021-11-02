import React from "react";
import {
  StyledContainer,
  StyledLink,
  StyledFontAwesomeIcon,
  StyledParagraph,
} from "./CvContainer.styled";
import { faFilePdf } from "@fortawesome/free-regular-svg-icons";

export interface CvContainerProps {
  variant: "dark" | "light";
}

export const CvContainer: React.FC<CvContainerProps> = ({ variant }) => {
  return (
    <StyledContainer variant={variant}>
      <StyledParagraph>Feel free to download my CV</StyledParagraph>
      <StyledLink href="@public/files/Kamila Duda_CV_ANG.pdf" download>
        <StyledFontAwesomeIcon icon={faFilePdf} />
        English CV
      </StyledLink>
      <StyledLink href="@public/files/Kamila Duda_CV_PL.pdf" download>
        <StyledFontAwesomeIcon icon={faFilePdf} />
        Polish CV
      </StyledLink>
    </StyledContainer>
  );
};
