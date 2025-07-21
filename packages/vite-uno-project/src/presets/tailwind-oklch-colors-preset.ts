import { colors as tailwindColors } from '@unocss/preset-wind4/colors'
/* this is the only way to get oklch colors - setting it as color key will do rbg, a bug.*/
export const tailwindOKLCHColorsPreset = () => {
  return {
    name: 'tailwind-oklch-colors',
    theme: {
      colors: {
        ...tailwindColors,
        // Define primary color as blue for button consistency
        primary: tailwindColors.blue,
      },
    },
  }
}

export default tailwindOKLCHColorsPreset
