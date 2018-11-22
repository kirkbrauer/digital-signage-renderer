import { Component } from 'react';
import { Color } from 'digital-signage-types';
export interface TextStyle {
    backgroundColor: Color;
    fontFamily: string;
    fontSize: number;
    fontWeight: number;
    bold: boolean;
    italic: boolean;
    strikethrough: boolean;
    underline: boolean;
    color: Color;
}
export interface StyledTextProps {
    style: TextStyle;
    content: string;
}
export declare class StyledText extends Component<StyledTextProps> {
    render(): JSX.Element;
}
