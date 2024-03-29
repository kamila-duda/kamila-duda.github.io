import React, { useContext, useRef } from "react";
import {
  StyledImage,
  StyledText,
  StyledColoredText,
  StyledContainer,
  ImageWrapper,
  Decoration,
  Wrapper,
  StyledContainerFluid,
} from "./HomeIntro.styled";
import { IconsContainer } from "@components/_universal/IconsContainer/IconsContainer";
import profile from "@public/images/profile-big.png";
import { useSpring, useTransform, useViewportScroll } from "framer-motion";
import { Decorator } from "@components/Decorator.styled";
import { ThemeContext } from "src/ThemeProvider";

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
  const { isDarkTheme } = useContext(ThemeContext);
  return (
    <StyledContainerFluid
      variant="fluid"
      backgroundColor={isDarkTheme ? "#101223" : "#fefefe"}
    >
      <Decorator left={0} top={0} width={150} height={100} color="#6423FF" />
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
    </StyledContainerFluid>
  );
};
