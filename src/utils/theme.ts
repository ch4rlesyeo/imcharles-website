import { TAppTheme } from '@/types/common/theme';

const getSystemTheme = (): 'light' | 'dark' => {
  if (typeof window === 'undefined') return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light';
};

export const getResolvedTheme = (theme: TAppTheme): 'light' | 'dark' => {
  return theme === 'system' ? getSystemTheme() : theme;
};
