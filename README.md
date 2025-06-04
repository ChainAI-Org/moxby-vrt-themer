# Moxby VRT Starterkit

A professional Vite + React + TypeScript starterkit with modern design patterns, component systems, and production-ready features.

## ✨ Features

- ⚡ **Lightning Fast** - Built with Vite for instant hot module replacement and blazing fast builds
- 🛡️ **Type Safe** - Full TypeScript support with strict type checking and IntelliSense
- ✨ **Modern Design** - Beautiful, accessible components with dark mode support
- 🚀 **Production Ready** - Optimized for performance with best practices built-in
- 📱 **Responsive** - Mobile-first design that works on all devices
- 🎨 **Design System** - Comprehensive design tokens and component library
- ♿ **Accessible** - WCAG compliant components with proper ARIA attributes
- 🌙 **Dark Mode** - Built-in theme switching with system preference detection

## 🚀 Quick Start

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start development server**
   ```bash
   npm run dev
   ```

3. **Build for production**
   ```bash
   npm run build
   ```

## 📁 Project Structure

```
moxby-vrt/
├── public/                 # Static assets
├── src/
│   ├── components/         # React components
│   │   ├── layout/        # Layout components (Navigation, Footer, etc.)
│   │   └── ui/            # UI components (Button, Input, Modal, etc.)
│   ├── hooks/             # Custom React hooks
│   ├── styles/            # Global styles and design tokens
│   │   ├── tokens.css     # Design system tokens
│   │   ├── globals.css    # Global styles and utilities
│   │   └── animations.css # Animation utilities
│   ├── types/             # TypeScript type definitions
│   ├── utils/             # Utility functions
│   ├── App.tsx           # Main application component
│   └── main.tsx          # Application entry point
├── index.html            # HTML template
├── package.json          # Dependencies and scripts
├── tsconfig.json         # TypeScript configuration
├── vite.config.ts        # Vite configuration
└── README.md            # This file
```

## 🎨 Design System

The starterkit includes a comprehensive design system with:

### Design Tokens
- **Colors**: Primary, secondary, neutral, and feedback colors with light/dark variants
- **Typography**: Font families, sizes, weights, and line heights
- **Spacing**: 8-point grid system for consistent spacing
- **Border Radius**: Small, medium, large, and full radius values
- **Shadows**: Multiple elevation levels for depth
- **Z-Index**: Organized layering system

### Components
- **Button**: Multiple variants (primary, secondary, tertiary, danger) with loading states
- **Input**: Form inputs with validation and error states
- **Card**: Flexible container component with multiple variants
- **Modal**: Accessible modal dialogs with keyboard navigation
- **Navigation**: Responsive navigation with mobile menu
- **Footer**: Comprehensive footer with social links and sections

### Utilities
- **Layout**: Flexbox and grid utilities
- **Spacing**: Margin and padding utilities
- **Typography**: Text size, weight, and alignment utilities
- **Colors**: Background and text color utilities
- **Animations**: Pre-built animation classes

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Important Notes

- **Theme Selector Panel**: The `.theme-selector-panel` is intended for theme development and demonstration purposes only. Ensure it is not visible in development or production builds for end-users. You may want to conditionally render it or remove it entirely before deployment.

### Code Style

The project uses:
- **ESLint** for code linting
- **TypeScript** for type checking
- **Prettier** formatting (recommended to add)

### Adding New Components

1. Create component directory in `src/components/ui/`
2. Add TypeScript component file
3. Add CSS file for styling
4. Export from component directory
5. Add type definitions to `src/types/index.ts`

Example:
```typescript
// src/components/ui/NewComponent/NewComponent.tsx
import React from 'react';
import { NewComponentProps } from '../../../types';
import './NewComponent.css';

export function NewComponent({ children, ...props }: NewComponentProps) {
  return (
    <div className="new-component" {...props}>
      {children}
    </div>
  );
}
```

## 🎯 Best Practices

### Component Development
- Use TypeScript for all components
- Follow the established naming conventions
- Include proper accessibility attributes
- Add hover and focus states
- Support both light and dark themes

### Styling
- Use CSS custom properties (design tokens)
- Follow the 8-point spacing system
- Use semantic class names
- Include responsive breakpoints
- Add smooth transitions

### Performance
- Use React.memo for expensive components
- Implement proper key props for lists
- Optimize images and assets
- Use code splitting when needed

## 🌙 Theme System

The starterkit includes a robust theme system:

### Usage
```typescript
import { useTheme } from './hooks/useTheme';

function MyComponent() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button onClick={toggleTheme}>
      Switch to {theme === 'light' ? 'dark' : 'light'} mode
    </button>
  );
}
```

### Customization
Modify design tokens in `src/styles/tokens.css`:

```css
:root {
  --color-primary-500: #your-color;
  --font-family-sans: 'Your Font', sans-serif;
}
```

## 📱 Responsive Design

The starterkit follows mobile-first design principles:

- **Mobile**: 320px - 767px
- **Tablet**: 768px - 1023px  
- **Desktop**: 1024px+

Use the provided breakpoint utilities:
```css
@media (min-width: 768px) {
  .md\:grid-cols-2 {
    grid-template-columns: repeat(2, 1fr);
  }
}
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Built with [Vite](https://vitejs.dev/)
- Powered by [React](https://reactjs.org/)
- Icons by [Lucide](https://lucide.dev/)
- Inspired by modern design systems

---

Made with ❤️ by Moxby (https://moxby.com)