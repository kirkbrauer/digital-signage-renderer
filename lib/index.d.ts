import { Component } from 'react';
import { Widget } from 'digital-signage-types';
export * from './widgets';
export * from './WidgetEventContext';
export * from './WidgetEvents';
export interface RenderWidgetProps {
    widget: Widget;
}
export declare class RenderWidget extends Component<RenderWidgetProps> {
    renderChildWidgets(): JSX.Element[];
    render(): JSX.Element | null;
}
