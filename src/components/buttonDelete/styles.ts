import { styled } from '../../stitches.config';

export const Container = styled('div', {

  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'none',
    border: '1px solid transparent',
    borderRadius: '5px',
    padding: '.25rem',
    color: '#ff0000',
    transition: '.2s',

  },

  'button:hover': {
    border: '1px solid #ff0000'
  }

});