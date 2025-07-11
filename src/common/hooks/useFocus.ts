////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import { useState } from "react"

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export type FocusHook = {
  readonly isFocused: boolean
  readonly handleFocus: () => void
  readonly handleBlur: () => void
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export function useFocus(): FocusHook {

  // Focus State
  const [isFocused, setIsFocused] = useState<boolean>(false)

  // Handle Mouse Events
  const handleFocus = () => { setIsFocused(true) }
  const handleBlur = () => { setIsFocused(false) }

  return { isFocused, handleFocus, handleBlur }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
