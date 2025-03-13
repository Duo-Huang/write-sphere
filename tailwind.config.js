const { heroui } = require('@heroui/react')

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './index.html',
        './src/**/*.{js,ts,jsx,tsx,mdx}',
        './node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {},
        // colors: {
        //     'dark-400': '#3C3C3C',
        //     'dark-600': '#252526',
        //     'dark-700': '#1E1E1E',
        // },
        screens: {
            xs: '480px',
            // => @media (min-width: 480px) { ... }

            sm: '640px',
            // => @media (min-width: 640px) { ... }

            md: '768px',
            // => @media (min-width: 768px) { ... }

            lg: '1024px',
            // => @media (min-width: 1024px) { ... }

            xl: '1280px',
            // => @media (min-width: 1280px) { ... }

            '2xl': '1536px',
            // => @media (min-width: 1536px) { ... }
        },
    },
    darkMode: 'selector',
    plugins: [],
    plugins: [heroui()],
}
