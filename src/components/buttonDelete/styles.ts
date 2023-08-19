import { darkTheme, styled } from '../../stitches.config';

export const Container = styled('div', {
  width: '100%',
  button: {
    width: '100%',
    background: 'none',
    border: '1px solid ' + darkTheme.colors.pallet,
    borderRadius: '5px',
    padding: '.4rem',
    color: darkTheme.colors.pallet,
    transition: '.5s'
  },

  'button:hover': {
    border: '1px solid transparent',
    background: darkTheme.colors.pallet,
    color: darkTheme.colors.loContrast
  }

});