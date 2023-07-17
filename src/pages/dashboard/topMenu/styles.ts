import { styled, darkTheme } from '../../../stitches.config';

export const Container = styled('div', {
  width: '100%',
  height: '60px',
  position: 'absolute',
  top: 0,
  background: darkTheme.colors.graySideBar,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 3rem',
  gap: '5rem',
  zIndex: 1,

  "@sm": {
    gap: '3rem'
  }
});

export const Intro = styled('div', {

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1rem',

  h1: {
    color: darkTheme.colors.midContrast,
    fontSize: '1.8rem',
    fontFamily: 'Roboto',
  }

});

export const Buttons = styled('div', {

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '5rem',

  '@md': {
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
  }

});

export const Button = styled('button', {

  background: 'none',
  padding: '1rem',
  border: 'none',
  color: darkTheme.colors.midContrast,
  fontSize: '1.6rem',
  fontFamily: 'Roboto',
  fontWeight: 700,
  transition: '.2s',

  '@md': {
    fontSize: '1.8rem'
  },

  '&:hover': {
    color: darkTheme.colors.pallet2
  },

  variants: {
    active: {
      true: {
        color: darkTheme.colors.pallet2,
        cursor: 'default'
      }
    }
  }

});