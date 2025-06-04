import React from 'react';
import { Navigation } from '../Navigation/Navigation';
import { Footer } from '../Footer/Footer';
import './Layout.css';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="layout">
      <Navigation />
      <main className="layout__main">
        {/* Decorative shapes for Glassmorphic theme, styled via Layout.css */}
        <div className="decorative-shape decorative-shape--1" aria-hidden="true"></div>
        <div className="decorative-shape decorative-shape--2" aria-hidden="true"></div>
        {children}
      </main>
      <Footer />
    </div>
  );
}