import React, { Component } from 'react';
import { RenderWidgetProps } from '../index';
import { EditorState } from 'draft-js';
import { WidgetEventContextType } from '../WidgetEventContext';
interface TextBoxWidgetState {
    editorState: EditorState;
}
export declare class TextBoxWidget extends Component<RenderWidgetProps, TextBoxWidgetState> {
    static contextType: React.Context<WidgetEventContextType>;
    context: WidgetEventContextType;
    constructor(props: RenderWidgetProps);
    handleChange(editorState: EditorState): void;
    forceSave(): void;
    render(): JSX.Element;
}
export {};
