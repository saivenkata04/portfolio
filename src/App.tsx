import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const navLinks = ['Home', 'About', 'Education', 'Skills', 'Projects', 'DSA', 'Certifications', 'Contact'];

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed w-full z-50 glass-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 font-bold text-xl text-primary-600 dark:text-primary-400">
              Malla Venkata Sai
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-6">
              {navLinks.map((link) => (
                <button
                  key={link}
                  onClick={() => scrollToSection(link)}
                  className="text-sm font-medium hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  {link}
                </button>
              ))}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
                aria-label="Toggle Dark Mode"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 mr-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-slate-600 dark:text-slate-300"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden fixed top-16 w-full glass-card z-40 border-t border-slate-200 dark:border-slate-800"
          >
            <div className="px-4 pt-2 pb-6 space-y-1 shadow-lg">
              {navLinks.map((link) => (
                <button
                  key={link}
                  onClick={() => scrollToSection(link)}
                  className="block w-full text-left px-3 py-3 text-base font-medium hover:bg-slate-100 dark:hover:bg-slate-800 rounded-md"
                >
                  {link}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="pt-16">
        {/* Hero Section */}
        <section id="home" className="min-h-[calc(100vh-4rem)] flex items-center py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                className="order-2 md:order-1"
              >
                <h2 className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-2">Hi, I'm</h2>
                <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary-600 to-indigo-500 dark:from-primary-400 dark:to-indigo-300">
                  Malla Venkata Sai
                </h1>
                <h3 className="text-xl md:text-2xl text-primary-600 dark:text-primary-400 font-medium mb-6">
                  Aspiring Web Developer | DSA & Problem Solving Enthusiast
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-lg mb-8 leading-relaxed max-w-2xl">
                  Aspiring Web Developer with strong expertise in Data Structures & Algorithms and modern web development. Proficient in building responsive, scalable, and user-friendly web applications with clean, intuitive interfaces. Passionate about creating high-quality web experiences and delivering impactful software solutions.
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <button onClick={() => scrollToSection('Projects')} className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg font-medium transition-colors shadow-lg shadow-primary-500/30">
                    View My Projects
                  </button>
                </div>
                <div className="flex gap-6">
                  <a href="https://github.com/saivenkata04" className="text-slate-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-bold text-lg">
                    GH
                  </a>
                  <a href="https://www.linkedin.com/in/malla-venkata-sai-081461268/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-bold text-lg">
                    IN
                  </a>
                  <a href="https://leetcode.com/u/Venky369/" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-bold text-lg">
                    LC
                  </a>
                  <a href="https://www.geeksforgeeks.org/profile/venkatasajjpb" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-bold text-lg">
                    GFG
                  </a>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="order-1 md:order-2 flex justify-center"
              >
                <motion.div
                  className="relative w-64 md:w-80 aspect-[3/4] rounded-3xl overflow-hidden border-4 border-slate-200 dark:border-slate-800 shadow-2xl"
                  animate={{ y: [0, -15, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                >
                  {/* We are pointing to /profile.jpg in the public folder. Please place your photo there and name it profile.jpg */}
                  <img src="/profile.jpg" alt="Malla Venkata Sai" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 ring-4 ring-inset ring-primary-500/20 rounded-3xl pointer-events-none"></div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Continue building other sections based on requirements */}
        <section id="about" className="py-20 bg-slate-100 dark:bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
              <div className="max-w-3xl mx-auto text-lg text-slate-600 dark:text-slate-300 mb-12 text-center">
                I am an aspiring Web Developer with a strong interest in modern web development and Data Structures & Algorithms. I enjoy building responsive and user-friendly web applications while continuously improving my problem-solving and algorithmic skills.
              </div>
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid md:grid-cols-3 gap-8"
              >
                {[
                  { title: "Web Development", num: "01", desc: "Building responsive and intuitive web applications using modern web technologies." },
                  { title: "Problem Solving", num: "02", desc: "Strong focus on Data Structures, Algorithms, logical reasoning, and efficient solutions." },
                  { title: "Software Development", num: "03", desc: "Interested in creating scalable and practical software solutions." }
                ].map((item, i) => (
                  <motion.div variants={itemVariant} whileHover={{ y: -8 }} key={i} className="glass-card p-6 rounded-2xl relative overflow-hidden group hover:border-primary-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/10">
                    <div className="text-5xl font-bold text-slate-200 dark:text-slate-800 mb-4 opacity-50 group-hover:text-primary-100 dark:group-hover:text-primary-900/30 transition-colors">{item.num}</div>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400">{item.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
              <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent dark:before:via-slate-700">

                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-50 dark:border-slate-950 bg-primary-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card p-6 rounded-2xl border-primary-500/30 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                      <h3 className="font-bold text-xl text-primary-600 dark:text-primary-400">B.Tech – AIDS</h3>
                      <span className="text-sm font-medium text-slate-500 dark:text-slate-400">Aug 2024 – Present</span>
                    </div>
                    <h4 className="font-medium text-slate-800 dark:text-slate-200 mb-2">SRKR Engineering College, Bhimavaram</h4>
                    <p className="text-slate-600 dark:text-slate-400">CGPA: <span className="font-semibold text-slate-900 dark:text-white">8.67/10</span></p>
                  </div>
                </div>

                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-50 dark:border-slate-950 bg-slate-300 dark:bg-slate-700 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2"></div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card p-6 rounded-2xl">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                      <h3 className="font-bold text-xl">Intermediate – MPC</h3>
                      <span className="text-sm text-slate-500">2022 – 2024</span>
                    </div>
                    <h4 className="font-medium text-slate-700 dark:text-slate-300 mb-2">Sasi Junior College, Visakhapatnam</h4>
                    <p className="text-slate-600 dark:text-slate-400">Percentage: <span className="font-semibold text-slate-900 dark:text-white">94.1%</span></p>
                  </div>
                </div>

                <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-50 dark:border-slate-950 bg-slate-300 dark:bg-slate-700 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2"></div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card p-6 rounded-2xl">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                      <h3 className="font-bold text-xl">SSC</h3>
                      <span className="text-sm text-slate-500">2021 – 2022</span>
                    </div>
                    <h4 className="font-medium text-slate-700 dark:text-slate-300 mb-2">Vivekananda High School, Palakonda</h4>
                    <p className="text-slate-600 dark:text-slate-400">Percentage: <span className="font-semibold text-slate-900 dark:text-white">94.33%</span> (566/600)</p>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>
        </section>

        {/* Technical Skills Section */}
        <section id="skills" className="py-20 bg-slate-100 dark:bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <h2 className="text-3xl font-bold mb-12 text-center">Technical Skills</h2>
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {[
                  { title: "Programming Languages", skills: ["C", "Java", "Python"] },
                  { title: "Web Technologies", skills: ["HTML", "CSS", "JavaScript"] },
                  { title: "Database & Tools", skills: ["SQL", "Git", "GitHub", "VS Code"] },
                  { title: "Core Concepts", skills: ["Data Structures & Algorithms", "Object-Oriented Programming"] }
                ].map((category, i) => (
                  <motion.div variants={itemVariant} whileHover={{ y: -5 }} key={i} className="glass-card p-6 rounded-2xl border-t-4 border-t-primary-500 transition-all duration-300 hover:shadow-xl">
                    <h3 className="font-bold text-lg mb-4 text-slate-800 dark:text-slate-200">{category.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map(skill => (
                        <span key={skill} className="px-3 py-1 bg-white dark:bg-slate-800 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 shadow-sm border border-slate-200 dark:border-slate-700">{skill}</span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Experience & Projects Section */}
        <section id="projects" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-col gap-12 max-w-4xl mx-auto"
              >
                <motion.div variants={itemVariant} whileHover={{ y: -5 }} className="glass-card rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl transition-all duration-300 hover:shadow-primary-500/10">
                  <div className="p-8 md:p-12">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Automated Timetable Scheduling System</h3>
                        <div className="flex gap-2 flex-wrap mb-4">
                          {["React", "Spring Boot", "PostgreSQL"].map(tech => (
                            <span key={tech} className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium">{tech}</span>
                          ))}
                        </div>
                      </div>
                      <div className="flex gap-3 shrink-0">
                        <a href="#" className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors" title="View Source">
                          <span className="font-bold text-slate-600 dark:text-slate-300">GH</span>
                        </a>
                        <a href="http://localhost:3000/" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors" title="Live Demo">
                          <span className="font-bold text-slate-600 dark:text-slate-300">Live</span>
                        </a>
                      </div>
                    </div>
                    <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                      Built an automated timetable scheduling platform to generate academic schedules by assigning faculty, subjects, classrooms, and time slots.
                    </p>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-red-500"></div> Problem
                        </h4>
                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">Manual academic timetable creation can require significant effort and can result in faculty, classroom, and time-slot conflicts.</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-green-500"></div> Solution
                        </h4>
                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">Developed an automated scheduling platform that generates academic schedules while applying conflict-detection logic.</p>
                      </div>
                    </div>
                    <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800">
                      <h4 className="font-bold text-slate-900 dark:text-white mb-4">Key Features & Impact</h4>
                      <ul className="grid sm:grid-cols-2 gap-3 text-sm text-slate-600 dark:text-slate-400">
                        <li className="flex items-center gap-2">✓ Automated generation</li>
                        <li className="flex items-center gap-2">✓ Conflict detection</li>
                        <li className="flex items-center gap-2">✓ Faculty clash prevention</li>
                        <li className="flex items-center gap-2">✓ Room overlap prevention</li>
                        <li className="flex items-center gap-2">✓ Intuitive dashboard</li>
                        <li className="flex items-center gap-2">✓ Reduced manual effort</li>
                      </ul>
                    </div>
                  </div>
                </motion.div>

                {/* New Project: Crop Disease Prediction */}
                <motion.div variants={itemVariant} whileHover={{ y: -5 }} className="glass-card rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-xl transition-all duration-300 hover:shadow-primary-500/10">
                  <div className="p-8 md:p-12">
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">AI-Powered Crop Disease Prediction</h3>
                        <div className="flex gap-2 flex-wrap mb-4">
                          {["React", "Machine Learning", "Python"].map(tech => (
                            <span key={tech} className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium">{tech}</span>
                          ))}
                        </div>
                      </div>
                      <div className="flex gap-3 shrink-0">
                        <a href="https://github.com/saivenkata04/AI-powered-crop-disease-prediction-website-" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors" title="View Source">
                          <span className="font-bold text-slate-600 dark:text-slate-300">GH</span>
                        </a>
                        <a href="https://ai-powered-crop-disease-prediction.vercel.app/" target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-100 dark:bg-slate-800 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors" title="Live Demo">
                          <span className="font-bold text-slate-600 dark:text-slate-300">Live</span>
                        </a>
                      </div>
                    </div>
                    <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                      Developed an AI-powered web application to help farmers identify and predict crop diseases from images.
                    </p>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-red-500"></div> Problem
                        </h4>
                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">Early detection of crop diseases is crucial for preventing yield loss, but farmers often lack immediate access to agricultural experts.</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-green-500"></div> Solution
                        </h4>
                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">Built a machine learning-based platform that analyzes uploaded crop images to predict diseases and suggest potential treatments.</p>
                      </div>
                    </div>
                    <div className="mt-8 pt-8 border-t border-slate-200 dark:border-slate-800">
                      <h4 className="font-bold text-slate-900 dark:text-white mb-4">Key Features</h4>
                      <ul className="grid sm:grid-cols-2 gap-3 text-sm text-slate-600 dark:text-slate-400">
                        <li className="flex items-center gap-2">✓ AI-based image analysis</li>
                        <li className="flex items-center gap-2">✓ Disease classification</li>
                        <li className="flex items-center gap-2">✓ Fast processing</li>
                        <li className="flex items-center gap-2">✓ Treatment suggestions</li>
                        <li className="flex items-center gap-2">✓ Clean UI/UX</li>
                        <li className="flex items-center gap-2">✓ Accessible online</li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* DSA Section */}
        <section id="dsa" className="py-20 bg-slate-100 dark:bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Problem Solving & DSA</h2>
                <div className="inline-block px-6 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full font-bold text-lg mb-6">
                  100+ Problems Solved
                </div>
                <p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-400">Currently building practical software development experience through academic projects, coding practice, and continuous learning.</p>
              </div>
              <div className="grid md:grid-cols-2 gap-8 items-center max-w-4xl mx-auto">
                <div className="glass-card p-8 rounded-3xl">
                  <h3 className="font-bold text-xl mb-6">Topics Mastered</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Arrays", "Strings", "Trees", "Graphs", "Dynamic Programming", "Greedy Algorithms", "Hashing", "Two Pointers", "Sliding Window"].map(topic => (
                      <span key={topic} className="px-4 py-2 bg-slate-200/50 dark:bg-slate-800/50 rounded-lg text-sm font-medium">{topic}</span>
                    ))}
                  </div>
                </div>
                <div className="space-y-4">
                  <a href="https://leetcode.com/u/Venky369/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-6 glass-card rounded-2xl hover:border-primary-500/50 transition-colors group">
                    <div>
                      <h4 className="font-bold text-lg text-slate-900 dark:text-white mb-1">LeetCode Profile</h4>
                      <p className="text-sm text-slate-500">View detailed statistics and submissions</p>
                    </div>
                    <div className="text-primary-500 opacity-50 group-hover:opacity-100 transition-opacity">→</div>
                  </a>
                  <a href="https://www.geeksforgeeks.org/profile/venkatasajjpb" target="_blank" rel="noopener noreferrer" className="flex items-center justify-between p-6 glass-card rounded-2xl hover:border-primary-500/50 transition-colors group">
                    <div>
                      <h4 className="font-bold text-lg text-slate-900 dark:text-white mb-1">GeeksforGeeks Profile</h4>
                      <p className="text-sm text-slate-500">View problem-solving progress</p>
                    </div>
                    <div className="text-primary-500 opacity-50 group-hover:opacity-100 transition-opacity">→</div>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Certifications */}
        <section id="certifications" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <h2 className="text-3xl font-bold mb-12 text-center">Certifications & Soft Skills</h2>
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto"
              >
                <motion.div variants={itemVariant}>
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <span className="w-8 h-px bg-primary-500"></span>
                    Certifications
                  </h3>
                  <div className="space-y-4">
                    {[
                      { name: "Cisco: Python Essentials 2", year: "2025" },
                      { name: "NPTEL: Programming in Java", year: "2025" },
                      { name: "CLA: Programming Essentials in C", year: "2024" },
                      { name: "Cisco: Python Essentials 1", year: "2024" }
                    ].map((cert, i) => (
                      <div key={i} className="flex justify-between items-center p-4 glass-card rounded-xl">
                        <span className="font-medium text-slate-800 dark:text-slate-200">{cert.name}</span>
                        <span className="text-sm font-bold text-primary-600 dark:text-primary-400">{cert.year}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
                <motion.div variants={itemVariant}>
                  <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                    <span className="w-8 h-px bg-primary-500"></span>
                    Soft Skills
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {["Problem-Solving", "Analytical Thinking", "Logical Reasoning", "Team Collaboration", "Communication Skills"].map((skill, i) => (
                      <div key={i} className="px-5 py-3 glass-card rounded-xl font-medium text-slate-700 dark:text-slate-300">
                        {skill}
                      </div>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-24 bg-primary-900 text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Let's Connect</h2>
              <p className="text-lg md:text-xl text-primary-200 mb-12 max-w-2xl mx-auto">
                Want to know more about my journey? Feel free to reach out to me for opportunities or to discuss tech!
              </p>

              <div className="grid sm:grid-cols-2 gap-8 text-left glass-card bg-white/10 border-white/20 p-8 rounded-3xl backdrop-blur-md">
                <div>
                  <h3 className="font-bold text-xl mb-4 text-white">Contact Info</h3>
                  <div className="space-y-4">
                    <p className="flex items-center gap-3 text-primary-100">
                      <span className="p-2 bg-primary-800 rounded-lg text-white">✉</span>
                      mallasai04@gmail.com
                    </p>
                    <p className="flex items-center gap-3 text-primary-100">
                      <span className="p-2 bg-primary-800 rounded-lg text-white">☎</span>
                      +91 9346285804
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-4 text-white">Send a Message</h3>
                  <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
                    <input type="text" placeholder="Name" className="w-full px-4 py-2 bg-primary-800/50 border border-primary-700 rounded-lg text-white placeholder:text-primary-300 focus:outline-none focus:border-white" />
                    <input type="email" placeholder="Email" className="w-full px-4 py-2 bg-primary-800/50 border border-primary-700 rounded-lg text-white placeholder:text-primary-300 focus:outline-none focus:border-white" />
                    <textarea placeholder="Message" rows={3} className="w-full px-4 py-2 bg-primary-800/50 border border-primary-700 rounded-lg text-white placeholder:text-primary-300 focus:outline-none focus:border-white resize-none"></textarea>
                    <button className="w-full px-4 py-2 bg-white text-primary-900 font-bold rounded-lg hover:bg-slate-100 transition-colors">Send Message</button>
                    <p className="text-xs text-primary-300 text-center mt-2">*Form UI only, requires backend integration</p>
                  </form>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-white mb-2">Malla Venkata Sai</h2>
            <p className="mb-6 text-slate-400">Aspiring Web Developer | DSA & Problem Solving Enthusiast</p>
            <div className="flex justify-center gap-6 mb-8">
              <a href="#" className="hover:text-white transition-colors">GitHub</a>
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="https://leetcode.com/u/Venky369/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LeetCode</a>
              <a href="https://www.geeksforgeeks.org/profile/venkatasajjpb" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GeeksforGeeks</a>
            </div>
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} Malla Venkata Sai. All rights reserved.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
