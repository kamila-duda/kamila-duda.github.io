import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faHome } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { StyledIconWrapper, StyledLink } from "./Socials.styled";

export const Socials = () => {
  return (
    <StyledIconWrapper>
      <StyledLink
        href="https://www.linkedin.com/in/kamila-duda"
        target="_blank"
      >
        <FontAwesomeIcon icon={faLinkedinIn} />
      </StyledLink>
      <StyledLink href="https://github.com/kamila-duda" target="_blank">
        <FontAwesomeIcon icon={faGithub} />
      </StyledLink>
    </StyledIconWrapper>
  );
};
