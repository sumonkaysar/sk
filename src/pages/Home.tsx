import About from "@/components/modules/Home/About";
import Banner from "@/components/modules/Home/Banner";
import Blog from "@/components/modules/Home/Blogs";
import Contact from "@/components/modules/Home/Contact";
import Education from "@/components/modules/Home/Education";
import ProjectsSection from "@/components/modules/Home/Projects";
import Skills from "@/components/modules/Home/Skills";

const Home = () => {
  return (
    <>
      <Banner />
      <About />
      <Education />
      <Skills />
      <ProjectsSection />
      <Blog />
      <Contact />
    </>
  );
};

export default Home;
