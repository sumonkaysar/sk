import { Card, CardContent } from "@/components/ui/card";
import { skillCategories } from "@/consts/skills.const";
import { motion } from "framer-motion";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import Tilt from "react-parallax-tilt";

const Skills = () => {
  const iconsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (iconsRef.current) {
      const icons = iconsRef.current.querySelectorAll(".floating-icon");
      gsap.to(icons, {
        y: -10,
        repeat: -1,
        yoyo: true,
        duration: 1.5,
        ease: "easeInOut",
        stagger: 0.15,
      });
    }
  }, []);

  return (
    <section
      id="skills"
      className="relative bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white py-20"
    >
      <div className="container max-w-7xl mx-auto px-14">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          My <span className="text-cyan-400">Skills</span>
        </motion.h2>
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          ref={iconsRef}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="h-full"
            >
              <Tilt
                tiltMaxAngleX={15}
                tiltMaxAngleY={15}
                scale={1.05}
                className="h-full"
              >
                <Card
                  className={`bg-white/5 backdrop-blur-md border border-white/10 shadow-[0_0_25px_rgba(0,255,255,0.15)] rounded-2xl hover:shadow-[0_0_40px_rgba(0,255,255,0.35)] transition-all h-full`}
                >
                  <CardContent className="p-6 flex flex-col items-center gap-4">
                    <h3
                      className={`text-2xl font-semibold bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}
                    >
                      {category.title}
                    </h3>
                    <div className="flex flex-wrap justify-center gap-4 mt-4">
                      {category.skills.map(({ name, Icon, color }, i) => (
                        <div
                          key={i}
                          className="flex flex-col items-center gap-2 floating-icon"
                        >
                          {Icon && <Icon size={40} color={color} />}
                          <p className="text-gray-200 text-sm">{name}</p>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
