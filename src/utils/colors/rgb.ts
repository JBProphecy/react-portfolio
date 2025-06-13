////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * accepts RGB values as parameters and builds a string that can be used in a StyleSheet
 * @param r the value for red (0-255)
 * @param g the value for green (0-255)
 * @param b the value for blue (0-255)
 * @returns a string formatted for RGB in a StyleSheet
 */
export function rgb(r: number, g: number, b: number): string {
  return `rgb(${r}, ${g}, ${b})`
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
