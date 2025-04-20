import { Github, Linkedin, Mail, Twitter } from 'lucide-react';
import { useState, FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Basic validation to prevent empty submissions
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill in all fields.");
      setIsLoading(false);
      return;
    }

    try {
      await emailjs.send(
        'service_iyi1vgh',  // Replace with your EmailJS Service ID
        'template_6wqrqdy', // Replace with your EmailJS Template ID
        {
          name: formData.name,    // Ensure this matches EmailJS template {{name}}
          email: formData.email,  // Ensure this matches EmailJS template {{email}}
          message: formData.message,  // Ensure this matches EmailJS template {{message}}
        },
        'ShFEhTNycQs9bqMri' // Replace with your EmailJS Public Key
      );

      setShowSuccessModal(true);
      setFormData({ name: '', email: '', message: '' }); // Clear form after success
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="min-h-screen py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Let's Connect!</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Get in touch</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-lg border dark:bg-gray-800 dark:border-gray-700"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-lg border dark:bg-gray-800 dark:border-gray-700"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border dark:bg-gray-800 dark:border-gray-700"
                ></textarea>
              </div>
              <button 
                type="submit"
                disabled={isLoading}
                className="bg-blue-500 text-white px-8 py-3 rounded-full hover:bg-blue-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-6">Connect with me</h3>
            <div className="space-y-4">
              <a href="#" className="flex items-center gap-4 text-lg hover:text-blue-500">
                <Github className="w-6 h-6" />
                GitHub
              </a>
              <a href="#" className="flex items-center gap-4 text-lg hover:text-blue-500">
                <Linkedin className="w-6 h-6" />
                LinkedIn
              </a>
              <a href="#" className="flex items-center gap-4 text-lg hover:text-blue-500">
                <Twitter className="w-6 h-6" />
                Twitter
              </a>
              <a href="mailto:yashgadkar7030@gmail.com" className="flex items-center gap-4 text-lg hover:text-blue-500">
                <Mail className="w-6 h-6" />
                Email
              </a>
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {showSuccessModal && (
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
              className="bg-white dark:bg-gray-800 rounded-lg p-8 max-w-md w-full text-center"
            >
              <h3 className="text-2xl font-bold mb-4">Message Sent!</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Thank you for reaching out. I'll get back to you soon!
              </p>
              <button
                onClick={() => setShowSuccessModal(false)}
                className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;
