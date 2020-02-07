/*
  Function takes an array of allowed (used) properties of components:
  they include 'export let (*)' and ...isProperties defined in config.
  Returns the object of so called 'special' props - non-existing ones
  or the simple html-attributes.
*/

export default (allowed, props) => {
  return Object.keys(props)
    .filter(key => !allowed.includes(key))
    .reduce((obj, key) => {
      obj[key] = props[key];
      return obj;
    }, {});
};
