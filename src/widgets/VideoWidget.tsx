import React, { Component } from 'react';
import { RenderWidgetProps } from '../index';
import { VideoType } from 'digital-signage-types';
import YouTube from 'react-youtube';
import { WidgetContext, WidgetContextType } from '../WidgetContext';

export class VideoWidget extends Component<RenderWidgetProps> {

  static contextType = WidgetContext;
  context: WidgetContextType;

  render() {
    switch (this.props.widget.props.videoType) {
      case VideoType.YOUTUBE: {
        return (
          <YouTube
            videoId={this.props.widget.props.video}
            opts={{
              height: this.props.widget.props.height ? this.props.widget.props.height.toString() : '853',
              width: this.props.widget.props.height ? this.props.widget.props.height.toString() : '480',
              playerVars: {
                autoplay: this.context.autoplay ? 1 : 0,
                loop: this.context.autoplay ? 1 : 0,
                modestbranding: 1,
                controls: this.context.autoplay ? 0 : 1,
                disablekb: this.context.autoplay ? 1 : 0,
                playsinline: 1
              }
            }}
          />
        );
      }
      default: return null;
    }
  }
}
