import React, { useState } from "react";
import {
  StyledNav,
  StyledNavList,
  StyledNavItem,
  StyledNavLink,
  StyledNavListMobile,
  StyledIcon,
  HomeIcon,
} from "./Navigation.styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faHome } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { Analytics } from "@shared/analytics";

const menuItems = [
  { name: "About me", link: "/About" },
  { name: "My projects", link: "/Projects" },
  { name: "Contact", link: "/Contact" },
];

interface customWindow extends Window {
  gtag?: any;
}
declare const window: customWindow;

export const Navigation = () => {
  const { logEvent } = Analytics();
  const [isOpen, setIsOpen] = useState(false);

  const handleGaEvent = (nav: string) => {
    logEvent("Navigation", "click", `${nav} clicked`);
  };

  const gtagEvent = (ACTION: string, category: string, label: string) => {
    window.gtag("event", ACTION, {
      event_category: category,
      event_label: label,
    });
  };

  return (
    <StyledNav>
      <Link href="/">
        <HomeIcon onClick={() => setIsOpen(false)}>
          <FontAwesomeIcon icon={faHome} />
        </HomeIcon>
      </Link>
      <StyledNavList>
        {menuItems.map((item, index) => (
          <StyledNavItem
            key={index}
            onClick={() => gtagEvent("click", "nav", item.name)}
          >
            <Link href={item.link}>
              <StyledNavLink>{item.name} </StyledNavLink>
            </Link>
          </StyledNavItem>
        ))}
      </StyledNavList>
      <StyledNavListMobile open={isOpen}>
        {menuItems.map((item, index) => (
          <StyledNavItem key={index} onClick={() => handleGaEvent(item.name)}>
            <Link href={item.link}>
              <StyledNavLink
                onClick={() => {
                  setIsOpen(!isOpen);
                }}
              >
                {item.name}
              </StyledNavLink>
            </Link>
          </StyledNavItem>
        ))}
        <StyledIcon onClick={() => setIsOpen(!isOpen)}>
          <FontAwesomeIcon icon={faCode} />
        </StyledIcon>
      </StyledNavListMobile>
    </StyledNav>
  );
};
