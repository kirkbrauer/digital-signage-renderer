import React, { Component, ContextType } from 'react';
import { Widget, WidgetType } from 'digital-signage-types';
import { AutoScrollWidget } from './widgets/AutoScrollWidget';
import { ImageWidget } from './widgets/ImageWidget';
import GroupWidget from './widgets/GroupWidget';
import { ShapeWidget } from './widgets/ShapeWidget';
import { CalendarWidget } from './widgets/CalendarWidget';
import { DateTimeWidget } from './widgets/DateTimeWidget';
import { TextBoxWidget } from './widgets/TextBoxWidget';
import { VideoWidget } from './widgets/VideoWidget';
import { WeatherWidget } from './widgets/WeatherWidget';
import EditorContext from './EditorContext';

export interface RenderWidgetProps {
  widget: Widget;
}

export class RenderWidget extends Component<RenderWidgetProps> {

  static contextType = EditorContext;
  context!: ContextType<typeof EditorContext>;

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
        return <AutoScrollWidget widget={this.props.widget}>
          {this.renderChildWidgets()}
        </AutoScrollWidget>;
      }
      case WidgetType.IMAGE: {
        return <ImageWidget widget={this.props.widget} />;
      }
      case WidgetType.GROUP: {
        return (
          <GroupWidget
            widget={this.props.widget}
            onDrop={(widget) => {
              // Trigger the onDrop context callback if something is dropped on a widget
              if (this.context.onDrop) this.context.onDrop(this.props.widget.id, widget);
            }}
          >
            {this.renderChildWidgets()}
          </GroupWidget>
        );
      }
      case WidgetType.SHAPE: {
        return <ShapeWidget widget={this.props.widget}/>;
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
