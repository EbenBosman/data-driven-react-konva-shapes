import React from "react";
import { Stage, Layer } from "react-konva";
import AnonymousShape from "./AnonymousShape";

const getDrawObjects = () => {
  const objectsToDraw = [{ name: "Object1" }];

  let shapesInlayer = [];
  let x = 0;
  let y = 0;
  const windowWidth = window.innerWidth;

  for (let objectToDraw of objectsToDraw) {
    shapesInlayer.push(
      <AnonymousShape
        key={objectToDraw.name}
        name={objectToDraw.name}
        x={x}
        y={y}
      />
    );

    if (x + 100 < windowWidth) x = x + 45;
    else {
      x = 0;
      y = y + 55;
    }
  }
  return shapesInlayer;
};
const App = () => {
  return (
    <Stage width={window.innerWidth} height={window.innerHeight}>
      <Layer>{getDrawObjects()}</Layer>
    </Stage>
  );
};
export default App;
