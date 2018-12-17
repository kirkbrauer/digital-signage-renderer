import React, { createContext } from 'react';
export var WidgetEventContext = createContext({});
export var WidgetEventProvider = function (props) {
    return (React.createElement(WidgetEventContext.Provider, { value: {
            onChange: function (event) {
                if (props.onChange)
                    props.onChange(event);
            }
        } }, props.children));
};
export var WidgetEventConsumer = WidgetEventContext.Consumer;
