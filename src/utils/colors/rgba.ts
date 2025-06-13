////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * accepts RGBA values as parameters and builds a string that can be used in a StyleSheet
 * @param r the value for red (0-255)
 * @param g the value for green (0-255)
 * @param b the value for blue (0-255)
 * @param a the value for alpha (0-1)
 * @returns a string formatted for RGBA in a StyleSheet
 */
export function rgba(r: number, g: number, b: number, a: number): string {
  return `rgba(${r}, ${g}, ${b}, ${a})`
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
