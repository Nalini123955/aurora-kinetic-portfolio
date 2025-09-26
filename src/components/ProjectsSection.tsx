import { motion } from "framer-motion";
import { useState } from "react";
import { Github, ArrowRight } from "lucide-react";
import ecomImg from "../images/ecom.png";
import academyImg from "../images/academy.png";
import expenseImg from "../images/expense.png";
import blogImg from "../images/blog.png";
import elearningsImg from "../images/elearnings.png";
import empsImg from "../images/emps.png";

interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  image: string;
  github: string;
  demo: string;
  category: string;
}

export const ProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A modern e-commerce platform with real-time inventory, payment processing, and admin dashboard.",
      tech: ["HTML", "CSS", "JavaScript"],
      image: ecomImg,
      github: "https://github.com/Nalini123955/ecommerce_.git",
      demo: "https://magical-rolypoly-23a4c4.netlify.app/",
      category: "Web App",
    },
    {
      id: 2,
      title: "Nalini Academy",
      description:
        "A responsive online learning platform built using HTML, CSS, and JavaScript. It offers a simple and clean interface for users to explore and learn courses online.",
      tech: ["HTML", "CSS", "JavaScript"],
      image: academyImg,
      github: "https://github.com/Nalini123955/nalini_academy.git",
      demo: "https://naliniacademy.vercel.app/",
      category: "Web App",
    },
    {
      id: 3,
      title: "Expense Tracker",
      description:
        "A collaborative expense management tool with real-time updates, user authentication, and graphical analysis.",
      tech: ["Python", "Django"],
      image: expenseImg,
      github: "https://github.com/Nalini123955/expense-tracker.git",
      demo: "https://nalini1234.pythonanywhere.com/",
      category: "Web App",
    },
    {
      id: 4,
      title: "Blog App",
      description:
         "This is a dynamic blog web application built using django. it allows users to view the latest blog posts with pagination and structured content. The project includes an About page and leverages Mysql for backend data storage.",
      tech: ["python", "Django", "Mysql"],
      image: blogImg,
      github: "https://github.com/Nalini123955/my_blog.git",
      demo: "https://django123.pythonanywhere.com/blog/",
      category: "Web app",
    },
    {
      id: 5,
      title: "Online-Elearning-Platform",
      description:
        "An all-in-one Online E-learning Platform designed to make learning simple and accessible. With interactive courses, quizzes, and projects, students can learn at their own pace anytime, anywhere.",
      tech: ["React js", "javascript","Html & css"],
      image: elearningsImg,
      github: "https://github.com/Nalini123955/online-elearning-platform.git",
      demo: "https://elearnings-24hs.vercel.app/",
      category: "Web app",
    },
    {
      id: 6,
      title: "Employee Management System",
      description:
        "A role-based Employee Management System built with Django and MySQL, featuring full CRUD operations for employee and company data. The system allows admins to add, update, view, and delete employee records through a responsive Bootstrap interface. Real-time data handling ensures efficient performance tracking and streamlined HR workflows.",
      tech: ["python","Django","Bootstrap","Mysql"],
      image: empsImg,
      github: "https://github.com/Nalini123955/employee-management-system.git",
      demo: "emps4321.pythonanywhere.com",
      category: "Web app",
    },
  ];

  const categories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto mb-8">
            A collection of projects that showcase my skills and passion for creating innovative solutions.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                    : "bg-white/10 text-white/70 hover:bg-white/20 hover:text-white"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
              className="group relative"
            >
              <div className="relative bg-black/40 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
                {/* Project Image */}
                <div className="relative h-48 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-purple-600/40 to-pink-600/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={false}
                  />
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <span className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs font-medium rounded-full">
                      {project.category}
                    </span>
                  </div>

                  <p className="text-white/70 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-white/10 text-white/80 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex gap-3">
                    <motion.a
                      href={project.github}
                      className="flex items-center gap-2 px-3 py-2 bg-white/10 hover:bg-white/20 text-white/80 hover:text-white rounded-lg text-sm transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg text-sm transition-all duration-300"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ArrowRight className="w-4 h-4" />
                      Demo
                    </motion.a>
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  initial={false}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-center mt-16"
        >
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-medium rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};
