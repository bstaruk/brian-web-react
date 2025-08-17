export const defaultValues = {
  name: 'monster',
  hex: '#53776b',
  position: 500,
};

/**
 * Convert hex to HSL
 */
const hexToHsl = (hex: string): [number, number, number] => {
  // Remove # if present
  const cleanHex = hex.replace('#', '');

  // Parse RGB values
  const r = parseInt(cleanHex.substr(0, 2), 16) / 255;
  const g = parseInt(cleanHex.substr(2, 2), 16) / 255;
  const b = parseInt(cleanHex.substr(4, 2), 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h: number, s: number;

  const l = (max + min) / 2;

  if (max === min) {
    h = s = 0; // achromatic
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
      default:
        h = 0;
    }
    h /= 6;
  }

  return [h * 360, s * 100, l * 100];
};

/**
 * Convert HSL to hex
 */
const hslToHex = (h: number, s: number, l: number): string => {
  h = h / 360;
  s = s / 100;
  l = l / 100;

  const hue2rgb = (p: number, q: number, t: number): number => {
    if (t < 0) t += 1;
    if (t > 1) t -= 1;
    if (t < 1 / 6) return p + (q - p) * 6 * t;
    if (t < 1 / 2) return q;
    if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
    return p;
  };

  let r, g, b;

  if (s === 0) {
    r = g = b = l; // achromatic
  } else {
    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;
    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  const toHex = (c: number): string => {
    const hex = Math.round(c * 255).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
};

/**
 * Creates a Tailwind CSS color scale
 */
export const createColorScale = ({
  hex = defaultValues.hex,
  position = defaultValues.position,
}: {
  hex: string;
  position: number;
}): Record<number, string> => {
  const positions = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

  // Convert input hex to HSL
  const [inputHue, inputSat, inputLightness] = hexToHsl(hex);

  // Define lightness values for each position (similar to Tailwind's distribution)
  const lightnessMap: Record<number, number> = {
    50: 97,
    100: 93,
    200: 86,
    300: 77,
    400: 66,
    500: 55,
    600: 45,
    700: 36,
    800: 28,
    900: 23,
    950: 13,
  };

  // Calculate what the "base" color would be if it were at position 500
  // This ensures consistency regardless of input position
  const baseHue = inputHue;
  let baseSat = inputSat;
  let baseLightness: number;

  if (position === 500) {
    // Input is already at the standard base position
    baseLightness = inputLightness;
  } else {
    // Calculate what the lightness would be at position 500
    const inputTargetLightness = lightnessMap[position];
    const baseTargetLightness = lightnessMap[500];
    const lightnessDiff = baseTargetLightness - inputTargetLightness;

    if (lightnessDiff > 0) {
      // Base would be lighter than input - reverse the lighting interpolation
      const adjustmentFactor = position <= 200 ? 1.1 : 0.9;
      baseLightness = inputLightness + lightnessDiff / adjustmentFactor;
    } else {
      // Base would be darker than input - reverse the darkening interpolation
      const adjustmentFactor = 0.85;
      baseLightness = inputLightness + lightnessDiff / adjustmentFactor;
    }

    // Reverse any saturation adjustments that would have been applied to the input position
    if (inputLightness > 90) {
      const lightnessFactor = (98 - inputLightness) / 8;
      const satMultiplier = 0.08 + lightnessFactor * 0.25;
      baseSat = inputSat / satMultiplier;
    } else if (inputLightness > 85) {
      const lightnessFactor = (90 - inputLightness) / 5;
      const satMultiplier = 0.25 + lightnessFactor * 0.35;
      baseSat = inputSat / satMultiplier;
    } else if (inputLightness < 20) {
      const darknessFactor = inputLightness / 20;
      const satMultiplier = 0.7 + darknessFactor * 0.3;
      baseSat = inputSat / satMultiplier;
    } else if (inputLightness > 70) {
      const lightFactor = (85 - inputLightness) / 15;
      const satMultiplier = 0.5 + lightFactor * 0.4;
      baseSat = inputSat / satMultiplier;
    }
  }

  // Generate colors for all positions using the calculated base
  const colorScale: Record<number, string> = {};

  positions.forEach((pos) => {
    if (pos === position) {
      // Use exact input color for the specified position
      colorScale[pos] = hex;
    } else {
      const baseTarget = lightnessMap[500];
      const currentTarget = lightnessMap[pos];
      const lightnessDiff = currentTarget - baseTarget;

      let targetL: number;
      if (lightnessDiff > 0) {
        // Going lighter
        const adjustmentFactor = pos <= 200 ? 1.1 : 0.9;
        targetL = baseLightness + lightnessDiff * adjustmentFactor;
      } else {
        // Going darker
        const adjustmentFactor = 0.85;
        targetL = baseLightness + lightnessDiff * adjustmentFactor;
      }

      // Apply saturation adjustments
      let adjustedSat = baseSat;
      if (targetL > 90) {
        const lightnessFactor = (98 - targetL) / 8;
        adjustedSat = baseSat * (0.08 + lightnessFactor * 0.25);
      } else if (targetL > 85) {
        const lightnessFactor = (90 - targetL) / 5;
        adjustedSat = baseSat * (0.25 + lightnessFactor * 0.35);
      } else if (targetL < 20) {
        const darknessFactor = targetL / 20;
        adjustedSat = baseSat * (0.7 + darknessFactor * 0.3);
      } else if (targetL > 70) {
        const lightFactor = (85 - targetL) / 15;
        adjustedSat = baseSat * (0.5 + lightFactor * 0.4);
      }

      // Ensure values stay within bounds
      const clampedL = Math.max(8, Math.min(97, targetL));
      const clampedS = Math.max(0, Math.min(100, adjustedSat));

      const colorHex = hslToHex(baseHue, clampedS, clampedL);
      colorScale[pos] = colorHex;
    }
  });

  return colorScale;
};

/**
 * Formats a color scale object as CSS custom properties
 */
export const formatColorScaleAsCss = (
  colorScale: Record<number, string>,
  colorName: string,
): string => {
  const baseColorName = colorName.replace(/\s+/g, '-').toLowerCase();

  return Object.entries(colorScale)
    .map(([position, hex]) => `--color-${baseColorName}-${position}: ${hex};`)
    .join('\n');
};
