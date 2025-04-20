import { motion } from 'framer-motion';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { desc, link, title } from 'framer-motion/client';
import { useInView } from 'react-intersection-observer';

const projects = [
  {
    title: "Project 1",
    description: "A full-stack web appliction with java and angular.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800",
    link: "#"
  },
  {
    title: "Project 2",
    description: "Web Application for Nutrition Deficiency Diagnosis-Anemic verification ICD-10 integration.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
    link: "#"
  },
  {
    title: "Project 3",
    description: "Automatic Plant Watering (Graduation Electronics Project).",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
    link: "#"
  },
];

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen py-20">
      <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
      
      <div className="space-y-32">
        {projects.map((project, index) => {
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const [ref, inView] = useInView({
            threshold: 0.5,
            triggerOnce: true
          });

          return (
            <motion.div
              key={index}
              ref={ref}
              className={`flex items-center gap-12 ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}
              initial={{ opacity: 0, y: 100 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-1/2 rounded-lg shadow-xl"
                whileHover={{ scale: 1.05 }}
              />
              <div className="w-1/2">
                <h3 className="text-2xl font-bold mb-4">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{project.description}</p>
                <a
                  href={project.link}
                  className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;