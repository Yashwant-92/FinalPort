import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { X, Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { useState } from 'react';

const certificates = [
  {
    title: "Java Programming",
    image: "https://i.postimg.cc/CLz4x6KJ/1.jpg",
    issuer: "Coursera",
    
  },
  {
    title: "Web Development",
    image: "https://i.postimg.cc/3wHj98Fb/3.jpg",
    issuer: "Coursera"
  },
  {
    title: "Java Testing",
    image: "https://i.postimg.cc/152rncnS/2.jpg",
    issuer: "Coursera"
  },
  {
    title: "IBM Full Stack software developer",
    image: "https://i.postimg.cc/pdYf6w0V/4.jpg",
    issuer: "Coursera"
  },
  {
    title: "GCC-TBC (English -30)Typing",
    image: "https://i.postimg.cc/GmDJk8Gy/5.jpg",
    issuer: "MSCE Pune"
  },
  {
    title: "UI/UX Design",
    image: "https://i.postimg.cc/gJzVFg5V/6.jpg",
    issuer: "Internshala"
  },
  {
    title: "TCS iON career edge",
    image: "https://i.postimg.cc/tTBhXhQL/7.jpg",
    issuer: "TCS iON"
  },
];

const Certificates = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [selectedCert, setSelectedCert] = useState<null | typeof certificates[0]>(null);

  return (
    <>
      <section id="certificates" className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent pointer-events-none"></div>
        <h2 className="text-3xl font-bold text-center mb-12">Certificates</h2>
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group relative cursor-pointer"
              onClick={() => setSelectedCert(cert)}
            >
              <div className="relative overflow-hidden rounded-lg shadow-lg">
                <motion.img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300">
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-center text-white p-4">
                      <h3 className="text-xl font-bold mb-2">{cert.title}</h3>
                      <p className="text-sm">{cert.issuer}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.5 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.5 }}
              className="relative bg-white dark:bg-gray-800 rounded-lg max-w-4xl w-full"
            >
              <button
                onClick={() => setSelectedCert(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <X className="w-6 h-6" />
              </button>
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="w-full rounded-t-lg"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{selectedCert.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{selectedCert.issuer}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Certificates;
