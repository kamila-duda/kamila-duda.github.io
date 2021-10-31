import React from "react";
import {
  StyledCategoryTitle,
  StyledArticle,
  StyledTextContainer,
  StyledProjectsContainer,
} from "./Projects.styled";
import { projects } from "./mainProjectsData";
import { SectionTitle } from "@components/_universal/SectionTitle/SectionTitle";
import { Container } from "@components/Container.styled";
import { Button } from "@components/_universal/Button/Button";
import { ProjectCard } from "@components/_universal/ProjectCard/ProjectCard";

export const Projects = () => {
  return (
    <Container backgroundColor="#FEFEFE" variant="fluid">
      <Container variant="normal">
        <SectionTitle sectionTitle="My projects" color="#6423FF" />
        {projects.map((category) => (
          <StyledArticle key={category.title}>
            <StyledTextContainer>
              <StyledCategoryTitle>
                {category.title} ({category.items.length}):
              </StyledCategoryTitle>
              <p>{category.description}</p>
            </StyledTextContainer>
            <StyledProjectsContainer>
              {category.items.map((item) => (
                <ProjectCard {...item} />
              ))}
            </StyledProjectsContainer>
          </StyledArticle>
        ))}
        <Button text="More projects" link="MyProjects" />
      </Container>
    </Container>
  );
};
