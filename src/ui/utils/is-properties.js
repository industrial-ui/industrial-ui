/*
  Function accepts config.isProperties[] and $$props and uses regular
  expressions to get is:Properties and turn them to classes conditionally
*/

export default (node,  {isProperties, props}) => {
  const classes = Object.keys(props).filter(key => key.match(/^is:/));

  for (let key of classes) {
    if (props[key] && props[key] !== 'false' && isProperties.hasOwnProperty(key)) {
      node.classList.add(...isProperties[key].split(' '));
    }
  }
};
