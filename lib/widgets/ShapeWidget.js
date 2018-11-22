import * as tslib_1 from "tslib";
import React, { Component } from 'react';
import getBaseStyle from '../getBaseStyle';
import getBorderStyle from '../getBorderStyle';
import { ShapeType } from 'digital-signage-types';
var ShapeWidget = /** @class */ (function (_super) {
    tslib_1.__extends(ShapeWidget, _super);
    function ShapeWidget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ShapeWidget.prototype.getShapeStyle = function () {
        switch (this.props.widget.props.shapeType) {
            case ShapeType.RECTANGLE: return {};
            case ShapeType.ROUND_RECTANGLE: {
                return {
                    borderRadius: this.props.widget.props.radius
                };
            }
            default: return {};
        }
    };
    ShapeWidget.prototype.render = function () {
        return (React.createElement("div", { style: tslib_1.__assign({}, getBaseStyle(this.props.widget.props), getBorderStyle(this.props.widget.props), this.getShapeStyle()) }));
    };
    return ShapeWidget;
}(Component));
export { ShapeWidget };
