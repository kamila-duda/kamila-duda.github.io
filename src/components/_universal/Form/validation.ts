import * as yup from "yup";

export const errorMessages = {
  INVALID_EMAIL_FORMAT: "Wrong format",
  REQUIRED: "Required",
  WITHOUT_NUMBER: "Use only letters",
};
const letters = /^[aA-zZ\s]+$/;
export const emailValidation = yup
  .string()
  .email(errorMessages.INVALID_EMAIL_FORMAT)
  .required(errorMessages.REQUIRED);

export const textValidation = yup
  .string()
  .required(errorMessages.REQUIRED)
  .matches(letters, errorMessages.WITHOUT_NUMBER);

export const messageValidation = yup.string().required(errorMessages.REQUIRED);

export const validation = yup.object().shape({
  from_name: textValidation,
  reply_to: emailValidation,
  message: messageValidation,
});
