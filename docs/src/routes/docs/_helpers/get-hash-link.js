import {stores} from '@sapper/app';
import {get} from 'svelte/store';

const queryString = query => Object.keys(query).map((key) => {
  return encodeURIComponent(key) + '=' + encodeURIComponent(query[key])
}).join('&');

const getHashLink = (path, hash) => {
  const {page} = stores();
  const {query} = get(page);
  const str = queryString(query);
  return path + (str ? '?' + str : '') + '#' + hash;
};

export default getHashLink;
