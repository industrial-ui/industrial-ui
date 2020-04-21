/*
  Function accepts config.isProperties[] and $$props and uses regular
  expressions to get is:Properties and turn them to classes conditionally
*/

export default (isProperties, props) => {
  const classes = Object.keys(props).filter(key => key.match(/^is:/));

  let classArray = [];
  for (let key of classes) {
    if (props[key] && props[key] !== 'false' && isProperties.hasOwnProperty(key)) {
      classArray = classArray.concat(isProperties[key].split(' '));
    }
  }
  return classArray.join(' ');
};
