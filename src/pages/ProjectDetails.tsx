import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { IProject } from "@/types/project.type";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";

const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<IProject | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/projects.json");
        const data = (await res.json()) as IProject[];
        console.log(data.find((p) => p._id === id));

        setProject(data.find((p) => p._id === id) || null);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  if (loading)
    return (
      <div className="grow-1 flex items-center justify-center text-white">
        Loading...
      </div>
    );
  if (!project)
    return (
      <div className="grow-1 flex items-center justify-center text-white">
        Project Details Not found
      </div>
    );

  return (
    <main className="grow-1 bg-[#0b0b12] text-white">
      <section className=" relative">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-600/20 to-purple-700/20 blur-2xl" />
        <div className="container max-w-7xl mx-auto px-14 py-16 relative">
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-2xl sm:text-4xl md:text-5xl font-extrabold mb-4"
          >
            {project.title}
          </motion.h1>
          <p className="text-gray-300 max-w-3xl">{project.shortDescription}</p>
          <div className="mt-8 rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur">
            <div className="aspect-video overflow-hidden">
              <img
                src={project.image || "/placeholder.svg"}
                className="w-full"
              />
            </div>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {project.techStack.map((t) => (
              <Badge
                key={t}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-0"
              >
                {t}
              </Badge>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            {project.liveDemo && (
              <Button
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                onClick={() => window.open(project.liveDemo!, "_blank")}
              >
                Live Demo
              </Button>
            )}
            {project.githubFrontend && (
              <Button
                variant="outline"
                onClick={() => window.open(project.githubFrontend!, "_blank")}
              >
                GitHub (Frontend)
              </Button>
            )}
            {project.githubBackend && (
              <Button
                variant="outline"
                onClick={() => window.open(project.githubBackend!, "_blank")}
              >
                GitHub (Backend)
              </Button>
            )}
            <Link to="/projects">
              <Button variant="ghost">← Back to Projects</Button>
            </Link>
          </div>
        </div>
      </section>
      <section className="container max-w-7xl mx-auto px-14 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <Card className="lg:col-span-2 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]">
            <CardContent className="p-6 space-y-4">
              <h2 className="text-2xl font-semibold">Overview</h2>
              <p className="text-gray-300 whitespace-pre-line">
                {project.description}
              </p>

              <h3 className="text-xl font-semibold mt-6">Key Features</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                {project.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]">
            <CardContent className="p-6 space-y-3">
              <h3 className="text-xl font-semibold">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((t) => (
                  <Badge
                    key={t}
                    className="bg-gradient-to-r from-cyan-600 to-blue-700 text-white"
                  >
                    {t}
                  </Badge>
                ))}
              </div>
              <div className="pt-4 text-sm text-gray-200">
                <p>Category: {project.category}</p>
                <p>
                  Created: {new Date(project.createdAt).toLocaleDateString()}
                </p>
                <p>
                  Updated: {new Date(project.updatedAt).toLocaleDateString()}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
        {project.myContribution && (
          <Card className="bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] mt-8">
            <CardContent className="p-6 space-y-4">
              <h2 className="text-2xl font-semibold">My Contribution</h2>

              <ul className="list-disc pl-6 space-y-2 text-gray-300">
                {project.myContribution?.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}
      </section>
    </main>
  );
};

export default ProjectDetails;
