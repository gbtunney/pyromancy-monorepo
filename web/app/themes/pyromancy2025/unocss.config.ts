import {
    defineConfig,

   // presetUno,

} from 'unocss'
//import presetUna from '@una-ui/preset'
//import prefixes from '@una-ui/preset/prefixes'
//import presetGillian from './src/presets/custom-theme-preset.js'
/*export default defineConfig({
  shortcuts: [
    ['root', 'selector-[:root]:[--varname:200,0,0]']
  ],
  theme: {
    colors: {
      cv: 'rgb(var(--varname))',
    },
  },
})
*/

export default defineConfig({
    shortcuts: [
        [
            'btn',
            'px-4 py-1 rounded inline-block bg-teal-700 text-white cursor-pointer hover:bg-teal-800 disabled:cursor-default disabled:bg-gray-600 disabled:opacity-50',
        ],
        [
            'icon-btn',
            'inline-block cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-teal-600',
        ],
        //CSS ROOT VARIABLES!!
        ['root', 'selector-[:root]:[--glass-blur:blur(3px)]'],
    ],
    presets: [
        //presetUno(),
//        presetAttributify(),
       /* presetIcons({
            scale: 1.2,
            warn: true,
            collections: {
                'my-icons': {
                    // load your custom icon lazily
                    resume: () =>
                        fs.readFile('./src/svg/resume-icon.svg', 'utf-8'),
                },
                'carbon': () =>
                    import('@iconify-json/carbon/icons.json').then(
                        (i) => i.default,
                    ),
            },
        }),*/
      /*  presetTypography({
            selectorName: 'prose', // now use like `markdown markdown-gray`, `not-markdown`
            // cssExtend is an object with CSS selector as key and
            // CSS declaration block as value like writing normal CSS.
            cssExtend: {
                //this should be replaced with dark:prose-invert
                'h1,h2,h3,h4,h5,h6,a': {
                    'color': '#10b981',
                    'font-weight': '400',
                },
                'a:hover': {
                    color: '#53c7a1',
                },
            },
        }),
        presetWebFonts({
            fonts: {
                //  sans: 'DM Sans',
                // serif: 'DM Serif Display',
                mono: 'DM Mono',
            },
        }),*/
       /* presetIcons({
            scale: 1.2,
            extraProperties: {
                'display': 'inline-block',
                'vertical-align': 'middle',
            },
        }),*/
    //    presetUna(),
     //   presetGillian(),
    ],
    //transformers: [transformerDirectives(), transformerVariantGroup()],
    safelist: 'root prose prose-sm m-auto text-left'.split(' '),
})
/*


import {
    presetAttributify,
    presetIcons,
    presetUno,
    transformerDirectives,
    transformerVariantGroup,
} from 'unocss'

export default {
    presets: [
        presetUno(),
        presetAttributify(),
        presetIcons({
            scale: 1.2,
            extraProperties: {
                'display': 'inline-block',
                'vertical-align': 'middle',
            },
        }),
        presetUna(),
    ],
    extractors: [
        extratorUna({
            prefixes,
        }),
    ],
    transformers: [
        transformerDirectives(),
        transformerVariantGroup(),
    ],
}
*/
