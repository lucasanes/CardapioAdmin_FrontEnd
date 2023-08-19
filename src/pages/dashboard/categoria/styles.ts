import { darkTheme, styled } from '../../../stitches.config';

export const Container = styled('div', {

  height: '380px',
  background: darkTheme.colors.content,
  padding: '2rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexDirection: 'column',
  borderRadius: '1rem',

});

export const Header = styled('div', {

  width: '100%',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
  height: '45px',

  span: {
    color: darkTheme.colors.hiContrast,
    fontWeight: 700,
    fontSize: '1.8rem',
    wordBreak: 'break-word',
    overflow: 'hidden',
    display: '-webkit-box',
    '-webkit-box-orient': 'vertical',
    '-webkit-line-clamp': 2,
    textTransform: 'capitalize'
  }

});

export const Imagem = styled('div', {
  width: '100%',
  height: '70%',

  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '5px'
  }
});

export const Footer = styled('div', {

  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '1rem',
  gap: '2rem',

  button: {
    width: '100%',
    background: 'none',
    border: '1px solid ' + darkTheme.colors.pallet,
    borderRadius: '5px',
    padding: '.4rem',
    color: darkTheme.colors.pallet,
    transition: '.5s'
  },

  'button:hover': {
    border: '1px solid transparent',
    background: darkTheme.colors.pallet,
    color: darkTheme.colors.loContrast
  }

});