export default (context, attributes) => {
  context.arc(attributes.x, attributes.y, 100, 0, Math.PI * 2, false);
  context.fillStyle = "yellow";
};
