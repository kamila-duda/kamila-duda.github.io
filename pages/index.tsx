import type { NextPage } from "next";
import { HomeIntro } from "@sections/HomeIntro/HomeIntro";
import { About } from "@sections/About/About";
import { Seo } from "@components/SEO/Seo";
import { Projects } from "@sections/Projects/Projects";
import { Contact } from "@sections/Contact/Contact";

const Home: NextPage = () => {
  return (
    <>
      <HomeIntro />
      <About />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
