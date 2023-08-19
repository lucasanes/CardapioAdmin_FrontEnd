import { darkTheme, styled } from '../../stitches.config';

export const Container = styled('div', {

  width: '100%',
  height: '100vh',
  background: darkTheme.colors.body,
  display: 'flex',
  overflowX: 'hidden',
  position: 'fixed'

});

export const Body = styled('div', {

  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  flexDirection: 'column'

});

export const Categorias = styled('div', {

  width: '100%',
  margin: '2.4rem 0 2rem 0',
  paddingRight: '2rem',
  overflow: 'hidden auto',
  alignContent: 'flex-start',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 300px))',
  gap: '2rem'

});

export const Produtos = styled('div', {

  width: '100%',
  margin: '2.4rem 0 2rem 0',
  paddingRight: '2rem',
  overflow: 'hidden auto',
  alignContent: 'flex-start',
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem'

});

export const Top = styled('div', {

  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginTop: '2.5rem',
  paddingRight: '2rem',
  gap: '2rem',

  h1: {
    color: darkTheme.colors.hiContrast,
    fontSize: '2rem'
  }

});

export const Button = styled('button', {

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 'fit-content',
  background: 'none',
  border: '1px solid ' + darkTheme.colors.pallet,
  borderRadius: '5px',
  padding: '.4rem .7rem .4rem .7rem',
  color: darkTheme.colors.pallet,
  transition: '.5s',
  gap: '.5rem',

  '&:hover': {
    border: '1px solid transparent',
    background: darkTheme.colors.pallet,
    color: darkTheme.colors.loContrast
  },

});