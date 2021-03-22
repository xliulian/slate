/// <reference types="react" />
import { Range, Element, Ancestor } from 'slate';
import { RenderElementProps, RenderLeafProps } from './editable';
/**
 * Children.
 */
declare const Children: (props: {
    decorations: Range[];
    node: Ancestor;
    renderElement?: ((props: RenderElementProps) => JSX.Element) | undefined;
    renderLeaf?: ((props: RenderLeafProps) => JSX.Element) | undefined;
    selection: Range | null;
}) => JSX.Element;
export default Children;
//# sourceMappingURL=children.d.ts.map