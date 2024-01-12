import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { viteMockServe } from 'vite-plugin-mock'
import { fileURLToPath, URL } from 'node:url'

function resolvePaths(paths: string[]) {
  return paths.reduce((acc, path) => {
    return {
      ...acc,
      [`@${path}`]: fileURLToPath(new URL(`./src/${path}`, import.meta.url))
    }
  }, {})
}

export default defineConfig({
  plugins: [
    react(),
    viteMockServe({
      mockPath: 'mock',
      enable: true,
    }),
  ],
  resolve: {
    alias: resolvePaths([
      'elements',
      'components',
      'compositions',
      'services',
      'config',
      'assets',
      'pages'
    ]),
  }
})