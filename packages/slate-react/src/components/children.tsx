import React from 'react'
import { Editor, Range, Element, NodeEntry, Ancestor, Descendant } from 'slate'
import orderBy from 'lodash/orderBy'

import ElementComponent from './element'
import TextComponent from './text'
import { ReactEditor } from '..'
import { useSlateStatic } from '../hooks/use-slate-static'
import { useDecorate } from '../hooks/use-decorate'
import { IndexContext } from '../hooks/use-index'
import { NODE_TO_INDEX, NODE_TO_PARENT } from '../utils/weak-maps'
import { RenderElementProps, RenderLeafProps } from './editable'

/**
 * Children.
 */

const Children = (props: {
  decorations: Range[]
  node: Ancestor
  renderElement?: (props: RenderElementProps) => JSX.Element
  renderLeaf?: (props: RenderLeafProps) => JSX.Element
  selection: Range | null
}) => {
  const { decorations, node, renderElement, renderLeaf, selection } = props
  const editor = useSlateStatic()
  const { decorate, useDecorateState } = useDecorate()
  const decorateState = useDecorateState && useDecorateState()
  if (decorateState) {
    // decorateState with the element key changes when we need re-run decorate by some external condition.
    decorateState[ReactEditor.findKey(editor, node).id];
  }
  const path = ReactEditor.findPath(editor, node)
  const children = []
  const isLeafBlock =
    Element.isElement(node) &&
    !editor.isInline(node) &&
    Editor.hasInlines(editor, node)

const nodeChildren =
  isLeafBlock || !node.childrenOrderedBy
    ? node.children.map((child, idx) => [child, idx])
    : (node.childrenOrderedBy.length === 2 &&
      (['asc', 'desc'].includes(node.childrenOrderedBy[1]) ||
        (Array.isArray(node.childrenOrderedBy[1]) &&
          ['asc', 'desc'].includes(node.childrenOrderedBy[1][0])))
        ? orderBy(
            node.children,
            node.childrenOrderedBy[0],
            node.childrenOrderedBy[1] as 'asc' | 'desc' | ('asc' | 'desc')[]
          )
        : orderBy(node.children, node.childrenOrderedBy)
      ).map((child) => [child, node.children.indexOf(child)])

  for (const child of nodeChildren) {
    const n = child[0] as Descendant
    const i = child[1] as number
    const p = path.concat(i)
    const key = ReactEditor.findKey(editor, n)
    const range = Editor.range(editor, p)
    const sel = selection && Range.intersection(range, selection)
    const ds = decorate([n, p])

    for (const dec of decorations) {
      const d = Range.intersection(dec, range)

      if (d) {
        ds.push(d)
      }
    }

    if (Element.isElement(n)) {
      if (node.droppable) {
        children.push(
          <IndexContext.Provider key={key.id} value={i}>
            <ElementComponent
              decorations={ds}
              element={n}
              key={key.id}
              renderElement={renderElement}
              renderLeaf={renderLeaf}
              selection={sel}
            />
          </IndexContext.Provider>
        )
      } else {
        children.push(
          <ElementComponent
            decorations={ds}
            element={n}
            key={key.id}
            renderElement={renderElement}
            renderLeaf={renderLeaf}
            selection={sel}
          />
        )
      }
    } else {
      children.push(
        <TextComponent
          decorations={ds}
          key={key.id}
          isLast={isLeafBlock && i === nodeChildren.length - 1}
          parent={node}
          renderLeaf={renderLeaf}
          text={n}
        />
      )
    }

    NODE_TO_INDEX.set(n, i)
    NODE_TO_PARENT.set(n, node)
  }

  return <React.Fragment>{children}</React.Fragment>
}

export default Children
