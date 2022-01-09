import React from "react";
import { Variants } from "framer-motion";
import {
  StyledWrapperIcons,
  StyledFontAwesomeIcon,
  StyledIcon,
  ImageIcon,
} from "./IconsContainer.styled";
import {
  faHtml5,
  faCss3Alt,
  faSass,
  faBootstrap,
  faJsSquare,
  faReact,
  faGitAlt,
} from "@fortawesome/free-brands-svg-icons";
import typescript from "@public/images/typescript.png";
import apollo from "@public/images/apollo-graphql.png";
import nextjs from "@public/images/nextjs.png";

const container = (): Variants => ({
  hidden: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  visible: {
    transition: { delayChildren: 1.3, staggerChildren: 0.2 },
  },
});

const item = (): Variants => ({
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
});

export const IconsContainer = () => {
  const icons = [faReact, faJsSquare, faCss3Alt, faBootstrap, faGitAlt];

  return (
    <StyledWrapperIcons
      variants={container()}
      initial="hidden"
      animate="visible"
    >
      <StyledIcon variants={item()}>
        <ImageIcon src={typescript} />
      </StyledIcon>

      <StyledIcon variants={item()}>
        <ImageIcon src={nextjs} />
      </StyledIcon>
      {icons.map((icon) => (
        <StyledIcon key={icon.iconName} variants={item()}>
          <StyledFontAwesomeIcon icon={icon} />
        </StyledIcon>
      ))}
      <StyledIcon variants={item()}>
        <ImageIcon src={apollo} />
      </StyledIcon>
    </StyledWrapperIcons>
  );
};
