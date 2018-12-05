import { RenderWidgetProps } from '../index';
import { Widget } from 'digital-signage-types';
import { ConnectDropTarget } from 'react-dnd';
interface GroupWidgetProps {
    onDrop?: (widget: Partial<Widget>) => void;
    connectDropTarget?: ConnectDropTarget;
}
declare const _default: import("react-dnd/lib/interfaces").DndComponentClass<RenderWidgetProps & GroupWidgetProps>;
export default _default;
