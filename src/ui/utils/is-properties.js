/* TODO: function should accept config.isProperties[] and $$props and
*   use regular expressions to get what we need and use this to make everything perfect */

export default (node,  {isProperties, props}) => {
  console.log(node, isProperties, props);
};
