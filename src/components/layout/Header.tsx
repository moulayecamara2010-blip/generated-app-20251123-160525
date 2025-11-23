import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NAV_LINKS } from '@/lib/constants';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
const Logo = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 150 25"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    aria-label="Inclusion & Impact Logo"
  >
    <style>
      {`
        .logo-text-1 { fill: #1B4F72; font-family: Montserrat, sans-serif; font-size: 15px; font-weight: 700; }
        .logo-text-2 { fill: #E07856; font-family: Montserrat, sans-serif; font-size: 15px; font-weight: 700; }
        .logo-text-3 { fill: #1B7F79; font-family: Montserrat, sans-serif; font-size: 15px; font-weight: 700; }
      `}
    </style>
    <text x="0" y="18" className="logo-text-1">Inclusion</text>
    <text x="80" y="18" className="logo-text-2">&</text>
    <text x="95" y="18" className="logo-text-3">Impact</text>
  </svg>
);
export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-soft-sand/80 backdrop-blur-lg shadow-md' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center">
            <Logo className="w-auto h-10 hidden lg:block" />
            <Logo className="w-auto h-8 lg:hidden" />
          </Link>
          <nav className="hidden lg:flex items-center space-x-6">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.name}
                to={link.href}
                className={({ isActive }) =>
                  cn(
                    'font-sans font-semibold text-charcoal hover:text-deep-teal transition-colors duration-200 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-warm-coral after:transition-all after:duration-300 hover:after:w-full',
                    isActive ? 'text-deep-teal after:w-full' : ''
                  )
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
          <div className="lg:hidden">
            <Button onClick={toggleMenu} variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="lg:hidden absolute top-0 inset-x-0 p-2 transition transform origin-top-right"
          >
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-soft-sand divide-y-2 divide-gray-200">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <Link to="/" className="flex items-center">
                     <Logo className="w-auto h-8" />
                  </Link>
                  <div className="-mr-2">
                    <Button onClick={toggleMenu} variant="ghost" size="icon">
                      <X className="h-6 w-6" />
                    </Button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-8">
                    {NAV_LINKS.map((link) => (
                      <NavLink
                        key={link.name}
                        to={link.href}
                        onClick={toggleMenu}
                        className={({ isActive }) =>
                          cn(
                            'font-sans font-semibold text-lg text-charcoal hover:text-deep-teal',
                            isActive ? 'text-deep-teal' : ''
                          )
                        }
                      >
                        {link.name}
                      </NavLink>
                    ))}
                  </nav>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}