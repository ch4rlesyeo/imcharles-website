import { TAppTheme } from '@/types/common/theme';

export interface IThemeServerProps {
  defaultTheme: TAppTheme;
}

export interface IThemeStoreState {
  theme: TAppTheme;
  isInitialized: boolean;
  setTheme: (theme: TAppTheme) => void;
  initializeTheme: () => void;
}
