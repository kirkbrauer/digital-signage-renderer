import React, { createContext } from 'react';
export var WidgetContext = createContext({});
export var WidgetProvider = function (props) {
    return (React.createElement(WidgetContext.Provider, { value: {
            autoplay: props.autoplay,
            onChange: function (event) {
                if (props.onChange)
                    props.onChange(event);
            }
        } }, props.children));
};
export var WidgetConsumer = WidgetContext.Consumer;
