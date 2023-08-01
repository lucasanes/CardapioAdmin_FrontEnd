import { darkTheme, styled } from '../../../stitches.config';

export const Container = styled('div', {
  width: '100%',
  height: 'calc(100% - 60px)',
  overflowY: 'auto',
  padding: '2rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '4rem'
});

export const Body = styled('div', {

  display: 'grid',
  gridTemplateColumns: '1fr',
  justifyItems: 'center',
  gap: '2rem 2rem',

  '@md': {
    gridTemplateColumns: '1fr 1fr',
  },

  '@lg': {
    gridTemplateColumns: '1fr 1fr 1fr',
  },

  '@xlg': {
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
  }

});

export const Button = styled('button', {

  width: '180px',
  padding: '1rem',
  height: 'fit-content',
  background: 'none',
  border: '2px solid ' + darkTheme.colors.pallet,
  color: darkTheme.colors.pallet,
  fontWeight: 700,
  fontSize: '1.8rem',
  borderRadius: 5,
  transition: '.3s',

  '&:hover': {
    background: darkTheme.animations.buttonBackgroundHover,
  }

});