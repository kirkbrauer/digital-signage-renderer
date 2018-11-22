import { Component } from 'react';
import { RenderWidgetProps } from '../index';
export interface AutoScrollState {
    currentPosition: number;
    contentHeight: number;
    contentWidth: number;
    scrollViewHeight: number;
    scrollViewWidth: number;
}
export declare class AutoScrollWidget extends Component<RenderWidgetProps, AutoScrollState> {
    render(): null;
}
