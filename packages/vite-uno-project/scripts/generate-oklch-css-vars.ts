import { convertColorsToOklch } from '../src/utilities'
import { DEFAULT_COLORS } from '../src/presets/_colors/_base'

// Only extract pyr-neutral for this example
const pyrNeutral = DEFAULT_COLORS['pyr-neutral']

const oklchColors = convertColorsToOklch({ 'pyr-neutral': pyrNeutral })['pyr-neutral']

let css = ':root {\n'
for (const [key, value] of Object.entries(oklchColors)) {
  css += `  --pyr-neutral-${key}: ${value};\n`
}
css += '}'

console.log(css)