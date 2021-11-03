import { Hero } from "@components/_universal/Hero/Hero";
import { StyledContainer } from "@components/style/About.styled";
import React from "react";
import { Skills } from "@components/_universal/Skills/Skills";
import { technologies } from "@shared/data/technologies";
import { TypingText } from "@components/_universal/TypingText/TypingText";
import { Spacer } from "@components/Spacer.styled";
import { Experience } from "@sections/Experience/Experience";
import { Education } from "@sections/Education/Education";

export const About = () => {
  return (
    <StyledContainer variant="normal">
      <Hero title="About me" />
      <TypingText text="I decided to change my sector to programming. I started learning HTML, CSS, and JavaScript. After learning Bootstrap, my first page was created. Every day I systematically expand my knowledge by reading books, blogs, and attempting online courses. In my portfolio, I have websites, web applications downloading data from API, games, and a group project." />
      <Experience />
      <Skills technologies={technologies} variant="light" />
      <Spacer height={70} />
      <Education />
      <Spacer height={80} />
    </StyledContainer>
  );
};

export default About;
