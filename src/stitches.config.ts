import { createStitches } from "@stitches/react";

export const { styled, css, keyframes, createTheme } = createStitches({
    theme: {
        colors: {
            hiContrast: 'hsl(206,10%,5%)',
            midContrast: 'hsl(0, 0%, 44%)',
            loContrast: 'hsl(206,10%,85%)',

            grayNoAuth: 'hsl(206,10%,70%)',

            grayBody: 'hsl(224, 54%, 93%)',
            graySideBar: 'hsl(0, 0%, 100%)',

            grayIcon: 'hsl(206,10%,35%)',

            pallet: 'hsl(191, 100%, 30%)',
            pallet2: 'hsl(191, 100%, 40%)',

        },
        animations: {
            linkHover: 'opacity(0.7)',
            buttonHover: 'opacity(0.7)',
            buttonBackgroundHover: 'hsla(191, 100%, 30%, .3)'
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
        midContrast: 'hsl(0, 0%, 80%)',
        loContrast: 'hsl(206,8%,8%)',

        grayNoAuth: 'hsl(206,7%,15%)',

        grayBody: 'hsl(200, 6%, 10%)',
        graySideBar: 'hsl(210, 3%, 15%)',

        grayIcon: 'hsl(206,7%,65%)',

        pallet: 'hsl(182, 100%, 25%)',
        pallet2: 'hsl(182, 100%, 25%)',

    },

    animations: {
        linkHover: 'brightness(1.5)',
        buttonHover: 'opacity(0.7)',
        buttonBackgroundHover: 'hsla(182, 100%, 25%, .3)'
    }
})