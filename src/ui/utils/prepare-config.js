export default (defaultConfig, actualConfig) => {

  // Merge default (empty) and given configs into one
  let config = mergeDeep({}, defaultConfig, actualConfig);

  // Add 'is:' prefix to all components' isProperties now
  // in order to do it once and for all time but not in all components
  Object.keys(config.components).forEach(key => {
    const component = config.components[key];
    if (component.isProperties) {
      renameObjectKeys(component.isProperties);
    }
  });

  return config;
};

export const mergeDeep = (target, ...sources) => {
  if (!sources.length) return target;
  const source = sources.shift();

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, { [key]: {} });
        mergeDeep(target[key], source[key]);
      } else {
        Object.assign(target, { [key]: source[key] });
      }
    }
  }

  return mergeDeep(target, ...sources);
};

const isObject = item => {
  return (item && typeof item === 'object' && !Array.isArray(item));
};

const renameObjectKeys = (obj) => {
  Object.keys(obj).forEach(key => {
    Object.defineProperty(obj, 'is:' + key,
      Object.getOwnPropertyDescriptor(obj, key));
    delete obj[key];
  });
};
