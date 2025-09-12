'use client';

import { createContext, ReactNode, useContext, useMemo } from 'react';

import { createThemeStore } from '@/stores/theme-store';
import { IThemeServerProps } from '@/types/stores/theme';

const ThemeContext = createContext<ReturnType<typeof createThemeStore> | null>(
  null
);

export const ThemeProvider = ({
  children,
  serverProps
}: {
  children: ReactNode;
  serverProps: IThemeServerProps;
}) => {
  const store = useMemo(() => createThemeStore(serverProps), [serverProps]);

  return (
    <ThemeContext.Provider value={store}>{children}</ThemeContext.Provider>
  );
};

export function useThemeProvider() {
  const store = useContext(ThemeContext);

  if (!store) {
    throw new Error('useThemeProvider must be used within ThemeProvider');
  }

  return store();
}
