import { darkTheme, styled } from '../../stitches.config';

export const Container = styled('div', {

  width: '100%',
  padding: '6rem 3rem',
  height: '100vh',
  background: darkTheme.colors.loContrast,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexDirection: 'column',

  h1: {
    color: darkTheme.colors.pallet,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '13rem',
    fontFamily: 'Roboto',
    textTransform: 'capitalize',

    '@md': {
      fontSize: '18rem',
      img: {
        width: '200px',
        height: '230px'
      }
    }
  },

  h2: {
    color: darkTheme.colors.pallet,
    fontSize: '3.6rem',
    textAlign: 'center',
    fontWeight: 700,
    fontFamily: 'Roboto',
    marginTop: '4rem',

    '@md': {
      fontSize: '5rem'
    }
  },

  h3: {
    color: darkTheme.colors.icons,
    fontSize: '1.8rem',
    fontFamily: 'Roboto',
    fontWeight: '100',
    marginTop: '1rem',

    '@md': {
      fontSize: '2.2rem'
    }
  },

});