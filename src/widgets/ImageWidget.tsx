import React, { Component } from 'react';
import { RenderWidgetProps } from '../index';
import getBaseStyle from '../getBaseStyle';

export class ImageWidget extends Component<RenderWidgetProps> {

  render() {
    return (
      <div
        style={{
          backgroundImage: `url(${this.props.widget.props.contentUrl})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          ...getBaseStyle(this.props.widget.props),
        }}
      />
    );
  }
}
