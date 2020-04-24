// With credits to https://github.com/AlexxNB
import {bubble, listen} from 'svelte/internal';

/**
 * Gets the component and binds all possible html-events into it
 *
 * @param component - svelte component
 */

export const getEventAction = (component) => {
  return (node) => {
    const events = Object.keys(component.$$.callbacks);
    const listeners = [];

    events.forEach((event) => listeners.push(listen(node, event, (e) => bubble(component, e))));

    return {
      destroy: () => {
        listeners.forEach((listener) => listener());
      },
    };
  };
};
