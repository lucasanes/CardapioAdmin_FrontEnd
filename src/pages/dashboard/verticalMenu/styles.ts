import { styled, darkTheme } from '../../../stitches.config';

export const Container = styled('div', {
  minWidth: '250px',
  width: '250px',

  height: '100%',
  background: darkTheme.colors.body,
  display: 'flex',
  alignItems: 'flex-start',
  flexDirection: 'column',
  padding: '2rem',
  gap: '2rem',

  '@sm': {
    minWidth: '170px',
    width: '170px',
  }
});

export const Logo = styled('div', {

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  span: {
    fontSize: '2rem',
    fontWeight: 700
  },

  img: {
    marginRight: '.5rem'
  },

  '.span1': {
    color: darkTheme.colors.hiContrast
  },

  '.span2': {
    color: darkTheme.colors.pallet
  }

});

export const Account = styled('div', {

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  alignSelf: 'center',
  gap: '1rem',
  padding: '0 2rem',

  div: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1rem'
  },

  span: {
    fontSize: '1.8rem',
    color: darkTheme.colors.midContrast,
    wordBreak: 'break-word',
    textAlign: 'center'
  },

  img: {
    width: '60px',
    height: '60px',
    objectFit: 'cover',
    borderRadius: '100%'
  },

  button: {
    border: '1px solid ' + darkTheme.colors.pallet,
    color: darkTheme.colors.pallet,
    background: 'none',
    padding: '.3rem .7rem',
    borderRadius: '1rem',
    fontSize: '1.2rem',
    transition: '.5s'
  },

  'button:hover': {
    border: '1px solid transparent',
    background: darkTheme.colors.pallet,
    color: darkTheme.colors.loContrast
  }

});

export const Bar = styled('div', {
  width: '100%',
  height: 'calc(100% - 60px)',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  paddingTop: '2rem',
  background: darkTheme.colors.content,
  borderRadius: '1.5rem',
  gap: '2rem',
  overflow: 'hidden',

  '.cut': {
    width: '100%',
    minHeight: '7px',
    background: darkTheme.colors.body
  }
});

export const CategoriasMenu = styled('div', {
  height: 'calc(100% - 130px)',
  overflow: 'hidden',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start ',
  flexDirection: 'column',
});

export const Buttons = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  gap: '1rem',
  marginBottom: '3rem'
});

export const Categorias = styled('div', {
  height: 'calc(100% - 170px)',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',
  overflowY: 'scroll',
  padding: '0 2rem'
});


export const Button = styled('button', {
  width: '80%',
  justifyContent: 'flex-start',
  height: '36px',
  display: 'flex',
  alignItems: 'center',
  gap: '1.5rem',
  border: `1px solid ${darkTheme.colors.pallet}`,
  borderStyle: 'dashed',
  background: 'none',
  color: darkTheme.colors.pallet,
  padding: '.7rem .7rem .7rem 2.5rem',
  borderRadius: '1rem',
  transition: '.5s',

  '@sm': {
    justifyContent: 'center',
    paddingLeft: '0.7rem'
  },

  '&:hover': {
    border: '1px solid transparent',
    background: darkTheme.colors.pallet,
    color: darkTheme.colors.loContrast
  }
});