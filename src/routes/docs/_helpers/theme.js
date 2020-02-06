import {writable} from 'svelte/store';
import themes from './theme-constants';

export const theme = writable(themes[0]);

export const changeTheme = (themeName) => {
  theme.update(() => themes.find(th => th.name === themeName) || themes[0]);
};
