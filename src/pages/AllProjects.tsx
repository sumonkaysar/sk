import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { IProject } from "@/types/project.type";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const AllProjects = () => {
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
    <div className="bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white grow-1">
      <div className="container max-w-7xl mx-auto px-14 py-16 h-full">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl text-center font-bold mb-8"
        >
          All <span className="text-cyan-400">Projects</span>
        </motion.h1>

        {loading ? (
          <p className="text-gray-400">Loading...</p>
        ) : projects.length === 0 ? (
          <p className="text-gray-400 text-center">No projects found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((p, i) => (
              <motion.div
                key={p._id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <Card className="overflow-hidden bg-white/5 backdrop-blur border border-white/10 hover:scale-[1.02] transition rounded-2xl py-0 h-full">
                  <div className="relative aspect-video overflow-hidden">
                    <img src={p.image} className="w-full" />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-white">{p.title}</CardTitle>
                    <p className="text-gray-300 text-sm">
                      {p.shortDescription}
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {p.techStack.slice(0, 8).map((t) => (
                        <Badge
                          key={t}
                          className="bg-gradient-to-r from-cyan-600 to-blue-700 text-white border-0"
                        >
                          {t}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-3 pb-6">
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
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllProjects;
