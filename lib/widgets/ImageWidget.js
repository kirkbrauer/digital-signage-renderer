import * as tslib_1 from "tslib";
import React, { Component } from 'react';
import getBaseStyle from '../getBaseStyle';
var ImageWidget = /** @class */ (function (_super) {
    tslib_1.__extends(ImageWidget, _super);
    function ImageWidget() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ImageWidget.prototype.render = function () {
        return (React.createElement("div", { style: tslib_1.__assign({ backgroundImage: "url(" + this.props.widget.props.contentUrl + ")", backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }, getBaseStyle(this.props.widget.props)) }));
    };
    return ImageWidget;
}(Component));
export { ImageWidget };
