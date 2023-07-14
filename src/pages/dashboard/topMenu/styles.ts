import { styled, darkTheme } from '../../../stitches.config';

export const Container = styled('div', {
  width: '100%',
  height: '60px',
  position: 'absolute',
  top: 0,
  background: darkTheme.colors.pallet,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 3rem',
  gap: '5rem',

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
    color: '#fff',
    fontSize: '2rem',
    fontFamily: 'Roboto',
  }

});

export const Buttons = styled('div', {

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '3rem',

  '@md': {
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
  }

});

export const DropdownDiv = styled('div', {

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1rem',
  padding: '0 .5rem',

  img: {
    width: '35px',
    height: '35px',
    borderRadius: '100%',
    objectFit: 'cover',
    transition: '.2s',

    '@md': {
      width: '45px',
      height: '45px'
    }
  },

});

export const Button = styled('button', {

  background: 'none',
  border: 'none',
  color: '#fff',
  fontSize: '1.6rem',
  fontFamily: 'Roboto',
  fontWeight: 700,
  borderBottom: '2px solid transparent',
  transition: '.2s',
  paddingBottom: '.2rem',

  '@md': {
    fontSize: '2rem'
  },

  variants: {
    active: {
      true: {
        borderBottom: '2px solid #fff',
        cursor: 'default'
      },
      false: {
        '&:hover': {
          borderBottom: '2px solid #bdbdbdff',
        },
      }
    }
  }

});