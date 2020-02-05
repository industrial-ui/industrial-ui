export default (...args) => {
  let classes = args.join(' ').trim().replace(/ +/g, ' ');
  return classes || null;
};
