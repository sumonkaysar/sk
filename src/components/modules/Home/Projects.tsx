import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { IProject } from "@/types/project.type";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Tilt from "react-parallax-tilt";
import { useNavigate } from "react-router";

const ProjectsSection = () => {
  const [projects, setProjects] = useState<IProject[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/projects.json");
        const data = await res.json();
        setProjects(data || []);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <section
      id="projects"
      className="relative py-20 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]"
    >
      <div className="container max-w-7xl mx-auto px-14">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center text-white mb-12"
        >
          Featured <span className="text-cyan-400">Projects</span>
        </motion.h2>

        {loading ? (
          <p className="text-center text-gray-300">Loading...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects?.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="h-full"
              >
                <Tilt
                  tiltMaxAngleX={10}
                  tiltMaxAngleY={10}
                  glareEnable
                  glareMaxOpacity={0.25}
                  scale={1.02}
                  className="h-full"
                >
                  <Card className="overflow-hidden bg-white/5 backdrop-blur border border-white/10 rounded-2xl hover:shadow-[0_10px_40px_rgba(0,255,255,0.25)] transition h-full py-0">
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={p.image || "/placeholder.svg"}
                        className="w-full object-top"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-white">{p.title}</CardTitle>
                      <p className="text-gray-300 text-sm">
                        {p.shortDescription}
                      </p>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex flex-wrap gap-2">
                        {p?.techStack?.slice(0, 6).map((t) => (
                          <Badge
                            key={t}
                            className="bg-gradient-to-r from-cyan-600 to-blue-700 text-white border-0"
                          >
                            {t}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex gap-3 self-end pb-6">
                        <Button
                          variant="outline"
                          className="border-cyan-400 text-cyan-300 hover:bg-cyan-500 hover:text-white"
                          onClick={() => navigate(`/projects/${p._id}`)}
                        >
                          View Details
                        </Button>
                        {p.liveDemo && (
                          <Button
                            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                            onClick={() => window.open(p.liveDemo!, "_blank")}
                          >
                            Live Demo
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </Tilt>
              </motion.div>
            ))}
          </div>
        )}
        <div className="text-center mt-10">
          <Button
            className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-600"
            onClick={() => navigate("/projects")}
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
