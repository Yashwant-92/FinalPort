import { Moon, Sun } from 'lucide-react';
import { useState } from 'react';

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-white dark:bg-gray-800 rounded-full px-8 py-4 shadow-lg">
      <ul className="flex items-center gap-8">
        <li><a href="#home" className="hover:text-blue-500">Home</a></li>
        <li><a href="#about" className="hover:text-blue-500">About</a></li>
        <li><a href="#education" className="hover:text-blue-500">Academics</a></li>
        <li><a href="#skills" className="hover:text-blue-500">Skills</a></li>
        <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
        <li><a href="#certificates" className="hover:text-blue-500">Certificates</a></li>
        <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
        <li>
          <button onClick={toggleTheme} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;