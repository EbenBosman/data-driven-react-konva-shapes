import canvasObject1 from "./canvasObject1";
import canvasObject2 from "./canvasObject2";

const drawScene = (context, name, attributes) => {
  switch (name) {
    case "Object1":
      canvasObject1(context, attributes);
      break;
    case "Object2":
      canvasObject2(context, attributes);
      break;
    default:
      console.error(`Object ${name.toString()} not defined in drawFactory.`);
      break;
  }
};

export default (context, shape, name, attributes) => {
  context.beginPath();
  drawScene(context, name, attributes);
  context.closePath();
  context.fillStrokeShape(shape);
};
