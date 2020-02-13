export default (...args) => {
  let classes = args.join(' ').trim().replace(/ false | +/g, ' ');
  return classes || null;
};
