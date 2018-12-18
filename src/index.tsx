import React, { Component } from 'react';
import { Widget, WidgetType } from 'digital-signage-types';
import { AutoScrollWidget } from './widgets/AutoScrollWidget';
import { ImageWidget } from './widgets/ImageWidget';
import { GroupWidget } from './widgets/GroupWidget';
import { ShapeWidget } from './widgets/ShapeWidget';
import { CalendarWidget } from './widgets/CalendarWidget';
import { DateTimeWidget } from './widgets/DateTimeWidget';
import { TextBoxWidget } from './widgets/TextBoxWidget';
import { VideoWidget } from './widgets/VideoWidget';
import { WeatherWidget } from './widgets/WeatherWidget';

export * from './widgets';
export * from './WidgetContext';
export * from './WidgetEvents';

export interface RenderWidgetProps {
  widget: Widget;
}

export class RenderWidget extends Component<RenderWidgetProps> {

  renderChildWidgets() {
    const nodes = [];
    if (this.props.widget.children) {
      for (const child of this.props.widget.children) {
        nodes.push(<RenderWidget key={child.id} widget={child} />);
      }
    }
    return nodes;
  }

  render() {
    switch (this.props.widget.type) {
      case WidgetType.AUTO_SCROLL: {
        return <AutoScrollWidget
          widget={this.props.widget}
          
        >
          {this.props.children || this.renderChildWidgets()}
        </AutoScrollWidget>;
      }
      case WidgetType.IMAGE: {
        return <ImageWidget widget={this.props.widget} />;
      }
      case WidgetType.GROUP: {
        return <GroupWidget widget={this.props.widget}>
          {this.props.children || this.renderChildWidgets()}
        </GroupWidget>;
      }
      case WidgetType.SHAPE: {
        return <ShapeWidget widget={this.props.widget} />;
      }
      case WidgetType.CALENDAR: {
        return <CalendarWidget widget={this.props.widget} />;
      }
      case WidgetType.DATE_TIME: {
        return <DateTimeWidget widget={this.props.widget} />;
      }
      case WidgetType.TEXT_BOX: {
        return <TextBoxWidget widget={this.props.widget} />;
      }
      case WidgetType.VIDEO: {
        return <VideoWidget widget={this.props.widget} />;
      }
      case WidgetType.WEATHER: {
        return <WeatherWidget widget={this.props.widget} />;
      }
      default: return null;
    }
  }

}
