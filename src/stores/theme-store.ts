import Cookies from 'universal-cookie';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { ECookieNames } from '@/types/common/cookie';
import { IThemeServerProps, IThemeStoreState } from '@/types/stores/theme';
import { applyTheme } from '@/utils/theme';

const cookies = new Cookies();

export const createThemeStore = (props: IThemeServerProps) => {
  const { defaultTheme } = props;

  return create<IThemeStoreState>()(
    persist(
      (set, get) => ({
        theme: defaultTheme,
        isInitialized: false,
        setTheme: (nextTheme) => {
          applyTheme(nextTheme);

          set({ theme: nextTheme });
        },
        initializeTheme: () => {
          const cookies = new Cookies();

          const userTheme = cookies.get(ECookieNames.USER_THEME) || get().theme;

          set({ theme: userTheme, isInitialized: true });
        }
      }),
      {
        name: ECookieNames.USER_THEME, // Cookie name
        storage: {
          getItem: (name: string) => {
            return cookies.get(name);
          },
          setItem: (name, value) => {
            cookies.set(name, value.state.theme, { path: '/' });
          },
          removeItem: (name: string) => {
            cookies.remove(name, { path: '/' });
          }
        }
      }
    )
  );
};
