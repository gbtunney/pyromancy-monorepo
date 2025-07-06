import { defineConfig } from 'vite'
//import UnoCSS from 'unocss/vite'
//import react from '@vitejs/plugin-react'
import { v4wp } from '@kucrut/vite-for-wp'

export default defineConfig({
    plugins: [
       v4wp({
            input: 'src/index.ts',
            outDir: 'dist'
        }),
      // UnoCSS(),
       // react()
    ],
    server: {
        host:true,
        //host: "192.168.64.1",
        port: 5173,
        strictPort: true,
        cors: {
            origin: "http://pyromancy2025.lndo.site",
            //credentials: true,
        },
       /* hmr: {
            host: "192.168.64.1",
            protocol: "ws",
        },*/
    },
    build: {
        emptyOutDir: true,
        minify: false,
    },
})
