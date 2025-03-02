import { defineConfig, defineGlobalStyles } from '@pandacss/dev';
import { createPreset } from '@park-ui/panda-preset';
import { emerald } from './src/utils';
// @ts-ignore
import sage from '@park-ui/panda-preset/colors/sage';

const globalCss = defineGlobalStyles({
    body: {
        backgroundColor: '{colors.bg.canvas}',
        color: '{colors.fg.default}',
        lineHeight: '1.2'
    }
});

export default defineConfig({
    // Whether to use css reset
    preflight: true,

    presets: [createPreset({ accentColor: emerald, grayColor: sage, radius: 'sm' })],

    // Where to look for your css declarations
    include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],

    // Files to exclude
    exclude: [],

    globalCss,

    // Useful for theme customization
    theme: {
        extend: {
            tokens: {},
            semanticTokens: {}
        }
    },

    // The output directory for your css system
    outdir: 'styled-system',
    jsxFramework: 'react'
});
