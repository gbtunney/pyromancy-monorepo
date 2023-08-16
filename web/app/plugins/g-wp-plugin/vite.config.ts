import { defineConfig } from 'vite'
import liveReload from 'vite-plugin-live-reload'
import copy from 'rollup-plugin-copy'
import Unocss from 'unocss/vite'
import path from 'path'

import vue from '@vitejs/plugin-vue'

import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import create_config from '@kucrut/vite-for-wp'

export default create_config(
    {
        index: './src/index.ts',
        vue: './src/main.ts',
    },
    'dist',
    {
        plugins: [Unocss(), vue()],
        build: {
            emptyOutDir: true,
            minify: false,
        },
    },
)
/*import create_config from '@kucrut/vite-for-wp';

export default create_config(
	{
		main: 'js/src/main.ts',
		extra: 'js/src/extra.ts',
	},
	'js/dist',
);*/
