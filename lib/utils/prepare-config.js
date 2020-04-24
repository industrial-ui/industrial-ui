/**
 * Merge default config file with the actual configuration passed to IUI wrapper
 * @param {object} defaultConfig – '../config.js'
 * @param {object} actualConfig
 * @returns {object}
 */

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


/**
 * MergeDeep function with credit to first StackOverflow link
 */

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

/**
 * It is important to have is:properties have the format matching /^is:/ for parsing properties after.
 * This function maps all configured is:properties to that format
 * @param {object} obj – config.components[componentName].isProperties object
 */
const renameObjectKeys = (obj) => {
  Object.keys(obj).forEach(key => {
    Object.defineProperty(obj, 'is:' + key,
      Object.getOwnPropertyDescriptor(obj, key));
    delete obj[key];
  });
};
