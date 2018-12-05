import React, { Component } from 'react';
import EditorContext from 'EditorContext';
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
  handleDrop(targetId: string, value: Partial<Widget>) {
    if (this.props.onDrop) this.props.onDrop(targetId, value);
  }
  
  render() {
    return (
      <EditorContext.Provider value={{
        onDrop: (targetId, value) => this.handleDrop(targetId, value)
      }}>
        {this.props.children}
      </EditorContext.Provider>
    );
  }

}
