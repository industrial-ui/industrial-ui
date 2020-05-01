/**
 * Compose classes to pass to components' wrapper element
 *
 * @param {string} args – array of strings of one or many classes
 * @returns {string|null} – string of nicely concatenated classes passed into the component
 */

const composeClasses = (...args) => {
  let classes = args.join(' ').trim().replace(/ false | +/g, ' ');
  return classes || null;
};
export default composeClasses;
