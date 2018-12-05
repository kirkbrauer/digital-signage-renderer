/// <reference types="react" />
import { Widget } from 'digital-signage-types';
export interface EditorContextType {
    onDrop?: (targetId: string, value: Partial<Widget>) => void;
}
declare const EditorContext: import("react").Context<EditorContextType>;
export default EditorContext;
