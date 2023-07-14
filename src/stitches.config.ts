import { createStitches } from "@stitches/react";

export const { styled, css, keyframes, createTheme } = createStitches({
    theme: {
        colors: {
            hiContrast: 'hsl(206,10%,5%)',
            loContrast: 'hsl(206,10%,85%)',

            gray100: 'hsl(206,10%,75%)',
            gray200: 'hsl(206,10%,70%)',
            gray300: 'hsl(206,10%,65%)',
            gray400: 'hsl(206,10%,55%)',
            gray500: 'hsl(206,10%,45%)',
            gray600: 'hsl(206,10%,35%)',

            pallet: '#00748fff',

        },
        animations: {
            linkHover: 'opacity(0.7)',
            buttonHover: 'opacity(0.7)'
        }
    },
    media: {
        sm: "(min-width: 500px)",
        md: "(min-width: 800px)",
        lg: "(min-width: 950px)",
        xlg: "(min-width: 1200px)",
    }
});

export const darkTheme = createTheme({
    colors: {
        hiContrast: 'hsl(206,2%,93%)',
        loContrast: 'hsl(206,8%,8%)',

        gray100: 'hsl(206,7%,10%)',
        gray200: 'hsl(206,7%,15%)',
        gray300: 'hsl(206,7%,25%)',
        gray400: 'hsl(206,7%,35%)',
        gray500: 'hsl(206,7%,45%)',
        gray600: 'hsl(206,7%,65%)',

        pallet: '#007b80ff',

    },

    animations: {
        linkHover: 'brightness(1.5)',
        buttonHover: 'opacity(0.7)'
    }
})