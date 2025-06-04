import React, { useState } from 'react';
import { useTheme } from '../../../hooks/useTheme';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { Button } from '../../ui/Button/Button';
import { Logo } from '../../ui/Logo/Logo'; // Import the new Logo component
import { cn } from '../../../utils';
import './Navigation.css';

export function Navigation() {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigationItems = [
    { label: 'Home', href: '#home' },
    { label: 'Features', href: '#features' },
    { label: 'Demo', href: '#demo' },
    { label: 'Docs', href: '#docs' },
  ];

  return (
    <nav className="navigation">
      <div className="container">
        <div className="navigation__content">
          {/* Logo */}
          <div className="navigation__logo">
            {/* Replace inline SVG with the Logo component */}
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <div className="navigation__links">
            {navigationItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="navigation__link"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="navigation__actions">
            <Button
              variant="tertiary"
              size="sm"
              onClick={toggleTheme}
              className="theme-toggle"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="tertiary"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="mobile-menu-toggle"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={cn('navigation__mobile', {
          'navigation__mobile--open': isMobileMenuOpen
        })}>
          <div className="navigation__mobile-links">
            {navigationItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="navigation__mobile-link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}