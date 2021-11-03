import React from "react";
import {
  StyledContainer,
  StyledLink,
  StyledFontAwesomeIcon,
  StyledParagraph,
} from "./CvContainer.styled";
import { faFilePdf } from "@fortawesome/free-regular-svg-icons";
import { Analytics } from "@shared/analytics";
import Pl from "@public/images/Kamila Duda_CV_PL.pdf";
import Ang from "@public/images/Kamila Duda_CV_ANG.pdf";

export interface CvContainerProps {
  variant: "dark" | "light";
}

export const CvContainer: React.FC<CvContainerProps> = ({ variant }) => {
  const { logEvent } = Analytics();

  const handleGaEvent = () => {
    logEvent("Cv", "click", "Cv clicked");
  };

  return (
    <StyledContainer variant={variant}>
      <StyledParagraph>Feel free to download my CV</StyledParagraph>
      <StyledLink href={Pl} download onClick={() => handleGaEvent()}>
        <StyledFontAwesomeIcon icon={faFilePdf} />
        English CV
      </StyledLink>
      <StyledLink href={Ang} download onClick={() => handleGaEvent()}>
        <StyledFontAwesomeIcon icon={faFilePdf} />
        Polish CV
      </StyledLink>
    </StyledContainer>
  );
};
