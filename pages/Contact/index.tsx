import React, { useContext } from "react";
import { Hero } from "@components/_universal/Hero/Hero";
import { StyledLink } from "@sections/Contact/Contact.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import {
  Text,
  Wrapper,
  StyledContainer,
  CenterText,
} from "@components/style/Contact.styled";
import { ThemeContext } from "src/ThemeProvider";
import { Container } from "@components/Container.styled";
import { Form } from "@components/_universal/Form/Form";

const Contact = () => {
  const { isDarkTheme } = useContext(ThemeContext);
  return (
    <Container
      variant="fluid"
      backgroundColor={isDarkTheme ? "#101223" : "#fefefe"}
    >
      <StyledContainer variant="normal">
        <Hero title="Contact" />
        <Text>
          Let's stay in touch <br />
          You can contact with me by:
        </Text>
        <Form />
        <Wrapper>
          <CenterText>Or find me on:</CenterText>
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
    </Container>
  );
};

export default Contact;
