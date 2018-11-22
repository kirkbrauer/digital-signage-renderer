import { Color } from 'digital-signage-types';

export default function convertColor(color: Color, alpha?: number): string {
  if (!color) return '';
  return `rgba(${color.red},${color.green},${color.blue},${alpha || 1.0})`;
}
