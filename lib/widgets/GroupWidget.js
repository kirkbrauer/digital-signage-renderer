import * as tslib_1 from "tslib";
import React, { Component } from 'react';
import getBaseStyle from '../getBaseStyle';
import getBorderStyle from '../getBorderStyle';
import { FlexDirection, WrapType, JustifyType } from 'digital-signage-types';
import { DropTarget } from 'react-dnd';
var groupWidgetTarget = {
    drop: function (props, monitor) {
        if (props.onDrop)
            props.onDrop(monitor.getItem());
    }
};
var GroupWidget = /** @class */ (function (_super) {
    tslib_1.__extends(GroupWidget, _super);
    function GroupWidget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GroupWidget.prototype.getFlexDirection = function () {
        switch (this.props.widget.props.direction) {
            case FlexDirection.COLUMN: return 'column';
            case FlexDirection.ROW: return 'row';
            case FlexDirection.ROW_REVERSE: return 'row-reverse';
            case FlexDirection.COLUMN_REVERSE: return 'column-reverse';
            default: return undefined;
        }
    };
    GroupWidget.prototype.getWrapType = function () {
        switch (this.props.widget.props.wrap) {
            case WrapType.NO_WRAP: return 'nowrap';
            case WrapType.WRAP: return 'wrap';
            case WrapType.WRAP_REVERSE: return 'wrap-reverse';
            default: return undefined;
        }
    };
    GroupWidget.prototype.getJustifyType = function () {
        switch (this.props.widget.props.justify) {
            case JustifyType.START: return 'flex-start';
            case JustifyType.END: return 'flex-end';
            case JustifyType.CENTER: return 'center';
            case JustifyType.SPACE_BETWEEN: return 'space-between';
            case JustifyType.SPACE_AROUND: return 'space-around';
            case JustifyType.SPACE_EVENLY: return 'space-evenly';
            default: return undefined;
        }
    };
    GroupWidget.prototype.render = function () {
        return (React.createElement("div", { style: tslib_1.__assign({ display: 'flex', overflow: 'hidden' }, getBaseStyle(this.props.widget.props), getBorderStyle(this.props.widget.props), { flexDirection: this.getFlexDirection(), flexWrap: this.getWrapType(), justifyContent: this.getJustifyType() }) }, this.props.children));
    };
    return GroupWidget;
}(Component));
export default DropTarget('GROUP_WIDGET', groupWidgetTarget, function (connect, monitor) { return ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
}); })(GroupWidget);
