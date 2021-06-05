import { createContext, useContext } from 'react'
import { Range, NodeEntry } from 'slate'

/**
 * A React context for sharing the `decorate` prop of the editable.
 */

export const DecorateContext = createContext<{
  decorate: (entry: NodeEntry) => Range[]
  useDecorateState?: () => any
}>({
  decorate: () => []
})

/**
 * Get the current `decorate` prop of the editable.
 */

export const useDecorate = (): ({
  decorate: (entry: NodeEntry) => Range[]
  useDecorateState?: () => any
}) => {
  return useContext(DecorateContext)
}
