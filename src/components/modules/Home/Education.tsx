import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { educationData } from "@/consts/education.const";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const Education = () => {
  return (
    <section
      id="education"
      className="relative w-full py-20 bg-gradient-to-br from-[#0e0b24] via-[#201d46] to-[#24243e]"
    >
      <div className="container max-w-7xl mx-auto text-center px-14">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center text-white mb-12"
        >
          My <span className="text-cyan-400">Education</span>
        </motion.h2>
        <div className="max-w-4xl mx-auto grid gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="group relative bg-gray-900/70 border border-indigo-600/30 hover:border-indigo-400 transition-all duration-300 rounded-2xl shadow-lg hover:shadow-indigo-600/40 overflow-hidden backdrop-blur-lg">
              <CardHeader className="flex items-center space-x-4">
                <div className="p-3 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 shadow-lg group-hover:scale-110 transition-transform">
                  <GraduationCap className="w-7 h-7 text-white" />
                </div>
                <div>
                  <CardTitle className="text-2xl font-bold text-white">
                    {educationData.degree}
                  </CardTitle>
                  <CardDescription className="text-indigo-300">
                    {educationData.institution} • {educationData.location}
                  </CardDescription>
                  <div className="flex items-center justify-between text-gray-400 mb-3">
                    <span className="text-sm">
                      {educationData.startYear} - {educationData.endYear}
                    </span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="mt-2">
                <p className="text-gray-300">{educationData.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;
