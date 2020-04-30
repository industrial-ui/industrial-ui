/**
 * Check whether the position + width of an element (mostly used for dropdowns)
 * goes beyond the screen. If so, add position properties to fix the behavior
 *
 * @param {element} node - The element on which you'd like to check the position
 * @param {'auto'|'bottom left'|'bottom right'|'top left'|'top right'|null} position - where
 * to display the element
 */

const checkPosition = (node, position = null) => {
  if (position) {
    if (position === 'auto') {
      const nodeProps = node.getBoundingClientRect();
      const canGoLeft = nodeProps.left > nodeProps.width;
      const canGoRight = window.innerWidth - nodeProps.right > nodeProps.width;
      const canGoTop = nodeProps.top > nodeProps.height;
      const canGoBottom = window.innerHeight - nodeProps.bottom > nodeProps.height;

      if (canGoBottom && canGoRight) changePosition(node, 'bottom left');
      else if (canGoBottom && canGoLeft) changePosition(node, 'bottom right');
      else if (canGoTop && canGoRight) changePosition(node, 'top left');
      else if (canGoTop && canGoLeft) changePosition(node, 'top right');
    } else {
      changePosition(node, position);
    }
  }
};
export default checkPosition;

const changePosition = (node, position) => {
  if (position === 'bottom left') {
    node.style.top = '100%';
    node.style.left = 0;
    node.style.right = 'auto';
    node.style.bottom = 'auto';
  } else if (position === 'bottom right') {
    node.style.top = '100%';
    node.style.right = 0;
    node.style.left = 'auto';
    node.style.bottom = 'auto';
  } else if (position === 'top right') {
    node.style.bottom = '100%';
    node.style.right = 0;
    node.style.left = 'auto';
    node.style.top = 'auto';
  } else if (position === 'top left') {
    node.style.bottom = '100%';
    node.style.left = 0;
    node.style.right = 'auto';
    node.style.top = 'auto';
  }
};
