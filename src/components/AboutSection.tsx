
import { motion } from "framer-motion";
import { useState } from "react";

export const AboutSection = () => {
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);

  const stats = [
    { label: "FullStack Develeper", value: "Fresher", color: "from-purple-500 to-pink-500" },
    { label: "Projects Completed", value: "25+", color: "from-cyan-500 to-blue-500" },
    { label: "Awards Won", value: "10+", color: "from-orange-500 to-red-500" }
  ];

  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6">
              About Me
            </h2>
            <div className="text-xl text-white/80 leading-relaxed space-y-4">
              <p>I am an enthusiastic Full Stack Developer with a strong passion for coding.
               I love building real-world applications that solve problems.
               My learning journey started with front-end and expanded to full stack.    
             </p>
              <p>
                I specialize in modern web technologies including React, Node.js, 
                Python, both frontend and backend technologies. I love turning complex problems 
                into simple, beautiful, and intuitive solutions.
              </p>
              <p>
               I’m currently improving my DSA and problem-solving skills.
            I’m also exploring Machine Learning and AI step by step.
             My dream is to work in a top company as a Python Full Stack Developer.
             I believe in learning daily, building projects, and staying consistent.
             With strong dedication, I’m confident about achieving my goals.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            {["HTML", "Css", "javascript", "Reactjs", "Python", "Django", "Mysql", "AWS", "Rest API"].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/90 text-sm font-medium"
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.8 }}
              whileHover={{ scale: 1.05, y: -5 }}
              onHoverStart={() => setHoveredStat(index)}
              onHoverEnd={() => setHoveredStat(null)}
              className="relative group"
            >
              <div className="relative p-6 bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                  initial={false}
                />
                
                <div className="relative z-10">
                  <motion.div
                    className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}
                    animate={hoveredStat === index ? { scale: [1, 1.1, 1] } : {}}
                    transition={{ duration: 0.3 }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-white/70 text-sm font-medium">
                    {stat.label}
                  </div>
                </div>

                <motion.div
                  className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${stat.color}`}
                  initial={{ width: "0%" }}
                  animate={{ width: hoveredStat === index ? "100%" : "0%" }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
