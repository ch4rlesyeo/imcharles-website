import { TAppTheme } from '@/types/common/theme';

export const getSystemTheme = (): TAppTheme => {
  if (typeof window === 'undefined') return 'dark';

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
};

// Type guard
export const isValidTheme = (value?: string): value is TAppTheme => {
  const validThemes: TAppTheme[] = ['light', 'dark'];

  return value !== undefined && validThemes.includes(value as TAppTheme);
};

export const getDefaultTheme = (theme?: string): TAppTheme => {
  if (isValidTheme(theme)) {
    return theme;
  }

  return 'dark';
};

export const applyTheme = (theme: TAppTheme) => {
  if (typeof window === 'undefined') return;

  const root = document.documentElement;
  root.classList.remove('light', 'dark');
  root.classList.add(theme);
};
