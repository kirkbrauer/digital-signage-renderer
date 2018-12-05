import { Component } from 'react';
import { Widget } from 'digital-signage-types';
interface EditorContextProviderProps {
    onDrop?: (targetId: string, value: Partial<Widget>) => void;
}
export default class EditorContextProvider extends Component<EditorContextProviderProps> {
    /**
     * Handles drop events from the context.
     * @param targetId The target widget ID.
     * @param value The partial widget being dropped onto it.
     */
    handleDrop(targetId: string, value: Partial<Widget>): void;
    render(): JSX.Element;
}
export {};
