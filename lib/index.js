import * as tslib_1 from "tslib";
import React, { Component } from 'react';
import { WidgetType } from 'digital-signage-types';
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
var RenderWidget = /** @class */ (function (_super) {
    tslib_1.__extends(RenderWidget, _super);
    function RenderWidget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RenderWidget.prototype.renderChildWidgets = function () {
        var nodes = [];
        if (this.props.widget.children) {
            for (var _i = 0, _a = this.props.widget.children; _i < _a.length; _i++) {
                var child = _a[_i];
                nodes.push(React.createElement(RenderWidget, { key: child.id, widget: child }));
            }
        }
        return nodes;
    };
    RenderWidget.prototype.render = function () {
        var _this = this;
        switch (this.props.widget.type) {
            case WidgetType.AUTO_SCROLL: {
                return React.createElement(AutoScrollWidget, { widget: this.props.widget }, this.renderChildWidgets());
            }
            case WidgetType.IMAGE: {
                return React.createElement(ImageWidget, { widget: this.props.widget });
            }
            case WidgetType.GROUP: {
                return (React.createElement(GroupWidget, { widget: this.props.widget, onDrop: function (widget) {
                        // Trigger the onDrop context callback if something is dropped on a widget
                        if (_this.context.onDrop)
                            _this.context.onDrop(_this.props.widget.id, widget);
                    } }, this.renderChildWidgets()));
            }
            case WidgetType.SHAPE: {
                return React.createElement(ShapeWidget, { widget: this.props.widget });
            }
            case WidgetType.CALENDAR: {
                return React.createElement(CalendarWidget, { widget: this.props.widget });
            }
            case WidgetType.DATE_TIME: {
                return React.createElement(DateTimeWidget, { widget: this.props.widget });
            }
            case WidgetType.TEXT_BOX: {
                return React.createElement(TextBoxWidget, { widget: this.props.widget });
            }
            case WidgetType.VIDEO: {
                return React.createElement(VideoWidget, { widget: this.props.widget });
            }
            case WidgetType.WEATHER: {
                return React.createElement(WeatherWidget, { widget: this.props.widget });
            }
            default: return null;
        }
    };
    RenderWidget.contextType = EditorContext;
    return RenderWidget;
}(Component));
export { RenderWidget };
