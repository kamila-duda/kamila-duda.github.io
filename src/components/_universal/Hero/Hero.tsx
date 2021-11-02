import { Decorator } from "@components/Decorator.styled";
import React from "react";
import { Title, Wrapper } from "./Hero.styled";

interface HeroProps {
  title: string;
}

export const Hero: React.FC<HeroProps> = ({ title }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Decorator left={0} top={0} width={150} height={100} color="#6423FF" />
      <Decorator right={100} top={0} width={200} height={200} color="#CF5FE4" />
    </Wrapper>
  );
};
