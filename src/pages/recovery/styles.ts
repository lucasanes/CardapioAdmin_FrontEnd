import { darkTheme, styled } from '../../stitches.config';

export const Container = styled('div', {

  width: '100%',
  height: '100vh',
  background: darkTheme.colors.body,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',

  form: {
    display: 'flex',
    justifyContent: 'center',
    margin: 'auto',
    padding: '4rem',
    overflowY: 'auto',
  }

});

export const Card = styled('div', {

  width: '100%',
  minWidth: '300px',
  maxWidth: '450px',
  height: 'fit-content',
  margin: 'auto',
  background: darkTheme.colors.content,
  borderRadius: '1rem',
  padding: '3rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',

  h1: {

    color: darkTheme.colors.hiContrast,
    fontSize: '2.1rem',
    fontFamily: 'Roboto',
    marginBottom: '2rem',
    textAlign: 'center'

  },

  a: {
    color: darkTheme.colors.pallet,
    alignSelf: 'center',
    width: 'fit-content',
    fontFamily: 'Roboto',
    fontSize: '1.6rem',
    fontWeight: 700,
    textDecoration: 'none',
    transition: '.3s'
  },

  'a:hover': {
    filter: darkTheme.animations.linkHover
  }

});

export const ButtonAgain = styled('button', {

  position: 'relative',
  bottom: 28,
  left: '100%',
  transform: 'translateX(-100%)',
  background: 'none',
  border: 'none',
  width: 'fit-content',
  borderRadius: '.5rem',
  color: darkTheme.colors.hiContrast,
  fontFamily: 'Roboto',
  fontSize: '1.4rem',
  fontWeight: 100,
  transition: '.3s',

  '&:hover': {
    filter: darkTheme.animations.buttonHover
  }

});

export const Button = styled('button', {

  background: darkTheme.colors.pallet,
  margin: '1.5rem 0',
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

export const LinkButton = styled('button', {

  color: darkTheme.colors.pallet,
  background: 'none',
  alignSelf: 'center',
  border: 'none',
  width: 'fit-content',
  fontFamily: 'Roboto',
  fontSize: '1.6rem',
  fontWeight: 700,
  transition: '.3s'

});