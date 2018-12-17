import React, { SFC, createContext } from 'react';
import { WidgetOnChangeEvent } from './WidgetEvents';

export interface WidgetEventContextType {
  onChange?: (event: WidgetOnChangeEvent) => void;
}

export const WidgetEventContext = createContext<WidgetEventContextType>({});

interface WidgetEventProviderProps {
  onChange?: (event: WidgetOnChangeEvent) => void;
}

export const WidgetEventProvider: SFC<WidgetEventProviderProps> = (props) => {
  return (
    <WidgetEventContext.Provider value={{
      onChange: (event) => {
        if (props.onChange) props.onChange(event);
      }
    }}>
      {props.children}
    </WidgetEventContext.Provider>
  );
};

export const WidgetEventConsumer = WidgetEventContext.Consumer;
