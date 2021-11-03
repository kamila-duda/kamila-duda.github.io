import CookieConsent from "react-cookie-consent";

export const Cookies = () => {
  return (
    <CookieConsent
      location="bottom"
      buttonText="OK, got it!"
      cookieName="kduda-cookies-for-ga"
      style={{ background: "#CF5FE4" }}
      buttonStyle={{
        background: "#25293E",
        color: "#FFFFFA",
        fontSize: "13px",
      }}
      expires={150}
    >
      This website uses cookies to enhance the user experience.
    </CookieConsent>
  );
};
