import React from "react";
import {
  StyledLine,
  StyledLink,
  StyledImage,
  Wrapper,
  StyledContainer,
} from "./Contact.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import profile from "@public/images/profile.jpeg";
import { Container } from "@components/Container.styled";
import { SectionTitle } from "@components/_universal/SectionTitle/SectionTitle";
import { Form } from "@components/_universal/Form/Form";

export const Contact = () => {
  return (
    <Container backgroundColor="#25293E" variant="fluid">
      <StyledContainer variant="normal">
        <SectionTitle sectionTitle="Contact" color="#FFFFFF" />
        <StyledImage src={profile} />
        <StyledLine>
          Let's stay in touch <br />
          You can contact with me by:
        </StyledLine>
        <Form />
        <Wrapper>
          <StyledLine>Or find me on:</StyledLine>
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
