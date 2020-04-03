import {writable} from 'svelte/store';
import themeConstants from './theme-constants';

export const DEFAULT_THEME = 'tailwind';

export const pickTheme = (active) => {
  // const active = localStorage.getItem('stylesheet') || DEFAULT_THEME;
  return themeConstants.find(style => style.slug === active) || {};
};

export const theme = writable(pickTheme(DEFAULT_THEME));
export const changeTheme = (stylesheet) => {
  // localStorage.setItem('stylesheet', stylesheet);
  // window.location.reload();
  theme.update(() => pickTheme(stylesheet));
};
