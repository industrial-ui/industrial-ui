/*
  CheckPosition node action is used for the dropdown (mainly) to
  check if the position + the width of an element goes beyond the
  screen. If so, add position properties to fix the behavior
  Accepts position: 'auto'|'bottom left'|'bottom right'|'top left'|'top right' property.
*/

export default (node, position = null) => {
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
