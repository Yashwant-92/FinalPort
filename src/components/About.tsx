import { TypeAnimation } from 'react-type-animation';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Github, Linkedin, Twitter, X, Instagram } from 'lucide-react';
import { useState } from 'react';

const About = () => {
  const [showResumeModal, setShowResumeModal] = useState(false);
  
  const copyEmail = async () => {
    await navigator.clipboard.writeText('yashwantgadkar@gmail.com');
    alert('Email copied to clipboard!');
  };

  return (
    <>
      <section id="about" className="min-h-screen flex items-center justify-center gap-20 py-20 relative">
        <div className="max-w-xl">
          <h1 className="text-4xl font-bold mb-4">Hi, I am Yashwant</h1>
          <TypeAnimation
            sequence={[
              'Web Developer',
              2000,
              'Full Stack Developer',
              2000,
              'AI Technophile',
              2000,
              'Vibe Coder',
              2000,
            ]}
            wrapper="div"
            speed={50}
            className="text-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text font-bold mb-6"
            repeat={Infinity}
          />
          <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
            I'm Yashwant Gadkar, Aspiring Software Developer with a strong Java, JavaScript, and web
            technologies foundation. Passionate about coding, problem-solving, and
            building efficient applications. Eager to learn and contribute to a dynamic
            development team while growing my technical expertise.
          </p>
          <div className="flex items-center gap-4 mb-6">
            <button onClick={copyEmail} className="flex items-center gap-2 text-blue-500 hover:text-blue-600">
              <Mail className="w-5 h-5" />
              <span>yashwantgadkar@gmail.com</span>
            </button>
          </div>
          <button 
            onClick={() => setShowResumeModal(true)}
            className="bg-blue-500 text-white px-6 py-3 rounded-full hover:bg-blue-600 transition"
          >
            Download Resume
          </button>
        </div>
        
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="relative w-80 h-80 rounded-full overflow-hidden shadow-2xl"
        >
          <img
            src="https://i.postimg.cc/XJb2ZKPq/Whats-App-Image-2025-03-25-at-7-23-16-PM.jpg"
            alt="Profile"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 border-4 border-blue-500 rounded-full" />
        </motion.div>
      </section>

      <AnimatePresence>
        {showResumeModal && (
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
              className="bg-white dark:bg-gray-800 rounded-lg p-8 max-w-md w-full relative"
            >
              <button
                onClick={() => setShowResumeModal(false)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <X className="w-6 h-6" />
              </button>
              
              <h3 className="text-2xl font-bold mb-4">Request Resume</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Please send an email to request my resume. You can also connect with me on social media.
              </p>
              
              <div className="flex flex-col gap-4">
                <a 
                  href="mailto:yashwantgadkar@gmail.com"
                  className="flex items-center gap-2 text-blue-500 hover:text-blue-600"
                >
                  <Mail className="w-5 h-5" />
                  <span>yashwantgadkar@gmail.com</span>
                </a>
                
                <div className="flex gap-4 mt-4">
                  <a href="https://github.com/Yashwant-92" className="text-gray-600 hover:text-blue-500 dark:text-gray-400">
                    <Github className="w-6 h-6" />
                  </a>
                  <a href="www.linkedin.com/in/yashwant-gadkar-85361a220" className="text-gray-600 hover:text-blue-500 dark:text-gray-400">
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <a href="https://www.instagram.com/yashwanttt_gadkar_0304/?hl=en" className="text-gray-600 hover:text-blue-500 dark:text-gray-400">
                    <Instagram className="w-6 h-6" />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default About;
