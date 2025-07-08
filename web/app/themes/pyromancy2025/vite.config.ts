import { v4wp } from '@kucrut/vite-for-wp'
import { readFileSync } from 'fs'
import { defineConfig,type ServerOptions} from 'vite'

const server:ServerOptions = {
  
    host:  'pyromancy2025.lndo.site',
    port: 5173,
    https: {
      key: readFileSync('./certs/local.key'),
      cert: readFileSync('./certs/local.crt'),
    },
    cors: {
      origin: 'https://pyromancy2025.lndo.site',
    },
  }



export default defineConfig({
server,
    plugins: [
      v4wp({
        input: 'src/index.ts',
        outDir: 'dist',
      }),
      // UnoCSS(),
      // react(),
    ],
    
    build: {
      emptyOutDir: true,
      minify: false,
    },
  })
