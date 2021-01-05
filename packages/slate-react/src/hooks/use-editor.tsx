import { useContext } from 'react'

import { EditorContext } from './use-slate-static'

export { EditorContext }

/**
 * Get the current editor object from the React context.
 * @deprecated Use useSlateStatic instead.
 */

export const useEditor = () => {
  const editor = useContext(EditorContext)

  if (!editor) {
    throw new Error(
      `The \`useEditor\` hook must be used inside the <Slate> component's context.`
    )
  }

  return editor
}
