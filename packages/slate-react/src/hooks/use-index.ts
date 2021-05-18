import { createContext, useContext } from 'react'

/**
 * A React context for sharing the `selected` state of an element.
 */

export const IndexContext = createContext(0)

/**
 * Get the current `selected` state of an element.
 */

export const useIndex = (): number => {
  return useContext(IndexContext)
}
