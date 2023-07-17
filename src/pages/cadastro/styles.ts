import { darkTheme, styled } from '../../stitches.config';

export const Container = styled('div', {

  width: '100%',
  height: '100vh',
  background: darkTheme.colors.loContrast,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '4rem',

});

export const Card = styled('div', {

  minWidth: '300px',
  width: '100%',
  maxWidth: '400px',
  position: 'relative',
  background: darkTheme.colors.grayNoAuth,
  borderRadius: '1rem',
  padding: '7rem 3rem 3rem 3rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',

  '.inputs': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },

  '.signup': {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: '1rem',
    gap: '.5rem'
  },

  a: {
    color: darkTheme.colors.pallet,
    width: 'fit-content',
    fontFamily: 'Roboto',
    fontSize: '1.5rem',
    fontWeight: 700,
    textDecoration: 'none',
    position: 'absolute',
    top: 27,
    transition: '.3s',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '.5rem'
  },

  'a:hover': {
    filter: darkTheme.animations.linkHover
  }

});

export const Button = styled('button', {

  background: darkTheme.colors.pallet,
  marginTop: '2rem',
  border: 'none',
  borderRadius: '.5rem',
  color: '#fff',
  fontFamily: 'Roboto',
  fontWeight: 700,
  padding: '1.5rem',
  transition: '.3s',

  '&:hover': {
    filter: darkTheme.animations.buttonHover
  }

});