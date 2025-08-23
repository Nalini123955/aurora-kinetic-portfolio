import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, ArrowUp, Github, Linkedin, X } from "lucide-react"; 
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Navigation } from "../components/Navigation";
import { ParticlesBackground } from "../components/ParticlesBackground";

// ✅ Custom Leetcode Icon (SVG)
const LeetcodeIcon = (props: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 50 50"
    fill="currentColor"
    {...props}
  >
    <path d="M25 2C12.3 2 2 12.3 2 25s10.3 23 23 23 23-10.3 23-23S37.7 2 25 2zm0 42C13.4 44 4 34.6 4 23S13.4 2 25 2s21 9.4 21 21-9.4 21-21 21z"/>
    <path d="M31 17l-7 7 7 7-2 2-9-9 9-9z"/>
  </svg>
);

const sections = [
  { id: 'hero', component: HeroSection, title: 'Home' },
  { id: 'about', component: AboutSection, title: 'About' },
  { id: 'skills', component: SkillsSection, title: 'Skills' },
  { id: 'projects', component: ProjectsSection, title: 'Projects' },
  { id: 'contact', component: ContactSection, title: 'Contact' }
];

const Index = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const scrollToSection = (index: number) => {
    if (isScrolling || index < 0 || index >= sections.length) return;
    
    setIsScrolling(true);
    setCurrentSection(index);
    
    setTimeout(() => setIsScrolling(false), 1000);
  };

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (isScrolling) return;

      if (e.deltaY > 0) {
        scrollToSection(currentSection + 1);
      } else {
        scrollToSection(currentSection - 1);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        scrollToSection(currentSection + 1);
      } else if (e.key === 'ArrowUp') {
        scrollToSection(currentSection - 1);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentSection, isScrolling]);

  const CurrentComponent = sections[currentSection].component;

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <ParticlesBackground />
      
      {/* Navigation */}
      <Navigation 
        sections={sections} 
        currentSection={currentSection} 
        onSectionChange={scrollToSection}
      />

      {/* Main Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSection}
          initial={{ opacity: 0, y: 100, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -100, scale: 1.1 }}
          transition={{ 
            duration: 0.8, 
            ease: [0.25, 0.1, 0.25, 1],
            staggerChildren: 0.1
          }}
          className="relative z-10"
        >
          <CurrentComponent />
        </motion.div>
      </AnimatePresence>

      {/* Scroll Indicators */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
        {sections.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToSection(index)}
            className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
              index === currentSection 
                ? 'bg-purple-500 border-purple-500 shadow-lg shadow-purple-500/50' 
                : 'border-gray-500 hover:border-purple-400'
            }`}
          />
        ))}
      </div>

      {/* Scroll Arrows */}
      <motion.button
        onClick={() => scrollToSection(currentSection - 1)}
        className={`fixed top-8 left-1/2 -translate-x-1/2 z-50 p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 transition-opacity ${
          currentSection === 0 ? 'opacity-30 cursor-not-allowed' : 'opacity-70 hover:opacity-100'
        }`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        disabled={currentSection === 0}
      >
        <ArrowUp className="w-5 h-5 text-white" />
      </motion.button>

      <motion.button
        onClick={() => scrollToSection(currentSection + 1)}
        className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-50 p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 transition-opacity ${
          currentSection === sections.length - 1 ? 'opacity-30 cursor-not-allowed' : 'opacity-70 hover:opacity-100'
        }`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        disabled={currentSection === sections.length - 1}
      >
        <ArrowDown className="w-5 h-5 text-white" />
      </motion.button>

      {/* ✅ Social Links */}
      <div className="fixed left-8 bottom-8 z-50 flex flex-col gap-4">
        {[
          { icon: Github, href: "https://github.com/Nalini123955", color: "hover:text-gray-300" },
          { icon: Linkedin, href: "https://www.linkedin.com/in/nalini-saravanan", color: "hover:text-blue-400" },
          { icon: X, href: "https://x.com/nalini_progr", color: "hover:text-blue-400" },
          { icon: LeetcodeIcon, href: "https://leetcode.com/u/Nalini12345/", color: "hover:text-orange-400" }, 
        ].map(({ icon: Icon, href, color }, index) => (
          <motion.a
            key={index}
            href={href}
            whileHover={{ scale: 1.2, y: -2 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 + 1 }}
            className={color}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon className="w-6 h-6" />
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default Index;
   
