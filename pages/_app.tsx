import type { AppProps } from "next/app";
import Head from "next/head";
import { theme } from "@shared/theme";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "@components/GlobalStyle";
import { Navigation } from "@sections/Navigation/Navigation";
import { UpButton } from "@components/_universal/UpButton/UpButton";
import { Footer } from "@sections/Footer/Footer";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Navigation />
        <Component {...pageProps} />
        <UpButton />
        <Footer />
      </ThemeProvider>
    </>
  );
}
export default App;
