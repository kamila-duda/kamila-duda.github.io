import React from "react";
import { Input, InputWrapper } from "./TextInput.styled";
import {
  Control,
  FieldError,
  FieldErrors,
  useController,
} from "react-hook-form";
import { ErrorText, Label } from "@components/CommonStyled";

interface TextInputProps {
  control: Control;
  errors?: FieldError | FieldErrors;
  label?: string;
  name: string;
  placeholder?: string;
  type: "text" | "email";
}

export const TextInput = ({
  control,
  errors,
  label,
  name,
  placeholder,
  type,
}: TextInputProps) => {
  const {
    field: { onChange, value },
  } = useController({
    name,
    control,
  });

  return (
    <InputWrapper>
      {label && <Label htmlFor={name}>{label}</Label>}
      <Input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder && placeholder}
        value={value}
        onChange={onChange}
        isError={!!errors}
      />
      {errors && <ErrorText>{errors.message}</ErrorText>}
    </InputWrapper>
  );
};
