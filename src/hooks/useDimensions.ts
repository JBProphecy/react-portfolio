////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import { useEffect, useState } from "react"
import type { Dimensions } from "@/types/Dimensions"

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * a hook that uses a ResizeObserver to track the offset dimensions of an element
 * @param element - an element reference
 * @returns the dimensions of an element in pixels as an object with properties for width and height
 */
export function useDimensions(element: React.RefObject<HTMLElement>): Dimensions {
  const [dimensions, setDimensions] = useState<Dimensions>(() => {
    return {
      width: element.current?.offsetWidth || 0,
      height: element.current?.offsetHeight || 0
    }
  })

  useEffect(() => {
    if (element.current === null) { console.warn("Missing Element Reference"); return }
    const observer = new ResizeObserver(() => {
      setDimensions({
        width: element.current!.offsetWidth,
        height: element.current!.offsetHeight
      })
    })
    observer.observe(element.current)
    return () => { observer.disconnect() }
  }, [])

  return dimensions
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
