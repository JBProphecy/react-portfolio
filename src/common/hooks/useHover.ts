////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import { InputContext, type InputContextType } from "@/common/context/InputContext"
import { useContext, useEffect, useState } from "react"

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export type HoverHook = {
  readonly isHovered: boolean
  readonly handleMouseEnter: () => void
  readonly handleMouseLeave: () => void
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export function useHover(): HoverHook {

  // Input Context
  const inputContext: InputContextType | undefined = useContext(InputContext)
  if (!inputContext) { throw new Error("Missing Input Provider") }
  const { inputMode } = inputContext

  useEffect(() => {
    if (isHovered && inputMode !== "mouse") { setIsHovered(false) }
  }, [inputMode])

  // Hover State
  const [isHovered, setIsHovered] = useState<boolean>(false)

  // Handle Mouse Events
  const handleMouseEnter = () => { setIsHovered(true) }
  const handleMouseLeave = () => { setIsHovered(false) }

  return { isHovered, handleMouseEnter, handleMouseLeave }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
