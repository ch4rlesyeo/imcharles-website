import { TAppTheme } from '@/types/common/theme';

export interface IAppThemeState {
  theme: TAppTheme;
  setTheme: (theme: TAppTheme) => void;
  initializeTheme: () => void;
}
