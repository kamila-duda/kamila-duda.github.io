import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext } from "react";

import { ThemeContext } from "src/ThemeProvider";
import { IconWrapper, Wrapper } from "./ToggleButton.styled";

const ToggleButton = () => {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext);
  return (
    <Wrapper onClick={toggleTheme}>
      <IconWrapper isDarkTheme={isDarkTheme}>
        <FontAwesomeIcon icon={isDarkTheme ? faMoon : faSun} />
      </IconWrapper>
    </Wrapper>
  );
};

export default ToggleButton;
