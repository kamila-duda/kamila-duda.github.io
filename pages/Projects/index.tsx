import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faSearch } from "@fortawesome/free-solid-svg-icons";
import {
  StyledCardImage,
  StyledCategoryTitle,
  StyledLink,
  StyledDetail,
  StyledArticle,
  StyledGithubLink,
  StyledTextContainer,
  StyledProjectsContainer,
  StyledCard,
  StyledLine,
  StyledTagContainer,
  StyledName,
  StyledDetailsContainer,
} from "./index.styled";
import { projects } from "./projectsData";
import { Container } from "@components/Container.styled";
import { SectionTitle } from "@components/_universal/SectionTitle/SectionTitle";

const Projects = () => {
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
                <StyledCard key={item.link}>
                  <StyledTagContainer>
                    {item.tags.map((tag) => (
                      <StyledDetail key={tag}>{tag}</StyledDetail>
                    ))}
                  </StyledTagContainer>
                  <StyledCardImage
                    key={item.link}
                    data-aos="fade"
                    image={item.image}
                  ></StyledCardImage>
                  <StyledDetailsContainer>
                    <StyledLink href={item.code} target="_blank">
                      <FontAwesomeIcon icon={faCode} />
                    </StyledLink>
                    <StyledLink href={item.link} target="_blank">
                      <FontAwesomeIcon icon={faSearch} />
                    </StyledLink>
                  </StyledDetailsContainer>
                  <StyledName>{item.name}</StyledName>
                </StyledCard>
              ))}
            </StyledProjectsContainer>
          </StyledArticle>
        ))}
        <StyledLine>
          For more projects, please visit my github page:{" "}
          <StyledGithubLink
            href="https://github.com/kamila-duda"
            target="_blank"
            github
          >
            "https://github.com/kamila-duda"
          </StyledGithubLink>
        </StyledLine>
      </Container>
    </Container>
  );
};

export default Projects;
