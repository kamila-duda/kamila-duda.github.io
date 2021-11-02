import type { NextPage } from "next";
import { HomeIntro } from "@sections/HomeIntro/HomeIntro";
import { About } from "@sections/About/About";
import { Seo } from "@components/SEO/Seo";
import { Projects } from "@sections/Projects/Projects";
import { Contact } from "@sections/Contact/Contact";
import { Socials } from "@components/_universal/Socials/Socials";

const Home: NextPage = () => {
  return (
    <>
      <HomeIntro />
      <Socials />
      <About />
      <Projects />
      <Contact />
    </>
  );
};

export default Home;
