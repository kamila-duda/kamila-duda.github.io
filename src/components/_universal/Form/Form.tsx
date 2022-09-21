import { Button, FormWrapper } from "./Form.styled";
import { ErrorText } from "@components/CommonStyled";
import { FieldValues, useForm } from "react-hook-form";
import { Textarea } from "./_components/Textarea/Textarea";
import { TextInput } from "./_components/TextInput/TextInput";
import { validation } from "./validation";
import { yupResolver } from "@hookform/resolvers/yup";
import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Form = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FieldValues>({
    mode: "all",
    resolver: yupResolver(validation),
  });

  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [recaptha, setRecaptha] = useState<any>(null);
  const [recapthaError, setRecapthaError] = useState(false);

  const notifySuccess = () =>
    toast.success("Email was sent", {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const notifyError = () =>
    toast.error("Error occured. Try again.", {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const onSubmit = (data: FieldValues) => {
    if (!recaptha) {
      setRecapthaError(true);
      return;
    }
    const values = {
      from_name: data.from_name,
      message: data.message,
      reply_to: data.reply_to,
      "g-recaptcha-response": recaptha,
    };

    emailjs
      .send("service_bmzoxq8", "template_gq9lt8k", values, "HhYCDJNmSoNgo_XdU")
      .then(
        function (response) {
          console.log("SUCCESS!", response.status, response.text);
          notifySuccess();
        },
        function (error) {
          console.log("FAILED...", error);
          notifyError();
        }
      );
    reset({ from_name: "", message: "", reply_to: "" });
    recaptchaRef.current && recaptchaRef.current.reset();
  };

  const onReCAPTCHAChange = (captchaCode: any) => {
    if (!captchaCode) {
      return;
    }
    setRecapthaError(false);
    setRecaptha(captchaCode);
  };

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        control={control}
        errors={errors.from_name}
        label="Name *"
        name="from_name"
        placeholder="Name"
        type="text"
      />
      <TextInput
        control={control}
        errors={errors.reply_to}
        label="Your email *"
        name="reply_to"
        placeholder="e-mail"
        type="text"
      />
      <Textarea
        control={control}
        label="Message *"
        placeholder={"Your message"}
        name="message"
        errors={errors.message}
      />
      <ReCAPTCHA
        ref={recaptchaRef}
        size="normal"
        sitekey={"6Ld33xIiAAAAAJq8957OARtVQxqld9_1H9ohuljR"}
        onChange={onReCAPTCHAChange}
      />
      {recapthaError && <ErrorText>Check reCAPTCHA</ErrorText>}
      <Button type="submit" value="Send" />
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </FormWrapper>
  );
};
