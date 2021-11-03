import { Decorator } from "@components/Decorator.styled";
import React from "react";
import { StyledTitle, StyledWrapper, StyledContentItem } from "./Skills.styled";

export interface SkillsProps {
  technologies: string[];
  variant: "dark" | "light";
}

export const Skills: React.FC<SkillsProps> = ({ technologies, variant }) => {
  return (
    <>
      <StyledTitle>
        Technology Stack for Web Application Development:
      </StyledTitle>
      <StyledWrapper>
        <Decorator
          right={0}
          top={150}
          width={150}
          height={100}
          color="#6423FF"
        />
        {technologies.map((technology) => (
          <StyledContentItem variant={variant}>{technology}</StyledContentItem>
        ))}
      </StyledWrapper>
      <StyledTitle>Working with databases:</StyledTitle>
      <StyledWrapper>
        <StyledContentItem variant={variant}>
          MySQL (the basic)
        </StyledContentItem>
      </StyledWrapper>
      <StyledTitle>Other:</StyledTitle>
      <StyledWrapper>
        <StyledContentItem variant={variant}>
          GIT, Github Pull Request &amp; Review
        </StyledContentItem>
        <StyledContentItem variant={variant}>Scrum</StyledContentItem>
        <StyledContentItem variant={variant}>Trello, Jira</StyledContentItem>
        <StyledContentItem variant={variant}>Markdown</StyledContentItem>
      </StyledWrapper>
    </>
  );
};
