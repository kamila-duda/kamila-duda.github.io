import React, { useState, useEffect } from "react";
import { Wrapper } from "./TypingTest.styled";

export interface TypingTextProps {
  text: string;
}

export const TypingText: React.FC<TypingTextProps> = ({ text }) => {
  const textToShow =
    "I decided to change my sector to programming. I started learning HTML, CSS, and JavaScript. After learning Bootstrap, my first page was created. Every day I systematically expand my knowledge by reading books, blogs, and attempting online courses. In my portfolio, I have websites, web applications downloading data from API, games, and a group project.";
  const [textTyping, setTextTyping] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (count < text.length) {
        setCount((count) => count + 1);
        setTextTyping((textTyping) => textTyping + text.charAt(count));
      }
    }, 5);

    return () => {
      clearInterval(timeoutId);
    };
  }, [count]);

  return <Wrapper>{textTyping}</Wrapper>;
};
