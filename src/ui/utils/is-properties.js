/*
  Function accepts config.isProperties[] and $$props and uses regular
  expressions to get is:Properties and turn them to classes conditionally
*/

export default (node,  {isProperties, props}) => {
  const classes = Object.keys(props).filter(key => key.match(/^is:/));

  for (let key of classes) {
    const className = key.replace(/^is:/, '');
    if (props[key] && props[key] !== 'false' && isProperties.includes(key)) {
      node.classList.add(className);
    }
  }
};
