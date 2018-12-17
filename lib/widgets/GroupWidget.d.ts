import { Component } from 'react';
import { RenderWidgetProps } from '../index';
export declare class GroupWidget extends Component<RenderWidgetProps> {
    getFlexDirection(): "column" | "row" | "row-reverse" | "column-reverse" | undefined;
    getWrapType(): "nowrap" | "wrap" | "wrap-reverse" | undefined;
    getJustifyType(): "center" | "flex-start" | "flex-end" | "space-between" | "space-around" | "space-evenly" | undefined;
    render(): JSX.Element;
}
