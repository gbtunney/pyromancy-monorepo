import { defineConfig } from 'vite'
import  path from 'path'

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'ViteUnoPreset',
      fileName: (format) => `vite-uno-project.${format}.js`,
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: [
       'unocss',
     //   '@unocss/core',
       // '@unocss/preset-wind4',
        // add other externals as needed
      ],
      output: {
        globals: {
         // react: 'React',
         // 'react-dom': 'ReactDOM',
        },
      },
    },
    minify: false,
    emptyOutDir: false,
  },
})
