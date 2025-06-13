////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import { useEffect, useRef, useState } from "react"
import { InputContext, type InputType } from "@/context/InputContext"

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export function InputProvider({ children }: { children: React.ReactNode }) {

  // Input State
  const lastInputType = useRef<InputType>("mouse")
  const [inputMode, setInputMode] = useState<InputType>("mouse")

  // Handle Event Functions
  const handleMouseEvent = () => {
    console.log("MOUSE EVENT")
    if (lastInputType.current !== "mouse") { setInputMode("mouse") }
    lastInputType.current = "mouse"
  }
  const handleKeyboardEvent = () => {
    console.log("KEYBOARD EVENT")
    if (lastInputType.current !== "keyboard") { setInputMode("keyboard") }
    lastInputType.current = "keyboard"
  }

  // Mouse Event Listeners
  const addMouseEventListeners = () => {
    window.addEventListener("mousemove", handleMouseEvent)
    window.addEventListener("mousedown", handleMouseEvent)
    window.addEventListener("mouseup", handleMouseEvent)
  }
  const removeMouseEventListeners = () => {
    window.removeEventListener("mousemove", handleMouseEvent)
    window.removeEventListener("mousedown", handleMouseEvent)
    window.removeEventListener("mouseup", handleMouseEvent)
  }

  // Keyboard Event Listeners
  const addKeyboardEventListeners = () => {
    window.addEventListener("keydown", handleKeyboardEvent)
    window.addEventListener("keyup", handleKeyboardEvent)
  }
  const removeKeyboardEventListeners = () => {
    window.removeEventListener("keydown", handleKeyboardEvent)
    window.removeEventListener("keyup", handleKeyboardEvent)
  }

  // Initialize
  useEffect(() => {
    addMouseEventListeners()
    addKeyboardEventListeners()
    return () => {
      removeMouseEventListeners()
      removeKeyboardEventListeners()
    }
  }, [])

  useEffect(() => { document.body.dataset.inputMode = inputMode }, [inputMode])

  // Return Context
  return (
    <InputContext.Provider value={{ inputMode }}>
      {children}
    </InputContext.Provider>
  )
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
