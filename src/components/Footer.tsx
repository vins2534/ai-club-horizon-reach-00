import React from "react";
import { Instagram, Linkedin, Mail, Github } from "lucide-react";

const links = [
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://instagram.com/",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://linkedin.com/",
  },
  {
    name: "Email",
    icon: Mail,
    url: "mailto:info@aiclub.com",
  },
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/",
  },
];

const Footer = () => (
  <footer className="w-full bg-gradient-to-t from-indigo-100 via-white to-blue-50 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900 py-8 mt-auto border-t border-blue-100 dark:border-zinc-700 transition-colors duration-300">
    <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 px-4">
      <div className="flex gap-6">
        {links.map((item) => (
          <a
            key={item.name}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-slate-700 dark:text-slate-300 hover:text-primary dark:hover:text-indigo-400 transition-colors"
            aria-label={item.name}
          >
            <item.icon size={24} />
            <span className="hidden sm:inline">{item.name}</span>
          </a>
        ))}
      </div>
      <span className="text-xs text-muted-foreground text-center select-none">
        &copy; {new Date().getFullYear()} AI Club. All rights reserved.
      </span>
    </div>
  </footer>
);

export default Footer;
