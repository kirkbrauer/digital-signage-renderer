import { WidgetProps, BorderStyle } from 'digital-signage-types';
import convertColor from './convertColor';

function convertBorderStyle(style: BorderStyle): string | undefined {
  switch (style) {
    case BorderStyle.DASHED: return 'dashed';
    case BorderStyle.DOTTED: return 'dotted';
    case BorderStyle.SOLID: return 'solid';
    default: return undefined;
  }
}

export default function getBorderStyle(props: Partial<WidgetProps>): any {
  return {
    borderStyle: convertBorderStyle(props.borderStyle!),
    borderWidth: props.borderWidth,
    borderColor: convertColor(props.borderColor!)
  };
}
