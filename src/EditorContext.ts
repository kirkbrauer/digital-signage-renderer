import { createContext } from 'react';
import { Widget } from 'digital-signage-types';

export interface EditorContextType {
  onDrop?: (targetId: string, value: Partial<Widget>) => void;
}

const EditorContext = createContext<EditorContextType>({});

export default EditorContext;
