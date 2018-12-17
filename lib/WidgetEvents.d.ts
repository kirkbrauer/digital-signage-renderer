import { WidgetType, WidgetProps } from 'digital-signage-types';
export interface WidgetOnChangeEvent {
    widgetId: string;
    widgetType: WidgetType;
    forceSave: boolean;
    changedProps: Partial<WidgetProps>;
}
