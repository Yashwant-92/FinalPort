import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const education = [
    {
      degree: "Masters In Computer Application",
      year: "2023 - 2025",
      institution: "Saraswati College Shegaon | Amravati University",
      score: "CGPA: 8.0"
    },
    {
      degree: "Bachelor's Of Science (B.Sc)",
      year: "2020 - 2023",
      institution: "Shri. D. M. B. Science & Art's College Shegaon | Amravati University",
      score: "Marks: 75.85%"
    },
    {
      degree: "HSC",
      year: "2018 - 2020",
      institution: "R. P. M. G. College Shegaon | Amravati University",
      score: "Marks: 64%"
    },
    {
      degree: "SSC",
      year: "2017 - 2018",
      institution: "Shri. M. B. B. V. Shegaon | Amravati University",
      score: "Marks: 76.40%"
    }
  ];

  return (
    <section id="education" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/10 to-transparent pointer-events-none"></div>
      <h2 className="text-3xl font-bold text-center mb-12">Educational Background</h2>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto"
      >
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-500"></div>
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative mb-8 ${index % 2 === 0 ? 'pr-8 ml-auto' : 'pl-8'} w-1/2`}
            >
              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                <div className="absolute top-6 w-4 h-4 rounded-full bg-blue-500 z-10"
                  style={{ [index % 2 === 0 ? 'left' : 'right']: '-8px' }}
                ></div>
                <h3 className="text-xl font-bold mb-2">{edu.degree}</h3>
                <p className="text-blue-500 mb-2">{edu.year}</p>
                <p className="text-gray-600 dark:text-gray-300 mb-2">{edu.institution}</p>
                <p className="font-semibold">{edu.score}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Education;