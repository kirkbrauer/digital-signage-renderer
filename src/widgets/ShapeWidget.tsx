import React, { Component } from 'react';
import { RenderWidgetProps } from '../index';
import getBaseStyle from '../getBaseStyle';
import getBorderStyle from '../getBorderStyle';
import { ShapeType } from 'digital-signage-types';

export class ShapeWidget extends Component<RenderWidgetProps> {

  getShapeStyle(): any {
    switch (this.props.widget.props.shapeType) {
      case ShapeType.RECTANGLE: return {};
      case ShapeType.ROUND_RECTANGLE: {
        return {
          borderRadius: this.props.widget.props.radius
        };
      }
      default: return {};
    }
  }

  render() {
    return (
      <div
        style={{
          ...getBaseStyle(this.props.widget.props),
          ...getBorderStyle(this.props.widget.props),
          ...this.getShapeStyle()
        }}
      />
    );
  }
}
