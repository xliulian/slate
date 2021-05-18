// Components
export {
  RenderElementProps,
  RenderLeafProps,
  Editable,
} from './components/editable'
export { DefaultElement } from './components/element'
export { DefaultLeaf } from './components/leaf'
export { Slate } from './components/slate'

// Hooks
export { useEditor } from './hooks/use-editor'
export { useSlateStatic } from './hooks/use-slate-static'
export { useFocused } from './hooks/use-focused'
export { useReadOnly } from './hooks/use-read-only'
export { useSelected } from './hooks/use-selected'
export { useIndex } from './hooks/use-index'
export { useSlate } from './hooks/use-slate'

// Plugin
export { ReactEditor } from './plugin/react-editor'
export { withReact } from './plugin/with-react'

// Utils
export { default as Hotkeys } from './utils/hotkeys'
