////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import { useRef, useState } from "react"

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export type UseKeyableProps = {
  linkedKeys: string[]
  transitionDuration: number
  holdDuration: number
  pressedAction?: () => void
  heldAction?: () => void
}

export type KeyableHook = {
  readonly isActive: boolean
  readonly handleKeyDown: (event: React.KeyboardEvent<HTMLElement>) => void
  readonly handleKeyUp: (event: React.KeyboardEvent<HTMLElement>) => void
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export function useKeyable(props: UseKeyableProps): KeyableHook {

  // Process Props
  const {
    linkedKeys,
    transitionDuration,
    holdDuration,
    pressedAction,
    heldAction
  } = props

  // Action Functions
  const handlePressedAction = () => { if (pressedAction) { pressedAction() }}
  const handleHeldAction = () => { if (heldAction) { heldAction() }}

  // Visual States
  const [isActive, setIsActive] = useState<boolean>(false)

  // Logical References
  const isKeyPressed = useRef<boolean>(false)
  const isTransitioning = useRef<boolean>(false)
  const transitionTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const holdTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const isHolding = useRef<boolean>(false)

  // Key Functions

  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    if (isKeyPressed.current && event.key === "Tab") { event.preventDefault() }
    if (!isKeyPressed.current && linkedKeys.includes(event.key)) {
      isKeyPressed.current = true
      if (!isTransitioning.current) {
        transitionToActiveState()
      }
    }
  }

  const handleKeyUp = (event: React.KeyboardEvent<HTMLElement>) => {
    if (isKeyPressed.current && linkedKeys.includes(event.key)) {
      isKeyPressed.current = false
      if (isHolding.current) {
        isHolding.current = false
        clearHoldTimer()
        transitionToNormalState()
        handlePressedAction()
      }
    }
  }

  // Transition Functions

  const transitionToActiveState = () => {
    setIsActive(true)
    isTransitioning.current = true
    transitionTimer.current = setTimeout(() => {
      isTransitioning.current = false
      clearTransitionTimer()
      if (!isKeyPressed.current) {
        transitionToNormalState()
        handlePressedAction()
      }
      else {
        isHolding.current = true
        holdTimer.current = setTimeout(() => {
          isHolding.current = false
          clearHoldTimer()
          transitionToNormalState()
          handleHeldAction()
        }, holdDuration)
      }
    }, transitionDuration + 150)
  }

  const transitionToNormalState = () => {
    setIsActive(false)
    isTransitioning.current = true
    transitionTimer.current = setTimeout(() => {
      isTransitioning.current = false
    }, transitionDuration)
  }

  // Clear Timer Functions

  const clearTransitionTimer = () => {
    if (transitionTimer.current) { clearTimeout(transitionTimer.current) }
    transitionTimer.current = null
  }

  const clearHoldTimer = () => {
    if (holdTimer.current) { clearTimeout(holdTimer.current) }
    holdTimer.current = null
  }

  // Return Hook Contents
  return { isActive, handleKeyDown, handleKeyUp }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
