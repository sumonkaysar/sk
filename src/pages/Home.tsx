import About from "@/components/modules/Home/About";
import Banner from "@/components/modules/Home/Banner";
import Contact from "@/components/modules/Home/Contact";
import ProjectsSection from "@/components/modules/Home/Projects";
import Skills from "@/components/modules/Home/Skills";

const Home = () => {
  return (
    <>
      <Banner />
      <About />
      <Skills />
      <ProjectsSection />
      <Contact />
    </>
  );
};

export default Home;
