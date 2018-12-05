import * as tslib_1 from "tslib";
import React, { Component } from 'react';
import EditorContext from 'EditorContext';
var EditorContextProvider = /** @class */ (function (_super) {
    tslib_1.__extends(EditorContextProvider, _super);
    function EditorContextProvider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Handles drop events from the context.
     * @param targetId The target widget ID.
     * @param value The partial widget being dropped onto it.
     */
    EditorContextProvider.prototype.handleDrop = function (targetId, value) {
        if (this.props.onDrop)
            this.props.onDrop(targetId, value);
    };
    EditorContextProvider.prototype.render = function () {
        var _this = this;
        return (React.createElement(EditorContext.Provider, { value: {
                onDrop: function (targetId, value) { return _this.handleDrop(targetId, value); }
            } }, this.props.children));
    };
    return EditorContextProvider;
}(Component));
export default EditorContextProvider;
