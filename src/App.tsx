import { useEffect, useState } from 'react';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Education from './components/Education';
import Certificates from './components/Certificates';
import Footer from './components/Footer';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <LoadingScreen isLoading={isLoading} />
      <div className="bg-gradient-to-br from-white to-gray-100 dark:from-gray-900 dark:to-black min-h-screen text-gray-900 dark:text-white relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent pointer-events-none"></div>
        <main className="container mx-auto px-4 relative">
          <About />
          <Education />
          <Skills />
          <Projects />
          <Certificates />
          <Contact />
        </main>
        <Navbar />
        <Footer />
      </div>
    </>
  );
}

export default App;