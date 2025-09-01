export const defaultValues = {
  name: 'monster',
  hex: '#53776b',
};

/**
 * Converts hex color to HSL
 */
const hexToHsl = (hex: string): [number, number, number] => {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const diff = max - min;

  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (diff !== 0) {
    s = l > 0.5 ? diff / (2 - max - min) : diff / (max + min);

    switch (max) {
      case r:
        h = (g - b) / diff + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / diff + 2;
        break;
      case b:
        h = (r - g) / diff + 4;
        break;
    }
    h /= 6;
  }

  return [h * 360, s * 100, l * 100];
};

/**
 * Converts HSL to hex color
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
}: {
  hex: string;
}): Record<number, string> => {
  const normalizedHex = hex.toLowerCase();
  const [hue, saturation, lightness] = hexToHsl(normalizedHex);

  // Tailwind scale positions
  const positions = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

  // Determine which position the input color should occupy based on its lightness
  let targetPosition = 500; // default middle position

  if (lightness >= 85) targetPosition = 50;
  else if (lightness >= 75) targetPosition = 100;
  else if (lightness >= 65) targetPosition = 200;
  else if (lightness >= 55) targetPosition = 300;
  else if (lightness >= 45) targetPosition = 400;
  else if (lightness >= 35) targetPosition = 500;
  else if (lightness >= 25) targetPosition = 600;
  else if (lightness >= 18) targetPosition = 700;
  else if (lightness >= 12) targetPosition = 800;
  else if (lightness >= 8) targetPosition = 900;
  else targetPosition = 950;

  const scale: Record<number, string> = {};

  // Start by placing the exact input color at its target position
  scale[targetPosition] = normalizedHex;

  // Generate lightness values for each position
  const lightnessMap: Record<number, number> = {
    50: Math.max(lightness + (95 - lightness) * 0.8, 88),
    100: Math.max(lightness + (90 - lightness) * 0.7, 82),
    200: Math.max(lightness + (80 - lightness) * 0.6, 70),
    300: Math.max(lightness + (70 - lightness) * 0.5, 58),
    400: Math.max(lightness + (60 - lightness) * 0.4, 46),
    500: lightness,
    600: Math.max(lightness - (lightness - 35) * 0.2, 32),
    700: Math.max(lightness - (lightness - 25) * 0.4, 22),
    800: Math.max(lightness - (lightness - 15) * 0.6, 13),
    900: Math.max(lightness - (lightness - 8) * 0.8, 7),
    950: Math.max(lightness - (lightness - 5) * 0.9, 4),
  };

  // Set the exact lightness for the target position
  lightnessMap[targetPosition] = lightness;

  // Adjust values above target position to be lighter with proper spacing
  for (let i = positions.indexOf(targetPosition) - 1; i >= 0; i--) {
    const pos = positions[i];
    const nextPos = positions[i + 1];
    const minLightness = lightnessMap[nextPos] + 4; // Ensure at least 4% difference
    lightnessMap[pos] = Math.max(lightnessMap[pos], minLightness);

    // Cap at reasonable maximums to avoid pure white
    if (pos === 50) lightnessMap[pos] = Math.min(lightnessMap[pos], 95);
    else if (pos === 100) lightnessMap[pos] = Math.min(lightnessMap[pos], 90);
    else if (pos === 200) lightnessMap[pos] = Math.min(lightnessMap[pos], 85);
  }

  // Adjust values below target position to be darker with proper spacing
  for (
    let i = positions.indexOf(targetPosition) + 1;
    i < positions.length;
    i++
  ) {
    const pos = positions[i];
    const prevPos = positions[i - 1];
    const maxLightness = lightnessMap[prevPos] - 4; // Ensure at least 4% difference
    lightnessMap[pos] = Math.min(lightnessMap[pos], maxLightness);

    // Cap at reasonable minimums to avoid pure black
    if (pos === 950) lightnessMap[pos] = Math.max(lightnessMap[pos], 4);
    else if (pos === 900) lightnessMap[pos] = Math.max(lightnessMap[pos], 7);
    else if (pos === 800) lightnessMap[pos] = Math.max(lightnessMap[pos], 12);
  }

  // Adjust saturation slightly for better visual progression
  // For grayscale colors (very low saturation), preserve the grayscale nature
  const isGrayscale = saturation < 5; // Consider colors with <5% saturation as grayscale
  const baseSaturation = isGrayscale ? saturation : Math.max(saturation, 20); // Ensure minimum saturation for color richness only for non-grayscale colors

  // Generate the scale for all positions except the target (which already has the exact input)
  positions.forEach((position) => {
    if (position === targetPosition) {
      return; // Skip - already set to exact input color
    }

    let adjustedSaturation = baseSaturation;

    // For grayscale colors, maintain the low saturation throughout the scale
    if (isGrayscale) {
      adjustedSaturation = saturation; // Keep original low saturation
    } else {
      // Slightly reduce saturation for very light colors to avoid oversaturation
      if (lightnessMap[position] > 80) {
        adjustedSaturation = baseSaturation * 0.8;
      } else if (lightnessMap[position] > 60) {
        adjustedSaturation = baseSaturation * 0.9;
      }

      // Slightly increase saturation for darker colors to maintain color richness
      if (lightnessMap[position] < 20) {
        adjustedSaturation = Math.min(baseSaturation * 1.1, 100);
      }
    }

    scale[position] = hslToHex(hue, adjustedSaturation, lightnessMap[position]);
  });

  // Final pass to ensure no duplicates by making small adjustments
  const usedColors = new Set<string>();
  const finalScale: Record<number, string> = {};

  positions.forEach((position) => {
    let color = scale[position];
    let attempts = 0;

    // If this is a duplicate and not the target position, make small adjustments
    while (
      usedColors.has(color) &&
      position !== targetPosition &&
      attempts < 10
    ) {
      const [h, s, l] = hexToHsl(color);
      // Make a small adjustment to lightness
      const adjustment = position < targetPosition ? 1 : -1;
      const newL = Math.max(4, Math.min(95, l + adjustment));
      color = hslToHex(h, s, newL);
      attempts++;
    }

    finalScale[position] = color;
    usedColors.add(color);
  });

  return finalScale;
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
