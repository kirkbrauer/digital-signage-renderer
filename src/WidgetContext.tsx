import React, { SFC, createContext } from 'react';
import { WidgetOnChangeEvent } from './WidgetEvents';

export interface WidgetContextType {
  onChange?: (event: WidgetOnChangeEvent) => void;
  autoplay?: boolean;
}

export const WidgetContext = createContext<WidgetContextType>({});

interface WidgetEventProviderProps {
  onChange?: (event: WidgetOnChangeEvent) => void;
  autoplay?: boolean;
}

export const WidgetProvider: SFC<WidgetEventProviderProps> = (props) => {
  return (
    <WidgetContext.Provider value={{
      autoplay: props.autoplay,
      onChange: (event) => {
        if (props.onChange) props.onChange(event);
      }
    }}>
      {props.children}
    </WidgetContext.Provider>
  );
};

export const WidgetConsumer = WidgetContext.Consumer;
