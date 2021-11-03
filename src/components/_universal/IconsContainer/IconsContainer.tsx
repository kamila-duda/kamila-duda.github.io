import React from "react";
import { Variants } from "framer-motion";
import {
  StyledWrapperIcons,
  StyledFontAwesomeIcon,
  StyledIcon,
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
  const icons = [
    faHtml5,
    faCss3Alt,
    faSass,
    faBootstrap,
    faJsSquare,
    faReact,
    faGitAlt,
  ];

  return (
    <StyledWrapperIcons
      variants={container()}
      initial="hidden"
      animate="visible"
    >
      {icons.map((icon) => (
        <StyledIcon key={icon.iconName} variants={item()}>
          <StyledFontAwesomeIcon icon={icon} />
        </StyledIcon>
      ))}
    </StyledWrapperIcons>
  );
};
