import { styled } from '../../stitches.config';

export const Container = styled('div', {


})

export const Input = styled('input', {

  width: 0,
  height: 0,
  visibility: 'hidden',

});

export const Label = styled('label', {

  width: '60px',
  height: '30px',
  position: 'relative',
  display: 'block',
  background: '#ebebeb',
  borderRadius: '200px',
  boxShadow: 'inset 0px 5px 15px rgba(0,0,0,0.4), inset 0px -5px 15px rgba(255,255,255,0.4)',
  cursor: 'pointer',
  transition: '0.3s',

  '&:after': {
    content: "",
    width: '20px',
    height: '20px',
    position: 'absolute',
    top: '5px',
    left: '5px',
    background: 'linear-gradient(180deg,#ffcc89,#d8860b)',
    borderRadius: '180px',
    boxShadow: '0px 5px 10px rgba(0,0,0,0.2)',
    transition: '0.3s'
  },

  '&:active:after': {
    width: '30px',
  },

  svg: {
    position: 'absolute',
    zIndex: 10,
  },

  'svg.sun': {
    left: '7px',
    transition: '0.3s',
    top: '7px',
  },

  'svg.moon': {
    left: '38.5px',
    transition: '0.3s',
    top: '8px',
  },

  variants: {
    checked: {
      true: {
        background: '#242424',

        '&:after': {
          left: '55px',
          transform: 'translateX(-100%)',
          background: 'linear-gradient(180deg,#777,#3a3a3a)',
        },

      }
    }
  }

});