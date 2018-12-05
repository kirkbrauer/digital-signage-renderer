import React, { Component, ContextType } from 'react';
import { Widget } from 'digital-signage-types';
import EditorContext from './EditorContext';
export interface RenderWidgetProps {
    widget: Widget;
}
export declare class RenderWidget extends Component<RenderWidgetProps> {
    static contextType: React.Context<import("./EditorContext").EditorContextType>;
    context: ContextType<typeof EditorContext>;
    renderChildWidgets(): JSX.Element[];
    render(): JSX.Element | null;
}
