import React, { SFC } from 'react';
import { WidgetOnChangeEvent } from './WidgetEvents';
export interface WidgetEventContextType {
    onChange?: (event: WidgetOnChangeEvent) => void;
}
export declare const WidgetEventContext: React.Context<WidgetEventContextType>;
interface WidgetEventProviderProps {
    onChange?: (event: WidgetOnChangeEvent) => void;
}
export declare const WidgetEventProvider: SFC<WidgetEventProviderProps>;
export declare const WidgetEventConsumer: React.ExoticComponent<React.ConsumerProps<WidgetEventContextType>>;
export {};
