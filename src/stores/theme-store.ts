import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { IAppThemeState } from '@/types/stores/theme';
import { getResolvedTheme } from '@/utils/theme';

export const useThemeStore = create<IAppThemeState>()(
  persist(
    (set, get) => ({
      theme: 'dark',
      setTheme: (theme) => {
        set({ theme });
      },
      initializeTheme: () => {
        const { theme } = get();

        if (theme === 'system') {
          const resolvedTheme = getResolvedTheme(theme);

          set({ theme: resolvedTheme });
        }
      }
    }),
    {
      name: 'theme-storage',
      partialize: (state) => ({
        theme: state.theme
      })
    }
  )
);
