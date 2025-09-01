import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { socialLinks } from "@/consts/links.const";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { FaEnvelope, FaLocationPin, FaPhone } from "react-icons/fa6";
import { toast } from "sonner";

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // try {
    //   const res = await fetch("/api/v1/user/contact", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify(form),
    //   });
    //   if (!res.ok) throw new Error("Failed");
    toast.success("Message sent! Thanks, I’ll get back to you soon.");
    //   setForm({ name: "", email: "", message: "" });
    // } catch {
    //   toast.error("Something went wrong. Please try again.");
    // } finally {
    setLoading(false);
    // }
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white"
    >
      <div className="container max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 px-14">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Contact <span className="text-cyan-400">Me</span>
          </h2>
          <p className="text-gray-300 mb-6">
            Let’s build something awesome together.
          </p>

          <div className="space-y-2 text-gray-200">
            <p className="flex items-center gap-2">
              <FaPhone />
              <a href="tel:+8801828008748">+880-1828-008748</a>
            </p>
            <p className="flex items-center gap-2">
              <FaEnvelope />
              <a href="mailto:sumon.kaysar.sk@gmail.com">
                sumon.kaysar.sk@gmail.com
              </a>
            </p>
            <p className="flex items-center gap-2">
              <FaLocationPin />
              <span>Narsingdi, Bangladesh</span>
            </p>
          </div>

          <div className="flex gap-4 mt-6">
            {socialLinks.map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                className="rounded-full px-4 py-2 bg-white/5 border border-white/10 hover:shadow-[0_0_25px_rgba(0,255,255,0.35)] transition"
              >
                <Icon />
              </a>
            ))}
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Card className="bg-white/5 border-white/10 backdrop-blur rounded-2xl">
            <CardContent className="p-6 space-y-4">
              <form onSubmit={submit} className="space-y-4">
                <Input
                  required
                  placeholder="Your Name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="bg-white/10 border-white/10 text-white placeholder:text-gray-400"
                />
                <Input
                  required
                  type="email"
                  placeholder="Your Email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="bg-white/10 border-white/10 text-white placeholder:text-gray-400"
                />
                <Textarea
                  required
                  placeholder="Your Message"
                  rows={6}
                  value={form.message}
                  onChange={(e) =>
                    setForm({ ...form, message: e.target.value })
                  }
                  className="bg-white/10 border-white/10 text-white placeholder:text-gray-400"
                />
                <Button
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-cyan-500 to-blue-600"
                >
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
