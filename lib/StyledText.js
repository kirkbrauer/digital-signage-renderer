import * as tslib_1 from "tslib";
import React, { Component } from 'react';
import convertColor from './convertColor';
var StyledText = /** @class */ (function (_super) {
    tslib_1.__extends(StyledText, _super);
    function StyledText() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StyledText.prototype.render = function () {
        var style = this.props.style;
        return (React.createElement("div", { style: {
                backgroundColor: convertColor(style.backgroundColor),
                color: convertColor(style.color),
                fontFamily: style.fontFamily,
                fontSize: style.fontSize,
                fontWeight: style.bold ? 'bold' : style.fontWeight ? style.fontWeight : 'normal'
            } }, this.props.content));
    };
    return StyledText;
}(Component));
export { StyledText };
