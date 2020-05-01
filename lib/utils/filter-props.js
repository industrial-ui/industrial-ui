/**
 * By default, Svelte passes props as attributes, and it can pollute the markup.
 * Here the props are filtered.
 *
 * @param {string[]} allowed – array of allowed (used) properties of components.
 * They include 'export let (*)' and ...isProperties defined in config
 * @param props – component's $$props
 * @returns {object} – object of so-called 'special' props - the simple html-attributes or non-existing ones.
 */

const filterProps = (allowed, props) => {
  return Object.keys(props)
    .filter(key => !allowed.includes(key))
    .reduce((obj, key) => {
      obj[key] = props[key];
      return obj;
    }, {});
};
export default filterProps;
