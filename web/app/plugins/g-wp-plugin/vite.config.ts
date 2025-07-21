import { defineConfig } from 'vite'
import Unocss from 'unocss/vite'
import react from '@vitejs/plugin-react'
import { v4wp } from '@kucrut/vite-for-wp'

export default defineConfig({
    plugins: [
        v4wp({ 
            input: 'src/main.tsx', 
            outDir: 'dist' 
        }), 
        Unocss(), 
        react()
    ],
    server: {
        cors: true,
        host: '0.0.0.0',
        port: 5173,
        hmr: {
            host: 'localhost'
        }
    },
    build: {
        emptyOutDir: true,
        minify: false,
    },
})
