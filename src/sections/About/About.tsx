import React from "react";
import { SectionTitle } from "@components/_universal/SectionTitle/SectionTitle";
import { Container } from "@components/Container.styled";
import { Button } from "@components/_universal/Button/Button";
import { Skills } from "@components/_universal/Skills/Skills";
import { technologies } from "@shared/data/technologies";
import { Spacer } from "@components/Spacer.styled";

export const About = () => {
  return (
    <Container backgroundColor="#25293E" variant="fluid">
      <Container variant="normal">
        <SectionTitle sectionTitle="My skills" color="#FFFFFF" />
        <Skills technologies={technologies} variant="dark" />
        <Spacer height={50} />
        <Button text="More about me" link="/About" />
      </Container>
    </Container>
  );
};
