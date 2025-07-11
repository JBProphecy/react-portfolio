////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export type HSL_String = `hsl(${number}, ${number}%, ${number}%)`;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * accepts HSL values as parameters and builds a string that can be used in a StyleSheet
 * @param h the value for hue (0-360)
 * @param s the value for saturation (0-100)
 * @param l the value for lightness (0-100)
 * @returns a string formatted for HSL in a StyleSheet
 */
export function hsl(h: number, s: number, l: number): HSL_String {
  return `hsl(${h}, ${s}%, ${l}%)`
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
