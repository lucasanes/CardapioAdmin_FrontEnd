import { createStitches } from "@stitches/react";

export const { styled, css, keyframes, createTheme } = createStitches({
    theme: {
        colors: {
            body: '#dce0ebff',
            content: '#eceef0e3',
            modal: '#f4f5f6e9',

            hiContrast: 'hsl(206,10%,5%)',
            midContrast: 'hsl(0, 0%, 46%)',
            loContrast: 'hsl(206,10%,95%)',

            icons: 'hsl(206,10%,35%)',

            pallet: 'hsl(213, 58%, 38%)',

            scrollbar: 'hsl(0, 0%, 42%)',
            scrollbarThumb: 'hsl(0, 0%, 62%)'

        },
        animations: {
            linkHover: 'opacity(0.7)',
            buttonHover: 'opacity(0.7)',
            buttonBackgroundHover: 'hsla(191, 100%, 30%, .3)'
        }
    },
    media: {
        sm: "(max-width: 550px)",
        md: "(max-width: 800px)",
        lg: "(max-width: 1000px)",
        xlg: "(max-width: 1200px)"
    }
});

export const darkTheme = createTheme({
    colors: {
        body: 'hsl(200, 6%, 10%)',
        content: 'hsl(210, 3%, 15%)',
        modal: 'hsl(210, 3%, 12%)',

        hiContrast: 'hsl(206,2%,93%)',
        midContrast: 'hsl(0, 0%, 80%)',
        loContrast: 'hsl(206,8%,8%)',

        icons: 'hsl(206,7%,65%)',

        pallet: 'hsl(213, 48%, 51%)',

        scrollbar: 'hsl(0, 0%, 22%)',
        scrollbarThumb: 'hsl(0, 0%, 42%)'

    },

    animations: {
        linkHover: 'brightness(1.5)',
        buttonHover: 'opacity(0.7)',
        buttonBackgroundHover: 'hsla(182, 100%, 25%, .3)'
    }
})