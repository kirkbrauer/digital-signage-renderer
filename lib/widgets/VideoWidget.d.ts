import React, { Component } from 'react';
import { RenderWidgetProps } from '../index';
import { WidgetContextType } from '../WidgetContext';
export declare class VideoWidget extends Component<RenderWidgetProps> {
    static contextType: React.Context<WidgetContextType>;
    context: WidgetContextType;
    render(): JSX.Element | null;
}
