
import { motion } from "framer-motion";

interface NavigationProps {
  sections: Array<{ id: string; title: string }>;
  currentSection: number;
  onSectionChange: (index: number) => void;
}

export const Navigation = ({ sections, currentSection, onSectionChange }: NavigationProps) => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="fixed top-8 left-1/2 -translate-x-1/2 z-50"
    >
      <div className="flex items-center gap-1 bg-black/20 backdrop-blur-md border border-white/10 rounded-full px-6 py-3">
        {sections.map((section, index) => (
          <button
            key={section.id}
            onClick={() => onSectionChange(index)}
            className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-full ${
              index === currentSection
                ? 'text-white'
                : 'text-white/60 hover:text-white/80'
            }`}
          >
            {index === currentSection && (
              <motion.div
                layoutId="nav-indicator"
                className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
            <span className="relative z-10">{section.title}</span>
          </button>
        ))}
      </div>
    </motion.nav>
  );
};
