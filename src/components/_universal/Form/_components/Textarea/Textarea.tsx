import React from "react";
import { TextArea, TextareaWrapper } from "./Textarea.styled";
import {
  Control,
  FieldError,
  FieldErrors,
  useController,
} from "react-hook-form";
import { ErrorText, Label } from "@components/CommonStyled";

interface TextareaProps {
  control: Control;
  errors?: FieldError | FieldErrors;
  label?: string;
  maxLength?: number;
  name: string;
  placeholder?: string;
}

export const Textarea = ({
  control,
  label,
  maxLength,
  name,
  placeholder,
  errors,
}: TextareaProps) => {
  const {
    field: { onChange, value },
  } = useController({
    name,
    control,
  });
  return (
    <TextareaWrapper>
      {label && <Label htmlFor={name}>{label}</Label>}
      <TextArea
        id={name}
        maxLength={maxLength ?? 300}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      ></TextArea>
      {errors && <ErrorText>{errors.message}</ErrorText>}
    </TextareaWrapper>
  );
};
