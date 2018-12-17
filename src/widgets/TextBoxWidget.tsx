import React, { Component } from 'react';
import { RenderWidgetProps } from '../index';
import { Editor, EditorState, convertFromRaw, convertToRaw } from 'draft-js';
import { WidgetEventContextType, WidgetEventContext } from '../WidgetEventContext';

interface TextBoxWidgetState {
  editorState: EditorState;
}

export class TextBoxWidget extends Component<RenderWidgetProps, TextBoxWidgetState> {

  static contextType = WidgetEventContext;
  context: WidgetEventContextType;

  constructor(props: RenderWidgetProps) {
    super(props);
    this.state = {
      editorState: props.widget.props.text ?
        EditorState.createWithContent(convertFromRaw(props.widget.props.text)) :
        EditorState.createEmpty()
    };
  }

  handleChange(editorState: EditorState) {
    this.setState({ editorState }, () => {
      if (this.context.onChange) {
        this.context.onChange({
          widgetId: this.props.widget.id,
          widgetType: this.props.widget.type,
          forceSave: false,
          changedProps: {
            ...this.props.widget.props,
            text: convertToRaw(editorState.getCurrentContent())
          }
        });
      }
    });
  }

  forceSave() {
    if (this.context.onChange) {
      this.context.onChange({
        widgetId: this.props.widget.id,
        widgetType: this.props.widget.type,
        forceSave: true,
        changedProps: {
          ...this.props.widget.props,
          text: convertToRaw(this.state.editorState.getCurrentContent())
        }
      });
    }
  }

  render() {
    return <Editor
      editorState={this.state.editorState}
      onChange={v => this.handleChange(v)}
      onBlur={() => this.forceSave()}
    />;
  }
}
