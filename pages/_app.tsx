import type { AppProps } from "next/app";
import Head from "next/head";
import { GlobalStyle } from "@components/GlobalStyle";
import { Navigation } from "@sections/Navigation/Navigation";
import { UpButton } from "@components/_universal/UpButton/UpButton";
import { Footer } from "@sections/Footer/Footer";
import { useGaInit } from "@utils/useGaInit";
import { useRouter } from "next/router";
import { Cookies } from "@components/Cookies/Cookies";
import ThemeProvider from "src/ThemeProvider";

function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useGaInit(router);
  return (
    <>
      <ThemeProvider>
        <GlobalStyle />
        <Navigation />
        <Component {...pageProps} />
        <UpButton />
        <Footer />
        <Cookies />
      </ThemeProvider>
    </>
  );
}
export default App;
