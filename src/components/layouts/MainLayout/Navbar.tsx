import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`sticky top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-lg bg-white/10 shadow-lg border-b border-white/10"
          : "bg-[#211650]"
      }`}
    >
      <div className="container max-w-7xl mx-auto flex justify-between items-center py-4 px-14">
        <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
          <Link to="/">Sumon Kaysar</Link>
        </h1>
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`/#${link.id}`}
              className="text-white hover:text-blue-400 transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <Link to="/projects">All Projects</Link>
        </div>
        <div className="hidden lg:block">
          <Button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-full shadow-lg hover:scale-105 transition-transform">
            Download CV
          </Button>
        </div>
        <div className="md:hidden flex items-center">
          <Sheet>
            <SheetTrigger>
              <Menu className="text-white" size={28} />
            </SheetTrigger>
            <SheetContent className="bg-[#0f0f0f] text-white">
              <div className="flex flex-col space-y-4 mt-6">
                <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 ml-4 mb-4">
                  <Link to="/">Sumon Kaysar</Link>
                </h1>
                {navLinks.map((link) => (
                  <a
                    key={link.id}
                    href={`/#${link.id}`}
                    className="text-lg hover:text-blue-400 transition-colors duration-300 ml-10"
                  >
                    {link.label}
                  </a>
                ))}
                <Link to="/projects">All Projects</Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
