import { Link } from 'react-router-dom';
import { darkTheme, styled } from '../../stitches.config';

export const Container = styled('div', {
  position: 'relative',
  height: '100%',
  display: 'flex',
  alignItems: 'center',

  img: {
    width: '35px',
    height: '35px',
    borderRadius: '100%',
    objectFit: 'cover',
    transition: '.2s',
    marginRight: '1rem',

    '@md': {
      width: '40px',
      height: '40px'
    }
  }
});

export const Span = styled('span', {
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '1.8rem',
  fontFamily: 'Roboto',
  gap: '.5rem',
  cursor: 'pointer',
  fontWeight: 700,
  color: darkTheme.colors.midContrast,

  '.icon': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: '.3s',
    transform: 'rotateX(180deg)'
  },

  variants: {
    open: {
      true: {
        '.icon': {
          transform: 'rotateX(0deg)'
        }
      }
    }
  }
});

export const Menu = styled('ul', {

  display: 'block',
  position: 'absolute',
  top: '6rem',
  left: '-4.3rem',
  listStyleType: 'none',
  width: '145px',

  li: {
    backgroundColor: darkTheme.colors.graySideBar,
  },

  '.menu-item': {
    borderBottomLeftRadius: '1rem'
  },

  '@md': {
    left: '5.3rem',
    width: '180px'
  }

});

export const Button = styled('button', {

  width: '100%',
  height: '100%',
  textAlign: 'left',
  background: 'none',
  border: 'none',
  padding: '1rem 1.5rem',
  margin: '0',
  font: 'inherit',
  cursor: 'pointer',
  fontSize: '1.6rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'left',
  fontWeight: 700,
  gap: '1rem',
  color: darkTheme.colors.midContrast,
  transition: '.3s',

  '&:hover': {
    color: darkTheme.colors.pallet2,
  },

});

export const ButtonLink = styled(Link, {

  width: '100%',
  height: '100%',
  textAlign: 'left',
  background: 'none',
  border: 'none',
  padding: '1rem 1.5rem',
  margin: '0',
  font: 'inherit',
  cursor: 'pointer',
  fontSize: '1.6rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'left',
  fontWeight: 700,
  gap: '1rem',
  color: darkTheme.colors.midContrast,
  transition: '.3s',
  textDecoration: 'none',

  '&:hover': {
    color: darkTheme.colors.pallet2,
  },

});