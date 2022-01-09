import React, { useContext } from "react";
import { StyledProjectsContainer } from "@components/style/Projects.styled";
import { projects } from "@shared/data/projectsData";
import { Container } from "@components/Container.styled";
import { ProjectCard } from "@components/_universal/ProjectCard/ProjectCard";
import { Button } from "@components/_universal/Button/Button";
import { Hero } from "@components/_universal/Hero/Hero";
import { ThemeContext } from "src/ThemeProvider";

const Projects = () => {
  const { isDarkTheme } = useContext(ThemeContext);
  return (
    <Container
      backgroundColor={isDarkTheme ? "#101223" : "#fefefe"}
      variant="fluid"
    >
      <Container variant="normal">
        <Hero title="My projects" />
        {projects.map((category) => (
          <StyledProjectsContainer>
            {category.items.map((item) => (
              <ProjectCard {...item} />
            ))}
          </StyledProjectsContainer>
        ))}
        <Button
          text="Visit my github"
          link="https://github.com/kamila-duda"
          isExternal
        />
      </Container>
    </Container>
  );
};

export default Projects;
