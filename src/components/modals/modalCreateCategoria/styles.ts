import { darkTheme, styled } from '../../../stitches.config';

export const Container = styled('div', {

  background: darkTheme.colors.modal,
  padding: '3rem 2rem',
  borderRadius: '1rem',

  form: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },

  h1: {
    color: darkTheme.colors.hiContrast,
    fontSize: '2rem',
    marginBottom: '3rem'
  }

});

export const Footer = styled('div', {

  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '4rem',
  marginTop: '1rem'

});

export const Button = styled('button', {

  width: '9rem',
  padding: '.7rem 0',
  background: 'none',
  border: '1px solid ' + darkTheme.colors.pallet,
  borderRadius: '5px',
  color: darkTheme.colors.pallet,
  fontWeight: 100,
  transition: '.3s',

  '&:hover': {
    background: darkTheme.colors.pallet,
    color: darkTheme.colors.loContrast,
    border: '1px solid transparent'
  }

});