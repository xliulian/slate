import { Editor, Element, Location, Node, Path } from '..';
export interface NodeTransforms {
    insertNodes: (editor: Editor, nodes: Node | Node[], options?: {
        at?: Location;
        match?: (node: Node) => boolean;
        mode?: 'highest' | 'lowest';
        hanging?: boolean;
        select?: boolean;
        voids?: boolean;
    }) => void;
    liftNodes: (editor: Editor, options?: {
        at?: Location;
        match?: (node: Node) => boolean;
        mode?: 'all' | 'highest' | 'lowest';
        voids?: boolean;
    }) => void;
    mergeNodes: (editor: Editor, options?: {
        at?: Location;
        match?: (node: Node) => boolean;
        mode?: 'highest' | 'lowest';
        hanging?: boolean;
        voids?: boolean;
    }) => void;
    moveNodes: (editor: Editor, options: {
        at?: Location;
        match?: (node: Node) => boolean;
        mode?: 'all' | 'highest' | 'lowest';
        to: Path;
        voids?: boolean;
    }) => void;
    removeNodes: (editor: Editor, options?: {
        at?: Location;
        match?: (node: Node) => boolean;
        mode?: 'highest' | 'lowest';
        hanging?: boolean;
        voids?: boolean;
    }) => void;
    setNodes: (editor: Editor, props: Partial<Node>, options?: {
        at?: Location;
        match?: (node: Node) => boolean;
        mode?: 'all' | 'highest' | 'lowest';
        hanging?: boolean;
        split?: boolean;
        voids?: boolean;
    }) => void;
    splitNodes: (editor: Editor, options?: {
        at?: Location;
        match?: (node: Node) => boolean;
        mode?: 'highest' | 'lowest';
        always?: boolean;
        height?: number;
        voids?: boolean;
    }) => void;
    unsetNodes: (editor: Editor, props: string | string[], options?: {
        at?: Location;
        match?: (node: Node) => boolean;
        mode?: 'all' | 'highest' | 'lowest';
        split?: boolean;
        voids?: boolean;
    }) => void;
    unwrapNodes: (editor: Editor, options?: {
        at?: Location;
        match?: (node: Node) => boolean;
        mode?: 'all' | 'highest' | 'lowest';
        split?: boolean;
        voids?: boolean;
    }) => void;
    wrapNodes: (editor: Editor, element: Element, options?: {
        at?: Location;
        match?: (node: Node) => boolean;
        mode?: 'all' | 'highest' | 'lowest';
        split?: boolean;
        voids?: boolean;
    }) => void;
}
export declare const NodeTransforms: NodeTransforms;
//# sourceMappingURL=node.d.ts.map