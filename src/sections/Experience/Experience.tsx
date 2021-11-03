import React from "react";
import { Content, ContentItem, StyledLink, Title } from "./Experience.styled";

export const Experience = () => {
  return (
    <>
      <Title>Experience</Title>
      <Content>
        <ContentItem>
          march 2021 - now:
          <br />
          <StyledLink href="https://devanddeliver.com/" target="_blank">
            Dev and Deliver
          </StyledLink>{" "}
          as a Junior Front-End Developer
        </ContentItem>
      </Content>
    </>
  );
};
