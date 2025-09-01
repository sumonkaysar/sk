import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface IBlog {
  id: string;
  title: string;
  shortDescription: string;
  content: string;
  coverImage: string;
  tags: string[];
  createdAt: string;
}

const Blog = () => {
  const [blogs, setBlogs] = useState<IBlog[]>([]);
  const [selectedBlog, setSelectedBlog] = useState<IBlog | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/blogs.json");
        const data = await res.json();
        setBlogs(data || []);
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <section
      id="blogs"
      className="py-16 bg-gradient-to-br from-[#0e0b24] via-[#201d46] to-[#24243e]"
    >
      <div className="container max-w-7xl mx-auto text-center mb-8 px-14">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center text-white mb-12"
        >
          Latest <span className="text-cyan-400">Blogs</span>
        </motion.h2>
        {loading ? (
          <p className="text-center text-gray-300">Loading...</p>
        ) : (
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 px-6 md:px-0">
            {blogs.map((blog, index) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
              >
                <Card
                  className="bg-slate-800/50 border border-slate-700 shadow-xl hover:shadow-2xl hover:scale-105 transition-transform duration-300 cursor-pointer"
                  onClick={() => setSelectedBlog(blog)}
                >
                  <img
                    src={blog.coverImage}
                    alt={blog.title}
                    className="rounded-t-xl w-full h-48 object-cover"
                  />
                  <CardHeader>
                    <CardTitle className="text-white">{blog.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400 mb-3">
                      {blog.shortDescription}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {blog.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="bg-indigo-600 text-white"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <Button className="mt-4 w-full bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-purple-600 hover:to-indigo-500 text-white">
                      Read More
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </div>
      <Dialog open={!!selectedBlog} onOpenChange={() => setSelectedBlog(null)}>
        <DialogContent className="max-w-2xl bg-slate-900 text-white border border-slate-700">
          <DialogHeader>
            <DialogTitle>{selectedBlog?.title}</DialogTitle>
          </DialogHeader>
          <div className="mt-4">
            <img
              src={selectedBlog?.coverImage}
              alt={selectedBlog?.title}
              className="rounded-lg mb-4"
            />
            <p className="text-gray-300 whitespace-pre-line">
              {selectedBlog?.content}
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Blog;
