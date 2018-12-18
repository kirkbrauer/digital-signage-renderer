import React, { SFC } from 'react';
import { WidgetOnChangeEvent } from './WidgetEvents';
export interface WidgetContextType {
    onChange?: (event: WidgetOnChangeEvent) => void;
    autoplay?: boolean;
}
export declare const WidgetContext: React.Context<WidgetContextType>;
interface WidgetEventProviderProps {
    onChange?: (event: WidgetOnChangeEvent) => void;
    autoplay?: boolean;
}
export declare const WidgetProvider: SFC<WidgetEventProviderProps>;
export declare const WidgetConsumer: React.ExoticComponent<React.ConsumerProps<WidgetContextType>>;
export {};
