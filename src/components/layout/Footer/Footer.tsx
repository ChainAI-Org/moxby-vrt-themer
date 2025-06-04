import React from 'react';
import { Heart, Github, Twitter, Linkedin } from 'lucide-react';
import { Logo } from '../../ui/Logo/Logo'; // Import the Logo component
import './Footer.css';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  const footerLinks = [
    {
      title: 'Product',
      links: [
        { label: 'Features', href: '#features' },
        { label: 'Documentation', href: '#docs' },
        { label: 'Examples', href: '#examples' },
        { label: 'Changelog', href: '#changelog' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Getting Started', href: '#getting-started' },
        { label: 'Components', href: '#components' },
        { label: 'Design System', href: '#design-system' },
        { label: 'Best Practices', href: '#best-practices' },
      ],
    },
    {
      title: 'Community',
      links: [
        { label: 'Discord', href: '#discord' },
        { label: 'GitHub Discussions', href: '#discussions' },
        { label: 'Stack Overflow', href: '#stackoverflow' },
        { label: 'Contributing', href: '#contributing' },
      ],
    },
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          {/* Logo and Description */}
          <div className="footer__brand">
            <div className="footer__logo">
              {/* Replace inline SVG with the Logo component */}
              <Logo />
            </div>
            <p className="footer__description">
              A professional Vite + React + TypeScript starterkit with modern design patterns, 
              component systems, and production-ready features.
            </p>
            <div className="footer__social">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="footer__social-link"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          <div className="footer__links">
            {footerLinks.map((section) => (
              <div key={section.title} className="footer__section">
                <h3 className="footer__section-title">{section.title}</h3>
                <ul className="footer__section-links">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a href={link.href} className="footer__link">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer__bottom">
          <div className="footer__copyright">
            <p>
              © {currentYear} Moxby VRT. Made with{' '}
              <Heart size={16} className="footer__heart" />{' '}
              by Moxby.
            </p>
          </div>
          <div className="footer__legal">
            <a href="#privacy" className="footer__legal-link">Privacy Policy</a>
            <a href="#terms" className="footer__legal-link">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}