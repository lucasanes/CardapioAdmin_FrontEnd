import { styled } from '../../stitches.config';

export const Container = styled('div', {
  position: 'relative',

});

export const Span = styled('span', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '2rem',
  fontFamily: 'Roboto',
  gap: '.5rem',
  cursor: 'pointer',
  color: '#fff',

  '.icon': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: '.5s',
    transform: 'rotate(180deg)'
  },

  variants: {
    open: {
      true: {
        '.icon': {
          transform: 'rotate(0deg)'
        }
      }
    }
  }
});

export const Menu = styled('ul', {
  display: 'block',
  position: 'absolute',
  listStyleType: 'none',
  margin: '0px 0px 0px 0px',
  padding: 0,
  border: '1px solid grey',
  width: '150px',

  li: {
    margin: '0',
    backgroundColor: 'white',
  },

  'li:hover': {
    backgroundColor: 'lightgray'
  },

  button: {
    width: '100%',
    height: '100%',
    textAlign: 'left',
    background: 'none',
    color: '#000',
    border: 'none',
    padding: '5px',
    margin: '0',
    font: 'inherit',
    cursor: 'pointer',
  }

});