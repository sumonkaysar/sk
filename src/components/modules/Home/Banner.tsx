import developerAnimation from "@/assets/dev-animation.json";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-br from-[#0e0b24] via-[#201d46] to-[#24243e] w-full"
    >
      <div className="container max-w-7xl min-h-[calc(100vh_-_68px)] mx-auto flex flex-col-reverse lg:flex-row items-center justify-center lg:justify-between gap-10 lg:gap-0 px-14">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left max-w-xl xl:max-w-2xl"
        >
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-4">
            Hi, I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              Sumon Kaysar
            </span>
          </h2>
          <h3 className="text-xl md:text-2xl font-semibold text-blue-300 mb-4">
            <Typewriter
              words={[
                "Full Stack Developer",
                "MERN Specialist",
                "Tech Enthusiast",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={40}
              delaySpeed={1500}
            />
          </h3>
          <p className="text-gray-400 mb-8">
            I build modern, scalable, and beautiful web apps with the latest
            technologies.
          </p>
          <div className="flex gap-4 justify-center lg:justify-start">
            <Button
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 transition-transform"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/11H_EHikXboxbGNzW0nLQpFDltxiTBVW2/view?usp=sharing",
                  "_blank"
                )
              }
            >
              My Resume
            </Button>
            <Button
              variant="outline"
              className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white transition-all"
              onClick={() => {
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              View Projects
            </Button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <Lottie
            animationData={developerAnimation}
            loop={true}
            autoplay={true}
            className="max-w-full sm:w-[400px] md:w-[500px]"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
