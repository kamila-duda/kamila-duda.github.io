import React from "react";
import { Hero } from "@components/_universal/Hero/Hero";
import { StyledLink } from "@sections/Contact/Contact.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { Text, Wrapper, StyledContainer } from "./index.styled";

const Contact = () => {
  return (
    <StyledContainer variant="normal">
      <Hero title="Contact" />
      <Text>
        Let's stay in touch <br />
        You can contact with me by:
      </Text>
      <Wrapper>
        <StyledLink href="mailto: kamiladuda@int.pl">
          <FontAwesomeIcon icon={faAt} />
        </StyledLink>
        <StyledLink
          href="https://www.linkedin.com/in/kamila-duda"
          target="_blank"
        >
          <FontAwesomeIcon icon={faLinkedinIn} />
        </StyledLink>
        <StyledLink href="https://github.com/kamila-duda" target="_blank">
          <FontAwesomeIcon icon={faGithub} />
        </StyledLink>
      </Wrapper>
    </StyledContainer>
  );
};

export default Contact;
