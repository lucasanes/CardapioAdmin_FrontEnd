import { darkTheme, styled } from '../../stitches.config';

export const Container = styled('div', {

  width: '100%',
  height: '100vh',
  background: darkTheme.colors.loContrast,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '2rem',

  form: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }

});

export const Card = styled('div', {

  width: '100%',
  minWidth: '300px',
  maxWidth: '500px',
  background: darkTheme.colors.gray200,
  borderRadius: '1rem',
  padding: '5rem 3rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',

  span: {
    color: darkTheme.colors.hiContrast,
    width: 'fit-content',
    fontFamily: 'Roboto',
    fontSize: '1.4rem',
  },

  a: {
    color: darkTheme.colors.pallet,
    width: 'fit-content',
    fontFamily: 'Roboto',
    fontSize: '1.4rem',
    fontWeight: 700,
    textDecoration: 'none',
    transition: '.3s'
  },

  'a:hover': {
    filter: darkTheme.animations.linkHover
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

  variants: {
    desabilitado: {
      false: {
        '&:hover': {
          filter: darkTheme.animations.buttonHover
        }
      }
    }
  }

});