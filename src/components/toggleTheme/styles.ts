import { darkTheme, styled } from '../../stitches.config';

export const Container = styled('div', {

  width: '90px',
  height: '45px',
  zIndex: 1

})

export const Input = styled('input', {

  width: 0,
  height: 0,
  visibility: 'hidden',

});

export const Label = styled('label', {

  width: '90px',
  height: '45px',
  position: 'relative',
  display: 'block',
  background: darkTheme.colors.body,
  borderRadius: '200px',
  boxShadow: 'inset 0px 5px 20px rgba(0,0,0,0.4), inset 0px -5px 20px rgba(255,255,255,0.5)',
  cursor: 'pointer',
  transition: '0.3s',

  '&:after': {
    content: "",
    width: '35px',
    height: '35px',
    position: 'absolute',
    top: '5px',
    left: '5px',
    background: 'linear-gradient(180deg,#ffcc89,#d8860b)',
    borderRadius: '180px',
    boxShadow: '0px 5px 10px rgba(0,0,0,0.2)',
    transition: '0.3s'
  },

  '&:active:after': {
    width: '45px',
  },

  svg: {
    position: 'absolute',
    zIndex: 10,
  },

  'svg.sun': {
    left: '10.5px',
    transition: '0.3s',
    top: '10.25px',
  },

  'svg.moon': {
    left: '56.75px',
    transition: '0.3s',
    top: '12px',
  },

  variants: {
    checked: {
      true: {

        '&:after': {
          left: '85px',
          transform: 'translateX(-100%)',
          background: 'linear-gradient(180deg,#777,#3a3a3a)',
        },

      }
    }
  }

});