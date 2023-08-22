import { darkTheme, styled } from "../../../stitches.config";

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
  },

  h2: {
    color: darkTheme.colors.midContrast,
    fontSize: '1.6rem',
    margin: '1rem',
    fontWeight: 100
  },

  hr: {
    borderColor: darkTheme.colors.midContrast
  }

})

export const Header = styled('div', {

  display: 'flex',
  alignItems: 'baseline',
  justifyContent: 'space-between',
  color: 'white',

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

export const Footer = styled('div', {

  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '4rem',
  marginTop: '3rem'

});