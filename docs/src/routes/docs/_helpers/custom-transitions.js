export const fadeWithColor = (node, {delay = 0, duration = 1000}) => ({
  delay,
  duration,
  css: t => `
    opacity: ${t};
    background-color: hsl(${t * 255}, 70%, 30%);
  `
});
