import { Moon, Sun } from 'lucide-react';

import { useThemeProvider } from '@/providers/theme-provider';

const ThemeSwitch = () => {
  const { theme, setTheme } = useThemeProvider();

  const onChangeTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  const Icon = theme === 'dark' ? Sun : Moon;

  return (
    <span onClick={onChangeTheme} className="cursor-pointer">
      <Icon size={20} className="text-black dark:text-white" />
    </span>
  );
};

export default ThemeSwitch;
