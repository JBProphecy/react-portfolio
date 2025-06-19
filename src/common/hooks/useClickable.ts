////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import { useRef, useState } from "react"

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export type UseClickableProps = {
  transitionDuration: number
  holdDuration: number
  pressedAction?: () => void
  heldAction?: () => void
}

export type ClickableHook = {
  readonly isActive: boolean
  readonly handleMouseEnter: () => void
  readonly handleMouseLeave: () => void
  readonly handleMouseDown: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void
  readonly handleMouseUp: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void
}

// works perfectly but I don't know how, I deleted stuff in the transition function

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export function useClickable(props: UseClickableProps): ClickableHook {

  // Process Props
  const {
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
  const isHovered = useRef<boolean>(false)
  const isMousePressed = useRef<boolean>(false)
  const isTransitioning = useRef<boolean>(false)
  const transitionTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const holdTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
  const isHolding = useRef<boolean>(false)

  // Mouse Functions

  const handleMouseDown = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (!isMousePressed.current && event.button === 0) {
      isMousePressed.current = true
      if (!isTransitioning.current) {
        transitionToActiveState()
      }
    }
  }

  const handleMouseUp = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (isMousePressed.current && event.button === 0) {
      isMousePressed.current = false
      if (isHolding.current) {
        isHolding.current = false
        clearHoldTimer()
        transitionToNormalState()
        handlePressedAction()
      }
    }
  }

  const handleMouseEnter = () => {
    isHovered.current = true
  }

  const handleMouseLeave = () => {
    isHovered.current = false
    isMousePressed.current = false
    if (isHolding.current) {
      isHolding.current = false
      clearHoldTimer()
      transitionToNormalState()
    }
  }

  // Transition Functions

  const transitionToActiveState = () => {
    setIsActive(true)
    isTransitioning.current = true
    transitionTimer.current = setTimeout(() => {
      isTransitioning.current = false
      clearTransitionTimer()
      if (isHovered.current) {
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
    }, transitionDuration + 150)
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
  return { isActive, handleMouseEnter, handleMouseLeave, handleMouseDown, handleMouseUp }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
