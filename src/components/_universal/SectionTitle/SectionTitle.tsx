import React from "react";
import { StyledSectionTitle } from "./SectionTitle.styled";

export interface SectionTitleProps {
  sectionTitle: string;
  color?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  sectionTitle,
  color,
}) => {
  return <StyledSectionTitle color={color}>{sectionTitle}</StyledSectionTitle>;
};
