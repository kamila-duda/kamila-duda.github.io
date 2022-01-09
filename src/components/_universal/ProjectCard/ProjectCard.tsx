import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faSearch } from "@fortawesome/free-solid-svg-icons";
import {
  StyledCardImage,
  StyledCard,
  StyledDetail,
  StyledTagContainer,
  StyledLink,
  StyledDetailsContainer,
  StyledName,
} from "./ProjectCard.styled";
import { ThemeContext } from "src/ThemeProvider";

export interface ProjectCardProps {
  link: string;
  code?: string;
  tags: string[];
  image: string;
  name: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  link,
  code,
  tags,
  image,
  name,
}) => {
  const { isDarkTheme } = useContext(ThemeContext);
  return (
    <StyledCard key={link} isDarkTheme={isDarkTheme}>
      <StyledTagContainer>
        {tags.map((tag) => (
          <StyledDetail key={tag}>{tag}</StyledDetail>
        ))}
      </StyledTagContainer>
      <StyledCardImage
        key={link}
        data-aos="fade"
        image={image}
      ></StyledCardImage>
      <StyledDetailsContainer>
        {code && (
          <StyledLink href={code} target="_blank">
            <FontAwesomeIcon icon={faCode} />
          </StyledLink>
        )}
        <StyledLink href={link} target="_blank">
          <FontAwesomeIcon icon={faSearch} />
        </StyledLink>
      </StyledDetailsContainer>
      <StyledName>{name}</StyledName>
    </StyledCard>
  );
};
