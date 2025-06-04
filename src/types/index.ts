export type ThemeName = 'glassmorphic' | 'tech-focused' | 'bold-vibrant' | 'corporate-professional' | 'default'; // 'default' can be the base light/dark

export interface ThemeContextType {
  theme: ThemeName;
  setTheme: (themeName: ThemeName) => void;
  isDarkMode: boolean; // To easily know if current theme variation is dark
  toggleDarkMode: () => void; // To toggle between light/dark variants of the *current* theme
}

// This existing Theme interface might be for the light/dark mode toggle, let's clarify its use or rename.
// For now, I'll assume it's related to the light/dark aspect of any given theme.
export interface SystemTheme { // Renamed to avoid conflict, might be merged into ThemeContextType
  mode: 'light' | 'dark';
}


export interface NavigationItem {
  id: string;
  label: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
  external?: boolean;
}

export interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'tertiary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

export interface InputProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  type?: 'text' | 'email' | 'password' | 'number';
  disabled?: boolean;
  error?: string;
  required?: boolean;
  className?: string;
}

export interface CardProps {
  children: React.ReactNode;
  variant?: 'default' | 'elevated' | 'outlined';
  padding?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  style?: React.CSSProperties;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export interface TooltipProps {
  content: string;
  children: React.ReactNode;
  position?: 'top' | 'bottom' | 'left' | 'right';
  delay?: number;
}