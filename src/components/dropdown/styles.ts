import { darkTheme, styled } from '../../stitches.config';

export const Container = styled('div', {
  width: '100%',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column'
});

export const Span = styled('span', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '1.8rem',
  fontFamily: 'Roboto',
  gap: '.5rem',
  cursor: 'pointer',
  fontWeight: 700,
  color: darkTheme.colors.midContrast,
  wordBreak: 'break-word',

  '.icon': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: '.3s',
    transform: 'rotateZ(-90deg)'
  },

  variants: {
    open: {
      true: {
        '.icon': {
          transform: 'rotateZ(0deg)'
        }
      }
    }
  }
});

export const Menu = styled('ul', {

  padding: '1rem 0 .5rem 0',
  gap: '2rem',
  width: '100%',

});

export const Button = styled('button', {

  width: '100%',
  height: '100%',
  background: 'none',
  border: 'none',
  padding: '1rem 1.5rem',
  cursor: 'pointer',
  fontSize: '1.6rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1rem',
  color: darkTheme.colors.midContrast,
  transition: '.3s',

  '&:hover': {
    color: darkTheme.colors.pallet,
  },

});