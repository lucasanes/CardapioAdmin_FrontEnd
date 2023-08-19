import { darkTheme, styled } from '../../stitches.config';

export const Container = styled('div', {

    width: '100%',
    maxWidth: '400px',
    height: '3rem',
    background: darkTheme.colors.loContrast,
    borderRadius: '1rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'left',
    padding: '0 1rem',

    svg: {
        paddingTop: '.1rem'
    },

});

export const Input = styled('input', {

    outline: 'none',
    border: 'none',
    background: 'none',
    marginLeft: '1rem',
    width: '100%',
    height: '90%',
    caretColor: 'White',
    color: 'White'

});