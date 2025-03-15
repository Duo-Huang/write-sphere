import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import svgr from 'vite-plugin-svgr'
// import { analyzer } from 'vite-bundle-analyzer'
import iconTypes from './vite-plugin-icon-types'

const pathSrc = path.resolve(__dirname, 'src')

// https://vite.dev/config/
export default defineConfig({
    server: {
        host: '0.0.0.0'
    },

    plugins: [
        react(),
        svgr({
            svgrOptions: {
                icon: true,
            },
            include: '**/*.svg?react'
        }),
        iconTypes(),
        // analyzer()
    ],

    base: './',
    envDir: './env',
    envPrefix: 'APP',
    resolve: {
        alias: [
            { find: '@', replacement: pathSrc }, // don't use 'src' directly, it can cause bugs
        ],
    },
    build: {
        rollupOptions: {
            output: {
                // manualChunks: {
                //     react: ['react', 'react-dom']
                // }
                // manualChunks(id) {

                //     if (id.includes('node_modules')) {

                //         if (id.includes('react')) {
                //             return 'vendor-react';
                //         }

                //         return 'vendor-libs';
                //     }


                //     if (id.includes('src/')) {
                //         return 'main';
                //     }
                // },

                chunkFileNames: 'assets/[name]-[hash].js',
                entryFileNames: 'assets/[name]-[hash].js',
                assetFileNames: 'assets/[name]-[hash].[ext]',
            }
        }
    }
})
