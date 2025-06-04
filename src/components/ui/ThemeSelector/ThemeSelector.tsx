import React from 'react';
import { useTheme } from '../../../hooks/useTheme';
import { ThemeName } from '../../../types';
import { Button } from '../Button/Button';
import { Moon, Sun, Palette } from 'lucide-react'; // Added Palette
import './ThemeSelector.css';

// Define the order and display names for themes
const availableThemes: { name: ThemeName; displayName: string }[] = [
  // { name: 'default', displayName: 'Default' },
  { name: 'glassmorphic', displayName: 'Glassmorphic' },
  { name: 'tech-focused', displayName: 'Tech Focused' },
  { name: 'bold-vibrant', displayName: 'Bold & Vibrant' },
  { name: 'corporate-professional', displayName: 'Corporate Professional' },
];

export function ThemeSelector() {
  const { activeThemeName, setActiveTheme, currentMode, toggleCurrentMode } = useTheme();

  const cycleNextTheme = () => {
    const currentIndex = availableThemes.findIndex(theme => theme.name === activeThemeName);
    const nextIndex = (currentIndex + 1) % availableThemes.length;
    setActiveTheme(availableThemes[nextIndex].name);
  };

  return (
    <div className="theme-selector-panel">
      {/* Button to cycle through themes */}
      <Button
        variant="secondary"
        size="sm"
        onClick={cycleNextTheme}
        aria-label="Cycle next theme"
        className="theme-selector__cycle-theme-btn" // New class for styling
      >
        <Palette size={18} />
      </Button>

      {/* Button to toggle light/dark mode */}
      <Button
        variant="secondary"
        size="sm"
        onClick={toggleCurrentMode}
        aria-label={`Switch to ${currentMode === 'light' ? 'dark' : 'light'} mode`}
        className="theme-selector__mode-toggle-btn" // New class for styling
      >
        {currentMode === 'light' ? <Moon size={18} /> : <Sun size={18} />}
      </Button>
    </div>
  );
}