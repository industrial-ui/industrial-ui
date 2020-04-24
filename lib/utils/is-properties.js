/**
 * Add classes to component based on reactive is:property that are configured and truthy
 *
 * @param isProperties – configured is:properties in config.components[componentName]
 * @param props – component's $$props
 * @returns {string} – generated classes bases on reactive is:properties
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
