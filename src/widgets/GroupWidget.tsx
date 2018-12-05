import React, { Component } from 'react';
import getBaseStyle from '../getBaseStyle';
import getBorderStyle from '../getBorderStyle';
import { RenderWidgetProps } from '../index';
import { FlexDirection, WrapType, JustifyType, Widget } from 'digital-signage-types';
import {
  ConnectDropTarget,
  DropTarget,
  DropTargetMonitor
} from 'react-dnd';

interface GroupWidgetProps {
  onDrop?: (widget: Partial<Widget>) => void;
  connectDropTarget?: ConnectDropTarget;
}

const groupWidgetTarget = {
  drop(props: RenderWidgetProps & GroupWidgetProps, monitor: DropTargetMonitor) {
    if (props.onDrop) props.onDrop(monitor.getItem());
  }
};

class GroupWidget extends Component<RenderWidgetProps & GroupWidgetProps> {

  getFlexDirection() {
    switch (this.props.widget.props.direction) {
      case FlexDirection.COLUMN: return 'column';
      case FlexDirection.ROW: return 'row';
      case FlexDirection.ROW_REVERSE: return 'row-reverse';
      case FlexDirection.COLUMN_REVERSE: return 'column-reverse';
      default: return undefined;
    }
  }

  getWrapType() {
    switch (this.props.widget.props.wrap) {
      case WrapType.NO_WRAP: return 'nowrap';
      case WrapType.WRAP: return 'wrap';
      case WrapType.WRAP_REVERSE: return 'wrap-reverse';
      default: return undefined;
    }
  }

  getJustifyType() {
    switch (this.props.widget.props.justify) {
      case JustifyType.START: return 'flex-start';
      case JustifyType.END: return 'flex-end';
      case JustifyType.CENTER: return 'center';
      case JustifyType.SPACE_BETWEEN: return 'space-between';
      case JustifyType.SPACE_AROUND: return 'space-around';
      case JustifyType.SPACE_EVENLY: return 'space-evenly';
      default: return undefined;
    }
  }

  render() {
    return (
      <div style={{
        display: 'flex',
        overflow: 'hidden',
        ...getBaseStyle(this.props.widget.props),
        ...getBorderStyle(this.props.widget.props),
        flexDirection: this.getFlexDirection(),
        flexWrap: this.getWrapType(),
        justifyContent: this.getJustifyType()
      }}>
        {this.props.children}
      </div>
    );
  }
}

export default DropTarget<RenderWidgetProps & GroupWidgetProps>(
  'GROUP_WIDGET',
  groupWidgetTarget,
  (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
  })
)(GroupWidget);
