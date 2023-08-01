import { darkTheme, styled } from '../../stitches.config';

export const Container = styled('div', {

  width: '100%',
  display: 'flex',
  flexDirection: 'column',

  span: {
    color: '#ff0000',
    marginTop: '1rem',
  }

});

export const ContainerInput = styled('div', {

  width: '100%',
  position: 'relative',
  borderRadius: '5px',
  background: darkTheme.colors.loContrast,
  border: '2px solid transparent',
  transition: 'ease-out .2s',

  variants: {
    active: {
      true: {
        border: `2px solid ${darkTheme.colors.pallet}`
      }
    }
  }

});

export const Icon = styled('div', {

  position: 'absolute',
  color: darkTheme.colors.grayIcon,
  top: '1.15rem',
  left: 10,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  variants: {
    active: {
      true: {
        color: darkTheme.colors.pallet
      }
    }
  }

});

export const InputB = styled('input', {

  width: '100%',
  padding: '1.25rem 1rem 1.25rem 4rem',
  background: 'none',
  border: 'none',
  outline: 'none',
  color: darkTheme.colors.hiContrast,

  "&::placeholder": {
    color: darkTheme.colors.grayIcon
  }

})

export const Pass = styled('button', {

  background: 'none',
  border: 'none',
  position: 'absolute',
  top: '1.30rem',
  right: 10,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: darkTheme.colors.pallet,
  transition: '.3s',

  '&:hover': {
    filter: darkTheme.animations.linkHover
  }

});