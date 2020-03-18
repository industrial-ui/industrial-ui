import {writable} from 'svelte/store';
import themeConstants from './theme-constants';

export default () => {
  const active = localStorage.getItem('stylesheet') || 'semantic';
  theme.update(() => themeConstants.find(style => style.slug === active) || {});
};

export const theme = writable({});
export const changeTheme = (stylesheet) => {
  localStorage.setItem('stylesheet', stylesheet);
  window.location.reload();
};
