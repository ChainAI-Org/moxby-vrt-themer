import { useState, useEffect, useCallback } from 'react';
import { ThemeName, SystemTheme } from '../types'; // Using SystemTheme for mode type

const DEFAULT_THEME_NAME: ThemeName = 'glassmorphic'; // As per plan
const DEFAULT_MODE: SystemTheme['mode'] = 'light';

export function useTheme() {
  const [activeThemeName, setActiveThemeNameState] = useState<ThemeName>(() => {
    const storedThemeName = localStorage.getItem('activeThemeName');
    return (storedThemeName as ThemeName) || DEFAULT_THEME_NAME;
  });

  const [currentMode, setCurrentModeState] = useState<SystemTheme['mode']>(() => {
    const storedMode = localStorage.getItem('currentMode');
    if (storedMode === 'light' || storedMode === 'dark') {
      return storedMode;
    }
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return DEFAULT_MODE;
  });

  useEffect(() => {
    const root = document.documentElement;

    // Set theme name attribute
    if (activeThemeName && activeThemeName !== 'default') {
      root.setAttribute('data-theme-name', activeThemeName);
    } else {
      root.removeAttribute('data-theme-name');
    }

    // Set mode attribute (for dark/light)
    // This will be 'dark' or 'light'.
    // The base light theme styles in :root will apply if data-mode is not 'dark' or if it's 'light'.
    // The base dark theme styles in [data-theme="dark"] will now become [data-mode="dark"]
    if (currentMode === 'dark') {
      root.setAttribute('data-mode', 'dark');
    } else {
      root.setAttribute('data-mode', 'light'); // Explicitly set light or remove attribute
      // root.removeAttribute('data-mode'); // Alternative: remove for light
    }
    
    // For backward compatibility with existing [data-theme="dark"] styles for the default theme
    // and to ensure App.tsx utilities like `dark:bg-gray-900` work with the default theme.
    if (activeThemeName === 'default') {
        if (currentMode === 'dark') {
            root.setAttribute('data-theme', 'dark');
        } else {
            root.removeAttribute('data-theme');
        }
    } else {
        root.removeAttribute('data-theme'); // Remove old combined attribute if a named theme is active
    }

    localStorage.setItem('activeThemeName', activeThemeName);
    localStorage.setItem('currentMode', currentMode);
  }, [activeThemeName, currentMode]);

  const setActiveTheme = useCallback((themeName: ThemeName) => {
    setActiveThemeNameState(themeName);
    // Optional: Reset mode to theme's preferred default, or keep current mode.
    // For now, keeping current mode unless it's a new theme selection.
    // If changing theme, maybe default to its light variant or its inherent mode.
    // Let's default to 'light' mode when a new theme is explicitly set,
    // unless the theme is 'default' which should respect existing mode.
    if (themeName !== 'default') {
        // setCurrentModeState(DEFAULT_MODE); // Or theme's preferred mode
    }
  }, []);

  const toggleCurrentMode = useCallback(() => {
    setCurrentModeState(prev => (prev === 'light' ? 'dark' : 'light'));
  }, []);

  return {
    activeThemeName,
    currentMode,
    setActiveTheme,
    toggleCurrentMode,
    // For convenience, if components still expect the old 'theme' and 'toggleTheme'
    theme: currentMode, // backward compatibility for old 'theme' variable if needed
    toggleTheme: toggleCurrentMode, // backward compatibility
  };
}