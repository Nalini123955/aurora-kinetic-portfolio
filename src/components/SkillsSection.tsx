
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface Skill {
  name: string;
  level: number;
  category: string;
  color: string;
}

export const SkillsSection = () => {
  const [animatedValues, setAnimatedValues] = useState<{ [key: string]: number }>({});

  const skills: Skill[] = [
    { name: "HTML", level: 95, category: "Frontend", color: "from-blue-500 to-cyan-500" },
    { name: "CSS", level: 90, category: "Frontend", color: "from-blue-600 to-blue-400" },
    { name: "javascript",level: 85, category: "Frontend", color: "from-yellow-500 to-orange-500" },
    { name: "React js", level: 82, category: "Frontend", color: "from-purple-500 to-pink-500" },
    { name: "python", level: 90, category: "Backend", color: "from-cyan-500 to-blue-600" },
    { name: "Django", level: 78, category: "Backend", color: "from-pink-500 to-rose-500" },
    { name: "Mysql", level: 85, category: "Database", color: "from-green-600 to-green-400" }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      skills.forEach((skill, index) => {
        setTimeout(() => {
          setAnimatedValues(prev => ({ ...prev, [skill.name]: skill.level }));
        }, index * 200);
      });
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const categories = Array.from(new Set(skills.map(skill => skill.category)));

  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6">
            My Skills
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            A showcase of technologies and tools I've learned.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -50 : 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="space-y-6"
            >
              <h3 className="text-2xl font-bold text-white/90 mb-6 flex items-center">
                <span className={`w-3 h-3 rounded-full bg-gradient-to-r ${
                  categoryIndex === 0 ? "from-purple-500 to-pink-500" :
                  categoryIndex === 1 ? "from-cyan-500 to-blue-500" :
                  categoryIndex === 2 ? "from-green-500 to-emerald-500" :
                  "from-orange-500 to-red-500"
                } mr-3`} />
                {category}
              </h3>

              {skills
                .filter(skill => skill.category === category)
                .map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: categoryIndex * 0.2 + index * 0.1, duration: 0.6 }}
                    className="group"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white/90 font-medium">{skill.name}</span>
                      <motion.span
                        className="text-white/70 font-mono"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: categoryIndex * 0.2 + index * 0.1 + 0.5 }}
                      >
                        {animatedValues[skill.name] || 0}%
                      </motion.span>
                    </div>
                    
                    <div className="relative h-3 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        className={`absolute inset-y-0 left-0 bg-gradient-to-r ${skill.color} rounded-full`}
                        initial={{ width: 0 }}
                        animate={{ width: `${animatedValues[skill.name] || 0}%` }}
                        transition={{ 
                          duration: 1.5, 
                          delay: categoryIndex * 0.2 + index * 0.1 + 0.5,
                          ease: "easeOut"
                        }}
                      />
                      
                      <motion.div
                        className={`absolute inset-y-0 left-0 bg-gradient-to-r ${skill.color} rounded-full opacity-0 group-hover:opacity-30`}
                        style={{ width: `${skill.level}%` }}
                        animate={{ 
                          boxShadow: [
                            "0 0 0px rgba(139, 92, 246, 0)",
                            "0 0 20px rgba(139, 92, 246, 0.5)",
                            "0 0 0px rgba(139, 92, 246, 0)"
                          ]
                        }}
                        transition={{ duration: 2, repeat: Infinity }}
                      />
                    </div>
                  </motion.div>
                ))}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-4 px-6 py-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full">
            <span className="text-white/70">Always learning</span>
            <motion.div
              className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
              animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-white/70">Always growing</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
