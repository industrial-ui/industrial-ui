import {writable, get} from 'svelte/store';
import themeConstants from './theme-constants';
import {stores, goto} from '@sapper/app';

export const DEFAULT_THEME = 'tailwind';

// Simply get a theme object by its theme name
export const pickTheme = (active) => {
  return themeConstants.find(style => style.slug === active) || {};
};

// Change the theme from header by saving it in localStorage
// and by reloading the page
export const changeTheme = (theme) => {
  const {page} = stores();
  const {path} = get(page);
  if (themeConstants.some(style => style.slug === theme)) {
    localStorage.setItem('theme', theme);
    goto(`${path}?theme=${theme}`);
    location.reload();
  }
};

// in onMount time check if there's a different theme in localStorage
export const checkTheme = () => {
  const {page} = stores();
  const {query} = get(page);
  const theme = localStorage.getItem('theme') || null;
  if (theme && theme !== DEFAULT_THEME && !query.theme) changeTheme(theme);
};

// During first(server) load get the theme either from query
// parameter of url or from DEFAULT_THEME
export const getTheme = (query) => {
  let theme;
  if (query.theme) theme = pickTheme(query.theme);
  else theme = pickTheme(DEFAULT_THEME);
  updateTheme(theme);
  return theme;
};

export const updateTheme = (style) => {
  theme.update(() => style);
};

export const theme = writable({});
