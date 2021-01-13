export declare const Transforms: {
    delete: (editor: import("..").BaseEditor, options?: {
        at?: import("..").Path | import("..").BasePoint | import("..").BaseRange | undefined;
        distance?: number | undefined;
        unit?: "character" | "word" | "line" | "block" | undefined;
        reverse?: boolean | undefined;
        hanging?: boolean | undefined;
        voids?: boolean | undefined;
    } | undefined) => void;
    insertFragment: (editor: import("..").BaseEditor, fragment: import("..").BaseNode[], options?: {
        at?: import("..").Path | import("..").BasePoint | import("..").BaseRange | undefined;
        hanging?: boolean | undefined;
        voids?: boolean | undefined;
    } | undefined) => void;
    insertText: (editor: import("..").BaseEditor, text: string, options?: {
        at?: import("..").Path | import("..").BasePoint | import("..").BaseRange | undefined;
        voids?: boolean | undefined;
    } | undefined) => void;
    collapse: (editor: import("..").BaseEditor, options?: {
        edge?: "anchor" | "focus" | "start" | "end" | undefined;
    } | undefined) => void;
    deselect: (editor: import("..").BaseEditor) => void;
    move: (editor: import("..").BaseEditor, options?: {
        distance?: number | undefined;
        unit?: "character" | "word" | "line" | "offset" | undefined;
        reverse?: boolean | undefined;
        edge?: "anchor" | "focus" | "start" | "end" | undefined;
    } | undefined) => void;
    select: (editor: import("..").BaseEditor, target: import("..").Location) => void;
    setPoint: (editor: import("..").BaseEditor, props: Partial<import("..").BasePoint>, options?: {
        edge?: "anchor" | "focus" | "start" | "end" | undefined;
    } | undefined) => void;
    setSelection: (editor: import("..").BaseEditor, props: Partial<import("..").BaseRange>) => void;
    insertNodes: (editor: import("..").BaseEditor, nodes: import("..").BaseEditor | import("..").BaseElement | import("..").BaseText | import("..").BaseNode[], options?: {
        at?: import("..").Path | import("..").BasePoint | import("..").BaseRange | undefined;
        match?: ((node: import("..").BaseNode) => boolean) | undefined;
        mode?: "highest" | "lowest" | undefined;
        hanging?: boolean | undefined;
        select?: boolean | undefined;
        voids?: boolean | undefined;
    } | undefined) => void;
    liftNodes: (editor: import("..").BaseEditor, options?: {
        at?: import("..").Path | import("..").BasePoint | import("..").BaseRange | undefined;
        match?: ((node: import("..").BaseNode) => boolean) | undefined;
        mode?: "highest" | "lowest" | "all" | undefined;
        voids?: boolean | undefined;
    } | undefined) => void;
    mergeNodes: (editor: import("..").BaseEditor, options?: {
        at?: import("..").Path | import("..").BasePoint | import("..").BaseRange | undefined;
        match?: ((node: import("..").BaseNode) => boolean) | undefined;
        mode?: "highest" | "lowest" | undefined;
        hanging?: boolean | undefined;
        voids?: boolean | undefined;
    } | undefined) => void;
    moveNodes: (editor: import("..").BaseEditor, options: {
        at?: import("..").Path | import("..").BasePoint | import("..").BaseRange | undefined;
        match?: ((node: import("..").BaseNode) => boolean) | undefined;
        mode?: "highest" | "lowest" | "all" | undefined;
        to: import("..").Path;
        voids?: boolean | undefined;
    }) => void;
    removeNodes: (editor: import("..").BaseEditor, options?: {
        at?: import("..").Path | import("..").BasePoint | import("..").BaseRange | undefined;
        match?: ((node: import("..").BaseNode) => boolean) | undefined;
        mode?: "highest" | "lowest" | undefined;
        hanging?: boolean | undefined;
        voids?: boolean | undefined;
    } | undefined) => void;
    setNodes: (editor: import("..").BaseEditor, props: Partial<import("..").BaseEditor> | Partial<import("..").BaseElement> | Partial<import("..").BaseText>, options?: {
        at?: import("..").Path | import("..").BasePoint | import("..").BaseRange | undefined;
        match?: ((node: import("..").BaseNode) => boolean) | undefined;
        mode?: "highest" | "lowest" | "all" | undefined;
        hanging?: boolean | undefined;
        split?: boolean | undefined;
        voids?: boolean | undefined;
    } | undefined) => void;
    splitNodes: (editor: import("..").BaseEditor, options?: {
        at?: import("..").Path | import("..").BasePoint | import("..").BaseRange | undefined;
        match?: ((node: import("..").BaseNode) => boolean) | undefined;
        mode?: "highest" | "lowest" | undefined;
        always?: boolean | undefined;
        height?: number | undefined;
        voids?: boolean | undefined;
    } | undefined) => void;
    unsetNodes: (editor: import("..").BaseEditor, props: string | string[], options?: {
        at?: import("..").Path | import("..").BasePoint | import("..").BaseRange | undefined;
        match?: ((node: import("..").BaseNode) => boolean) | undefined;
        mode?: "highest" | "lowest" | "all" | undefined;
        split?: boolean | undefined;
        voids?: boolean | undefined;
    } | undefined) => void;
    unwrapNodes: (editor: import("..").BaseEditor, options?: {
        at?: import("..").Path | import("..").BasePoint | import("..").BaseRange | undefined;
        match?: ((node: import("..").BaseNode) => boolean) | undefined;
        mode?: "highest" | "lowest" | "all" | undefined;
        split?: boolean | undefined;
        voids?: boolean | undefined;
    } | undefined) => void;
    wrapNodes: (editor: import("..").BaseEditor, element: import("..").BaseElement, options?: {
        at?: import("..").Path | import("..").BasePoint | import("..").BaseRange | undefined;
        match?: ((node: import("..").BaseNode) => boolean) | undefined;
        mode?: "highest" | "lowest" | "all" | undefined;
        split?: boolean | undefined;
        voids?: boolean | undefined;
    } | undefined) => void;
    transform: (editor: import("..").BaseEditor, op: import("..").Operation) => void;
};
//# sourceMappingURL=index.d.ts.map