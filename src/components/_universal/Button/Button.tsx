import { ButtonWrapper, StyledButton } from "./Button.styled";
import Link from "next/link";

interface ButtonProps {
  text: string;
  link: string;
  isExternal?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ text, link, isExternal }) => {
  return (
    <>
      {isExternal ? (
        <ButtonWrapper href={link} target="_blank">
          <StyledButton>{text}</StyledButton>
        </ButtonWrapper>
      ) : (
        <Link href={link}>
          <ButtonWrapper>
            <StyledButton>{text}</StyledButton>
          </ButtonWrapper>
        </Link>
      )}
    </>
  );
};
