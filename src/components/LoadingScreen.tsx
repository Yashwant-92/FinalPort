import { motion, AnimatePresence } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const LoadingScreen = ({ isLoading }: { isLoading: boolean }) => {
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 bg-animate"
        >
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <TypeAnimation
              sequence={[
                'Transforming Ideas...',
                1000,
                'Transforming Ideas into Reality...',
                1000,
              ]}
              wrapper="h1"
              speed={90}
              className="text-5xl font-bold text-white font-serif mb-4"
              repeat={1}
            />
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.7 }}
              className="w-24 h-1 bg-white mx-auto rounded-full"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;