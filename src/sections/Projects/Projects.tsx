import React, { useContext } from "react";
import {
  StyledCategoryTitle,
  StyledArticle,
  StyledTextContainer,
  StyledProjectsContainer,
  Description,
} from "./Projects.styled";
import { projects } from "./mainProjectsData";
import { SectionTitle } from "@components/_universal/SectionTitle/SectionTitle";
import { Container } from "@components/Container.styled";
import { Button } from "@components/_universal/Button/Button";
import { ProjectCard } from "@components/_universal/ProjectCard/ProjectCard";
import { ThemeContext } from "src/ThemeProvider";

export const Projects = () => {
  const { isDarkTheme } = useContext(ThemeContext);
  return (
    <Container
      backgroundColor={isDarkTheme ? "#101223" : "#fefefe"}
      variant="fluid"
    >
      <Container variant="normal">
        <SectionTitle sectionTitle="My projects" color="#6423FF" />
        {projects.map((category) => (
          <StyledArticle key={category.title}>
            <StyledTextContainer>
              <StyledCategoryTitle>
                {category.title} ({category.items.length}):
              </StyledCategoryTitle>
              <Description>{category.description}</Description>
            </StyledTextContainer>
            <StyledProjectsContainer>
              {category.items.map((item) => (
                <ProjectCard {...item} />
              ))}
            </StyledProjectsContainer>
          </StyledArticle>
        ))}
        <Button text="More projects" link="/Projects" />
      </Container>
    </Container>
  );
};
