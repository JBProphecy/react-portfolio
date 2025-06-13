////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import type { CustomProperties } from "@/types/css/CustomProperties"
import type { Dimensions } from "@/types/Dimensions"

import { toStringPX } from "@/utils/strings/toStringPX"

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * generates custom properties based on the dimensions of a component component
 * @param dimensions an object with properties for width and height
 * @returns custom properties for --componentWidth and --componentHeight
 */
export function processComponentDimensions(dimensions: Dimensions): CustomProperties {
  return {
    "--componentWidth": toStringPX(dimensions.width),
    "--componentHeight": toStringPX(dimensions.height)
  }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
