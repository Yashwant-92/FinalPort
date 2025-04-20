import { motion } from 'framer-motion';

const skills = [
  { 
    name: 'Java Core', 
    icon: '☕', 
    color: 'text-red-600 dark:text-red-400'
  },
  { 
    name: 'JavaScript', 
    icon: '📜', 
    color: 'text-yellow-500 dark:text-yellow-300'
  },
  { 
    name: 'TypeScript', 
    icon: '🔷', 
    color: 'text-blue-500 dark:text-blue-300'
  },
  { 
    name: 'HTML', 
    icon: '🌐', 
    color: 'text-orange-600 dark:text-orange-400'
  },
  { 
    name: 'CSS', 
    icon: '🎨', 
    color: 'text-blue-600 dark:text-blue-400'
  },
  { 
    name: 'Angular', 
    icon: '🔺', 
    color: 'text-red-500 dark:text-red-300'
  },
  { 
    name: 'Bootstrap', 
    icon: '🅱️', 
    color: 'text-purple-600 dark:text-purple-400'
  },
  { 
    name: 'Spring Boot', 
    icon: '🍃', 
    color: 'text-green-500 dark:text-green-300'
  },
  { 
    name: 'Spring MVC', 
    icon: '🌱', 
    color: 'text-green-600 dark:text-green-400'
  },
  { 
    name: 'RESTful APIs', 
    icon: '🔌', 
    color: 'text-indigo-500 dark:text-indigo-300'
  },
  { 
    name: 'Hibernate', 
    icon: '🗄️', 
    color: 'text-yellow-600 dark:text-yellow-400'
  },
  { 
    name: 'MySQL', 
    icon: '🐬', 
    color: 'text-blue-700 dark:text-blue-500'
  },
  { 
    name: 'Oracle', 
    icon: '🔲', 
    color: 'text-red-700 dark:text-red-500'
  },
  { 
    name: 'Git', 
    icon: '🌿', 
    color: 'text-orange-500 dark:text-orange-300'
  },
  { 
    name: 'GitHub', 
    icon: '🐱', 
    color: 'text-gray-700 dark:text-gray-300'
  },
  { 
    name: 'Maven', 
    icon: '📦', 
    color: 'text-orange-600 dark:text-orange-400'
  },
  { 
    name: 'Eclipse', 
    icon: '🌓', 
    color: 'text-purple-500 dark:text-purple-300'
  },
  { 
    name: 'VS Code', 
    icon: '💻', 
    color: 'text-blue-500 dark:text-blue-300'
  },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12">Skills</h2>
      <div className="overflow-hidden">
        <motion.div
          animate={{ x: [0, -50 * skills.length] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-8 whitespace-nowrap"
        >
          {[...skills, ...skills].map((skill, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-40 h-40 bg-white dark:bg-gray-800 rounded-lg shadow-lg flex flex-col items-center justify-center group hover:bg-blue-50 dark:hover:bg-gray-700 transition-all duration-300"
            >
              <div className={`text-4xl group-hover:scale-110 transition-transform duration-300 ${skill.color}`}>
                {skill.icon}
              </div>
              <span className="font-medium mt-4 text-center px-2">{skill.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;