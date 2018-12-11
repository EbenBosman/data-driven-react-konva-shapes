import React from "react";
import { Shape } from "react-konva";
import drawFactory from "./drawFactory";

class AnonymousShape extends React.Component {
  drawScene = (context, shape) => {
    // Fires multiple times - 2 x HitContext and 2 x SceneContext. Why?
    console.log(context);
    drawFactory(context, shape, this.props.name, {
      x: this.props.x,
      y: this.props.y
    });
  };
  render() {
    // Only fires once, as expected
    console.log("Render of AnonymousShape");
    return (
      <Shape
        name={this.props.name}
        x={this.props.x ? this.props.x : 0}
        y={this.props.y ? this.props.y : 0}
        sceneFunc={this.drawScene}
      />
    );
  }
}
export default AnonymousShape;
