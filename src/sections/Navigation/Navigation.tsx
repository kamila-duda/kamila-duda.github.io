import React, { useState } from "react";
import {
  StyledNav,
  StyledNavList,
  StyledNavItem,
  StyledNavLink,
  StyledNavListMobile,
  StyledIcon,
  StyledIconWrapper,
  StyledLink,
} from "./Navigation.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const menuItems = [
  { name: "About me", link: "/AboutMe" },
  { name: "My projects", link: "/MyProjects" },
  { name: "Contact", link: "/Contact" },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyledNav>
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
      <StyledNavList>
        {menuItems.map((item, index) => (
          <StyledNavItem key={index}>
            <Link href={item.link}>
              <StyledNavLink>{item.name} </StyledNavLink>
            </Link>
          </StyledNavItem>
        ))}
      </StyledNavList>
      <StyledNavListMobile open={isOpen}>
        {menuItems.map((item, index) => (
          <StyledNavItem key={index}>
            <StyledNavLink
              key={index}
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              <Link href={item.link}>{item.name}</Link>
            </StyledNavLink>
          </StyledNavItem>
        ))}
        <StyledIcon onClick={() => setIsOpen(!isOpen)}>
          <FontAwesomeIcon icon={faCode} />
        </StyledIcon>
      </StyledNavListMobile>
    </StyledNav>
  );
};
