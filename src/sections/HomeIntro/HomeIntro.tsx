import React, { useRef } from "react";
import {
  StyledImage,
  StyledText,
  StyledColoredText,
  StyledContainer,
  Decorator,
  ImageWrapper,
  Decoration,
  Wrapper,
} from "./HomeIntro.styled";
import { IconsContainer } from "@components/_universal/IconsContainer/IconsContainer";
import profile from "@public/images/me.jpg";
import { Container } from "@components/Container.styled";
import { useSpring, useTransform, useViewportScroll } from "framer-motion";

export const HomeIntro = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useViewportScroll();
  const yRange = useTransform(scrollY, [0, 100], [0, -100]);
  const transformY = useSpring(yRange, { stiffness: 300, damping: 80 });
  const parallaxStyle = {
    style: {
      height: `calc(100% + 100px)`,
      y: transformY,
    },
  };
  return (
    <Container variant="fluid">
      <Decorator />
      <StyledContainer variant="normal">
        <div>
          <StyledColoredText
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 0.5,
            }}
          >
            Hello world!
          </StyledColoredText>
          <StyledText
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
              delay: 1.1,
            }}
          >
            I am Kamila <br />
            a passionate
            <br />
            Front-End Developer
          </StyledText>
          <IconsContainer />
        </div>
        <Wrapper>
          <ImageWrapper ref={ref}>
            <StyledImage src={profile} alt="Autor photo" {...parallaxStyle} />
          </ImageWrapper>
          <Decoration variant="pink" />
          <Decoration variant="purple" />
        </Wrapper>
      </StyledContainer>
    </Container>
  );
};
