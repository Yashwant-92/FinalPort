import { motion } from 'framer-motion';

const Logo = () => {
  return (
    <motion.div
      initial={{ scale: 1 }}
      animate={{ scale: [1, 1.1, 1] }}
      transition={{ 
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className="p-6 rounded-lg backdrop-blur-sm bg-white/10 shadow-lg"
    >
      <span className="text-4xl font-signature text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">
        Yashwant Gadkar
      </span>
    </motion.div>
  );
};

export default Logo;