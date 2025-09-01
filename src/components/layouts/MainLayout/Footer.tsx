import { socialLinks } from "@/consts/links.const";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-[#181829] border-t border-white/10 text-gray-300">
      <div className="container max-w-7xl mx-auto px-14 py-10 sm:flex justify-between items-center gap-8">
        <div>
          <h3 className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 text-2xl">
            Sumon Kaysar
          </h3>
          <p className="text-sm mt-2 flex items-center">
            Full Stack Web Developer — MERN • TypeScript
          </p>
          <div className="flex gap-4 mt-3">
            {socialLinks.map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                className="hover:shadow-[0_0_20px_rgba(0,255,255,0.3)] transition"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
        <nav className="flex flex-col gap-2 sm:gap-8 justify-end mt-6">
          {[
            { href: "/#home", label: "Home" },
            { href: "/#contact", label: "Contact" },
          ].map((n) => (
            <a
              key={n.label}
              href={n.href}
              className="hover:text-cyan-400 hover:drop-shadow-[0_0_6px_rgba(0,255,255,0.6)] transition"
            >
              {n.label}
            </a>
          ))}
          <Link to="/projects">All Projects</Link>
        </nav>
      </div>
      <div className="bg-[#141414] border-t border-white/10 py-4">
        <p className="container max-w-7xl mx-auto px-14 text-center text-xs text-gray-400">
          &copy; {new Date().getFullYear()} — Made with ❤️ by Sumon Kaysar
        </p>
      </div>
    </footer>
  );
};

export default Footer;
