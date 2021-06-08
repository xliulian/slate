/// <reference types="react" />
import { Range, NodeEntry } from 'slate';
/**
 * A React context for sharing the `decorate` prop of the editable.
 */
export declare const DecorateContext: import("react").Context<{
    decorate: (entry: NodeEntry<import("slate").BaseNode>) => Range[];
    useDecorateState?: (() => any) | undefined;
}>;
/**
 * Get the current `decorate` prop of the editable.
 */
export declare const useDecorate: () => {
    decorate: (entry: NodeEntry<import("slate").BaseNode>) => Range[];
    useDecorateState?: (() => any) | undefined;
};
//# sourceMappingURL=use-decorate.d.ts.map