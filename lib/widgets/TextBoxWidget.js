import * as tslib_1 from "tslib";
import React, { Component } from 'react';
import { Editor, EditorState, convertFromRaw, convertToRaw } from 'draft-js';
import { WidgetContext } from '../WidgetContext';
var TextBoxWidget = /** @class */ (function (_super) {
    tslib_1.__extends(TextBoxWidget, _super);
    function TextBoxWidget(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            editorState: props.widget.props.text ?
                EditorState.createWithContent(convertFromRaw(props.widget.props.text)) :
                EditorState.createEmpty()
        };
        return _this;
    }
    TextBoxWidget.prototype.handleChange = function (editorState) {
        var _this = this;
        this.setState({ editorState: editorState }, function () {
            if (_this.context.onChange) {
                _this.context.onChange({
                    widgetId: _this.props.widget.id,
                    widgetType: _this.props.widget.type,
                    forceSave: false,
                    changedProps: tslib_1.__assign({}, _this.props.widget.props, { text: convertToRaw(editorState.getCurrentContent()) })
                });
            }
        });
    };
    TextBoxWidget.prototype.forceSave = function () {
        if (this.context.onChange) {
            this.context.onChange({
                widgetId: this.props.widget.id,
                widgetType: this.props.widget.type,
                forceSave: true,
                changedProps: tslib_1.__assign({}, this.props.widget.props, { text: convertToRaw(this.state.editorState.getCurrentContent()) })
            });
        }
    };
    TextBoxWidget.prototype.render = function () {
        var _this = this;
        return React.createElement(Editor, { editorState: this.state.editorState, onChange: function (v) { return _this.handleChange(v); }, onBlur: function () { return _this.forceSave(); } });
    };
    TextBoxWidget.contextType = WidgetContext;
    return TextBoxWidget;
}(Component));
export { TextBoxWidget };
