import React, { Component } from 'react';
import convertColor from './convertColor';
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

export class StyledText extends Component<StyledTextProps> {
  
  render() {
    const style = this.props.style;
    return (
      <div style={{
        backgroundColor: convertColor(style.backgroundColor),
        color: convertColor(style.color),
        fontFamily: style.fontFamily,
        fontSize: style.fontSize,
        fontWeight: style.bold ? 'bold' : style.fontWeight ? style.fontWeight as any : 'normal'
      }}>
        {this.props.content}
      </div>
    );
  }

}
