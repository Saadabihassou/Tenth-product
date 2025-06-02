import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Code2, Zap, BookOpen, Star, Download, Mail, Moon, Sun, LogIn, UserPlus, Menu, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const [email, setEmail] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { toast } = useToast();

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Success!",
        description: "You'll be notified about future launches and updates.",
      });
      setEmail('');
    }
  };

  const handlePurchase = () => {
    toast({
      title: "Redirecting to checkout...",
      description: "You'll be redirected to complete your purchase.",
    });
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const components = [
    { name: 'HTML', href: '#html' },
    { name: 'CSS', href: '#css' },
    { name: 'JavaScript', href: '#javascript' },
    { name: 'Tailwind', href: '#tailwind' },
    { name: 'React', href: '#react' },
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-colors duration-500">
        {/* Header */}
        <header className="container mx-auto px-8 py-6 border-b-2 border-blue-500">
          <div className="flex justify-between items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2"
            >
              <Code2 className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              <span className="text-xl font-semibold text-slate-800 dark:text-white">Frontend Mastery</span>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <div className="flex items-center space-x-6">
                {components.map((component) => (
                  <a
                    key={component.name}
                    href={component.href}
                    className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                  >
                    {component.name}
                  </a>
                ))}
              </div>
              <div className="flex items-center space-x-4">
                <Button variant="outline" size="sm">
                  <LogIn className="h-4 w-4 mr-2" />
                  Login
                </Button>
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                  <UserPlus className="h-4 w-4 mr-2" />
                  Sign Up
                </Button>
                <motion.button
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  onClick={toggleDarkMode}
                  className="p-2 rounded-lg bg-white dark:bg-slate-800 shadow-md hover:shadow-lg transition-all duration-300"
                >
                  {darkMode ? (
                    <Sun className="h-5 w-5 text-yellow-500" />
                  ) : (
                    <Moon className="h-5 w-5 text-slate-600" />
                  )}
                </motion.button>
              </div>
            </nav>

            {/* Mobile menu button */}
            <div className="lg:hidden flex items-center space-x-4">
              <motion.button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg bg-white dark:bg-slate-800 shadow-md hover:shadow-lg transition-all duration-300"
              >
                {darkMode ? (
                  <Sun className="h-5 w-5 text-yellow-500" />
                ) : (
                  <Moon className="h-5 w-5 text-slate-600" />
                )}
              </motion.button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-white dark:bg-slate-800 shadow-md hover:shadow-lg transition-all duration-300"
              >
                {mobileMenuOpen ? (
                  <X className="h-5 w-5 text-slate-600 dark:text-slate-300" />
                ) : (
                  <Menu className="h-5 w-5 text-slate-600 dark:text-slate-300" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:hidden mt-6 pb-6 border-t border-slate-200 dark:border-slate-700 pt-6"
            >
              <div className="flex flex-col space-y-4">
                {components.map((component) => (
                  <a
                    key={component.name}
                    href={component.href}
                    className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 py-2"
                  >
                    {component.name}
                  </a>
                ))}
                <div className="flex flex-col space-y-3 pt-4">
                  <Button variant="outline" size="sm">
                    <LogIn className="h-4 w-4 mr-2" />
                    Login
                  </Button>
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                    <UserPlus className="h-4 w-4 mr-2" />
                    Sign Up
                  </Button>
                </div>
              </div>
            </motion.nav>
          )}
        </header>

        {/* Hero Section */}
        <section className="container mx-auto px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 px-4 py-2">
                <Zap className="h-4 w-4 mr-2" />
                Digital Download • Instant Access
              </Badge>
              
              <h1 className="text-5xl lg:text-6xl font-semibold text-slate-900 dark:text-white leading-tight">
                Code Faster,{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Smarter
                </span>
                , Cleaner
              </h1>
              
              <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed">
                Master frontend development with our comprehensive cheatsheet. 
                <strong className="text-slate-800 dark:text-white"> 100+ essential tips</strong>, 
                code snippets, and shortcuts for HTML, CSS, JavaScript, and Tailwind CSS 
                — all in one beautifully designed 20+ page PDF.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={handlePurchase}
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Download className="h-5 w-5 mr-2" />
                  Download Now for $9
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-slate-300 dark:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-800 px-8 py-4 text-lg"
                >
                  <BookOpen className="h-5 w-5 mr-2" />
                  Preview Sample
                </Button>
              </div>
            </motion.div>
            
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="bg-white dark:bg-slate-800 shadow-2xl border-0 overflow-hidden rounded-2xl">
                <CardContent className="p-8">
                  <div className="bg-gradient-to-br from-slate-900 to-slate-700 rounded-lg p-6 text-green-400 font-mono text-sm">
                    <div className="flex items-center space-x-2 mb-4">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="space-y-2">
                      <div>{'// CSS Flexbox Cheat'}</div>
                      <div>{'display: flex;'}</div>
                      <div>{'justify-content: center;'}</div>
                      <div>{'align-items: center;'}</div>
                      <div className="text-blue-400">{'/* Perfect centering! */'}</div>
                    </div>
                  </div>
                  <div className="mt-6 space-y-3">
                    <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded w-3/4"></div>
                    <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded w-1/2"></div>
                    <div className="h-2 bg-slate-200 dark:bg-slate-700 rounded w-5/6"></div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-8 py-20">
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="text-4xl font-semibold text-slate-900 dark:text-white mb-4">
              Everything You Need to Level Up
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
              From beginner-friendly basics to advanced optimization techniques
            </p>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
          >
            {[
              {
                icon: <Code2 className="h-8 w-8" />,
                title: "100+ Code Snippets",
                description: "Ready-to-use code examples for HTML, CSS, JavaScript, and Tailwind CSS"
              },
              {
                icon: <Zap className="h-8 w-8" />,
                title: "Performance Tips",
                description: "Optimization techniques and best practices to make your code lightning fast"
              },
              {
                icon: <BookOpen className="h-8 w-8" />,
                title: "Visual Examples",
                description: "Beautiful layouts and interactive examples that you can copy and customize"
              }
            ].map((feature, index) => (
              <motion.div key={index} variants={fadeInUp} className="relative">
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 bg-white dark:bg-slate-800 rounded-xl">
                  <CardContent className="p-8 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-2xl mb-6">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* What's Inside Section */}
        <section className="container mx-auto px-8 py-20">
          <motion.div 
            className="bg-white dark:bg-slate-800 rounded-3xl p-12 shadow-2xl"
            {...fadeInUp}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-semibold text-slate-900 dark:text-white mb-6">
                  What's Inside the Cheatsheet?
                </h2>
                <div className="space-y-4">
                  {[
                    "HTML5 semantic elements and accessibility tips",
                    "CSS Grid and Flexbox mastery guide",
                    "JavaScript ES6+ features and shortcuts",
                    "Tailwind CSS utility classes and components",
                    "Responsive design patterns and breakpoints",
                    "Performance optimization techniques",
                    "Browser developer tools shortcuts",
                    "Git commands and workflow tips"
                  ].map((item, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-slate-700 dark:text-slate-300">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl blur-2xl opacity-20"></div>
                <div className="relative bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-800 rounded-2xl p-8 text-center">
                  <BookOpen className="h-16 w-16 text-blue-600 dark:text-blue-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mb-2">20+ Pages</h3>
                  <p className="text-slate-600 dark:text-slate-300">of curated content</p>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Testimonial Section */}
        <section className="container mx-auto px-8 py-20">
          <motion.div 
            className="text-center mb-16"
            {...fadeInUp}
          >
            <h2 className="text-4xl font-semibold text-slate-900 dark:text-white mb-4">
              Loved by Developers
            </h2>
          </motion.div>
          
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
          >
            {[
              {
                name: "Sarah Chen",
                role: "Frontend Developer",
                content: "This cheatsheet saved me hours of googling. The code snippets are exactly what I needed for my daily work.",
                rating: 5
              },
              {
                name: "Mike Rodriguez",
                role: "Web Developer",
                content: "Perfect for quick reference! The Tailwind CSS section alone is worth the price. Highly recommended.",
                rating: 5
              },
              {
                name: "Emily Johnson",
                role: "Junior Developer",
                content: "As someone new to frontend development, this guide helped me understand best practices quickly.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="h-full bg-white dark:bg-slate-800 border-0 shadow-lg">
                  <CardContent className="p-8">
                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-slate-700 dark:text-slate-300 mb-6 italic">
                      "{testimonial.content}"
                    </p>
                    <div>
                      <div className="font-semibold text-slate-900 dark:text-white">
                        {testimonial.name}
                      </div>
                      <div className="text-sm text-slate-500 dark:text-slate-400">
                        {testimonial.role}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-8 py-20">
          <motion.div 
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-center text-white"
            {...fadeInUp}
          >
            <h2 className="text-4xl lg:text-5xl font-semibold mb-6">
              Ready to Master Frontend Development?
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Join thousands of developers who have already leveled up their skills. 
              Get instant access to your digital download.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={handlePurchase}
                size="lg" 
                className="bg-white text-blue-600 hover:bg-slate-100 px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Download className="h-5 w-5 mr-2" />
                Get Instant Access - $9
              </Button>
            </div>
            <p className="text-sm mt-4 opacity-75">
              30-day money-back guarantee • Instant download • PDF format
            </p>
          </motion.div>
        </section>

        {/* Email Signup Section */}
        <section className="container mx-auto px-8 py-20">
          <motion.div 
            className="bg-white dark:bg-slate-800 rounded-3xl p-12 text-center shadow-xl"
            {...fadeInUp}
          >
            <Mail className="h-12 w-12 text-blue-600 dark:text-blue-400 mx-auto mb-6" />
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
              Get notified about new cheatsheets, updates, and exclusive developer resources.
            </p>
            <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto flex gap-4">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1"
                required
              />
              <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                Subscribe
              </Button>
            </form>
          </motion.div>
        </section>

        {/* Footer */}
        <footer className="container mx-auto px-8 py-12 text-center text-slate-600 dark:text-slate-400">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Code2 className="h-6 w-6 text-blue-600 dark:text-blue-400" />
            <span className="font-semibold">Frontend Mastery Cheatsheet</span>
          </div>
          <p>&copy; 2024 Frontend Mastery. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
