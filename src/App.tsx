import React from 'react';
import { Layout } from './components/layout/Layout/Layout';
import { Button } from './components/ui/Button/Button';
import { Card } from './components/ui/Card/Card';
import { Input } from './components/ui/Input/Input';
import { Modal } from './components/ui/Modal/Modal';
import { ThemeSelector } from './components/ui/ThemeSelector/ThemeSelector'; // Import ThemeSelector
import { useTheme } from './hooks/useTheme';
import { useState } from 'react';
import { Sparkles, Zap, Shield, Rocket } from 'lucide-react';

function App() {
  const { theme, toggleTheme } = useTheme();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState('');

  const features = [
    {
      icon: Zap,
      title: 'Lightning Fast',
      description: 'Built with Vite for instant hot module replacement and blazing fast builds.',
    },
    {
      icon: Shield,
      title: 'Type Safe',
      description: 'Full TypeScript support with strict type checking and IntelliSense.',
    },
    {
      icon: Sparkles,
      title: 'Modern Design',
      description: 'Beautiful, accessible components with dark mode support.',
    },
    {
      icon: Rocket,
      title: 'Production Ready',
      description: 'Optimized for performance with best practices built-in.',
    },
  ];

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="text-center hero-section hero-viewport-height"> {/* Replaced Tailwind min-h with custom class */}
          <div className="container">
            <div className="animate-slide-in-up">
              {/* Removed from-blue-600 and to-purple-600, will be handled by theme-specific H1 styles */}
              <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r bg-clip-text text-transparent">
                Moxby VRT Starterkit
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
                A professional Vite + React + TypeScript starterkit with modern design patterns, 
                component systems, and production-ready features.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Button 
                  variant="primary" 
                  size="lg"
                  onClick={() => setIsModalOpen(true)}
                >
                  Get Started
                </Button>
                <Button 
                  variant="secondary" 
                  size="lg"
                  onClick={toggleTheme}
                >
                  Toggle {theme === 'light' ? 'Dark' : 'Light'} Mode
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20"> {/* Removed bg-gray-50 dark:bg-gray-900 */}
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Why Choose This Starterkit?</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Everything you need to build modern web applications with confidence.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <Card 
                  key={feature.title}
                  variant="elevated"
                  className="text-center hover-lift transition-all animate-slide-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="p-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Demo Section */}
        <section className="py-20">
          <div className="container">
            {/* Add ThemeSelector here */}
            <div className="mb-12 flex justify-center">
              <ThemeSelector />
            </div>
            
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Interactive Demo</h2>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  Try out the components and see the design system in action.
                </p>
              </div>

              <Card variant="elevated" className="p-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Newsletter Signup</h3>
                    <div className="space-y-4">
                      <Input
                        label="Email Address"
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={setEmail}
                        required
                      />
                      <div className="flex gap-3">
                        <Button 
                          variant="primary" 
                          onClick={() => {
                            if (email) {
                              alert(`Thanks for subscribing with ${email}!`);
                              setEmail('');
                            }
                          }}
                          disabled={!email}
                        >
                          Subscribe
                        </Button>
                        <Button 
                          variant="tertiary"
                          onClick={() => setEmail('')}
                        >
                          Clear
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="border-t pt-6">
                    <h3 className="text-xl font-semibold mb-4">Button Variants</h3>
                    <div className="flex gap-3 flex-wrap">
                      <Button variant="primary">Primary</Button>
                      <Button variant="secondary">Secondary</Button>
                      <Button variant="tertiary">Tertiary</Button>
                      <Button variant="danger">Danger</Button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Modal Demo */}
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Welcome to Moxby VRT!"
          size="md"
        >
          <div className="space-y-4">
            <p>
              This starterkit includes everything you need to build modern web applications:
            </p>
            <ul className="list-disc list-inside space-y-2 text-sm">
              <li>Vite for fast development and building</li>
              <li>React 18 with TypeScript</li>
              <li>Modern CSS with design tokens</li>
              <li>Comprehensive component library</li>
              <li>Dark mode support</li>
              <li>Responsive design patterns</li>
              <li>Accessibility best practices</li>
            </ul>
            <div className="flex gap-3 pt-4">
              <Button 
                variant="primary" 
                onClick={() => setIsModalOpen(false)}
              >
                Get Started
              </Button>
              <Button 
                variant="tertiary" 
                onClick={() => setIsModalOpen(false)}
              >
                Close
              </Button>
            </div>
          </div>
        </Modal>
      </div>
    </Layout>
  );
}

export default App;