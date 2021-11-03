import { Decorator } from "@components/Decorator.styled";
import React from "react";
import { Content, ContentItem, StyledLink, Title } from "./Education.styled";

export const Education = () => {
  return (
    <>
      <Title>Education</Title>
      <Content>
        <Decorator
          left={-100}
          top={-250}
          width={150}
          height={150}
          color="#CF5FE4"
        />
        <ContentItem>
          2010-2015: <br />
          Czestochowa University of Technology
          <br /> PhD studies, Faculty Of Production Engineering And Materials
          Technology, Major: Foundry.
        </ContentItem>
        <ContentItem>
          2009-2010: <br />
          Silesian University of Technology
          <br /> Masters degree, Faculty: Materials Science and Metallurgy,
          Major: Management and Production Engineering, Specialty: Health and
          Safety.
        </ContentItem>
        <ContentItem>
          2005-2009:
          <br />
          Czestochowa University of Technology
          <br /> Engineer degree, Faculty Of Production Engineering And
          Materials Technology, Major: Management and Production Engineering,
          Specialization: Foundry Production Engineering.
        </ContentItem>
      </Content>
    </>
  );
};
