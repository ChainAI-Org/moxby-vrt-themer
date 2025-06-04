import React from 'react';
import './Logo.css'; // We'll create this for any specific Logo styling if needed

export function Logo() {
  return (
    <div className="logo-container"> {/* Changed from 'logo' to avoid conflict with Navigation.css's .logo */}
      <div className="logo__icon-wrapper"> {/* Changed from 'logo__icon' */}
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true" focusable="false">
          <defs>
            <linearGradient id="logo-bg-gradient" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
              <stop stopColor="var(--logo-bg-gradient-start)"/>
              <stop offset="1" stopColor="var(--logo-bg-gradient-end)"/>
            </linearGradient>
            <linearGradient id="logo-inner-shape-gradient" x1="12" y1="12" x2="20" y2="20" gradientUnits="userSpaceOnUse">
              <stop stopColor="var(--logo-inner-shape-gradient-start)"/>
              <stop offset="1" stopColor="var(--logo-inner-shape-gradient-end)"/>
            </linearGradient>
          </defs>
          <rect width="32" height="32" rx="8" fill="url(#logo-bg-gradient)"/>
          <path d="M8 12L16 8L24 12V20L16 24L8 20V12Z" fill="var(--logo-shape-fill)" fillOpacity="var(--logo-shape-opacity)"/>
          <path d="M12 14L16 12L20 14V18L16 20L12 18V14Z" fill="url(#logo-inner-shape-gradient)"/>
        </svg>
      </div>
      <span className="logo__text-wrapper">Moxby VRT</span> {/* Changed from 'logo__text' */}
    </div>
  );
}