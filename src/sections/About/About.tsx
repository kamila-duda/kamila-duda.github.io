import React from "react";
import { CvContainer } from "@components/_universal/CvContainer/CvContainer";
import { StyledTitle, StyledWrapper, StyledContentItem } from "./About.styled";
import { SectionTitle } from "@components/_universal/SectionTitle/SectionTitle";
import { Container } from "@components/Container.styled";
import { Button } from "@components/_universal/Button/Button";

export const About = () => {
  const technologies = [
    "HTML",
    "CSS",
    "SCSS",
    "JavaScript",
    "React",
    "React Router",
    "React Saga",
    "Redux Toolkit",
    "React Hooks",
    "TypeScript",
    "Next.js",
    "Vue.js",
    "Styled Components",
    "Bootstrap",
    "working with API",
  ];

  return (
    <Container backgroundColor="#25293E" variant="fluid">
      <Container variant="normal">
        <SectionTitle sectionTitle="My skills" color="#FFFFFF" />
        <StyledTitle>
          Technology Stack for Web Application Development:
        </StyledTitle>
        <StyledWrapper>
          {technologies.map((technology) => (
            <StyledContentItem>{technology}</StyledContentItem>
          ))}
        </StyledWrapper>
        <StyledTitle>Working with databases:</StyledTitle>
        <StyledWrapper>
          <StyledContentItem>MySQL (the basic)</StyledContentItem>
        </StyledWrapper>
        <StyledTitle>Other:</StyledTitle>
        <StyledWrapper>
          <StyledContentItem>
            GIT, Github Pull Request &amp; Review
          </StyledContentItem>
          <StyledContentItem>Scrum</StyledContentItem>
          <StyledContentItem>Trello, Jira</StyledContentItem>
          <StyledContentItem>Markdown</StyledContentItem>
        </StyledWrapper>
        <CvContainer />
        <Button text="More about me" link="/About" />
      </Container>
    </Container>
  );
};
