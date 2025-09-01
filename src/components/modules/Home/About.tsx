import sk from "@/assets/images/sk.jpg";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { motion } from "framer-motion";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import {
  SiMongodb,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

// Tech logos
// import mongoLogo from "@/assets/tech/mongodb.svg";
// import nodeLogo from "@/assets/tech/node.svg";
// import reactLogo from "@/assets/tech/react.svg";
// import tailwindLogo from "@/assets/tech/tailwind.svg";
// import tsLogo from "@/assets/tech/typescript.svg";

const techLogos = [
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiTypescript,
  SiTailwindcss,
];

const skills = [
  { name: "React / Vite", value: 85 },
  { name: "Redux.js / Redux Toolkit", value: 70 },
  { name: "Node.js / Express.js", value: 80 },
  { name: "MongoDB / Mongoose", value: 75 },
  { name: "TypeScript", value: 75 },
  { name: "Tailwind + Shadcn", value: 80 },
];

const About = () => {
  const logosRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (logosRef.current) {
      const icons = logosRef.current.querySelectorAll(".floating-logo");
      gsap.to(icons, {
        y: -12,
        repeat: -1,
        yoyo: true,
        duration: 1.8,
        ease: "easeInOut",
        stagger: 0.2,
      });
    }
  }, []);

  return (
    <section
      id="about"
      className="relative bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white py-20"
    >
      <div className="container max-w-7xl mx-auto px-14 md:grid md:grid-cols-3 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex"
        >
          <div className="relative mx-auto md:mx-0 mb-10 md:mb-0">
            <img
              src={sk}
              alt="Profile"
              className="w-full rounded-2xl shadow-[0_0_30px_rgba(0,255,255,0.5)] border-4 border-cyan-400"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400/20 to-purple-500/20 blur-xl"></div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="col-span-2"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            I'm{" "}
            <span className="text-cyan-300 font-semibold">Sumon Kaysar</span>, a
            passionate{" "}
            <span className="text-purple-400 font-semibold">
              Full Stack Developer
            </span>{" "}
            specialized in{" "}
            <span className="text-cyan-300 font-semibold">MERN Stack</span>. I
            love building dynamic, responsive, and high-performing digital
            products. I bring innovative ideas to life with robust and scalable
            solutions.
          </p>
          <div
            ref={logosRef}
            className="flex gap-5 mb-8 items-center flex-wrap"
          >
            {techLogos.map((Icon, i) => (
              <Icon
                key={i}
                className="floating-logo w-8 h-8 drop-shadow-[0_0_10px_rgba(0,255,255,0.5)]"
              />
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {skills.map((skill, i) => (
              <Card
                key={i}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl hover:scale-105 transition-transform shadow-[0_0_20px_rgba(0,255,255,0.2)]"
              >
                <CardContent className="p-4">
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {skill.name}
                  </h3>
                  <Progress value={skill.value} className="h-3 bg-cyan-500" />
                  <p className="text-gray-300 mt-2 text-sm">{skill.value}%</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
