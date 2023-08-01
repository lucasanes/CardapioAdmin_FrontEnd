import { styled } from '../../stitches.config';

export const Container = styled('button', {

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'none',
  border: '1px solid transparent',
  borderRadius: '5px',
  padding: '.25rem',
  color: '#ffd500',
  transition: '.2s',

  '&:hover': {
    border: '1px solid #ffd500'
  }

});