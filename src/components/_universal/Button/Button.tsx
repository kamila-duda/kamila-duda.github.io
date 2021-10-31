import { ButtonWrapper, StyledButton } from "./Button.styled";
import Link from "next/link";

interface ButtonProps {
  text: string;
  link: string;
}

export const Button: React.FC<ButtonProps> = ({ text, link }) => {
  return (
    <Link href={link}>
      <ButtonWrapper>
        <StyledButton>{text}</StyledButton>
      </ButtonWrapper>
    </Link>
  );
};
