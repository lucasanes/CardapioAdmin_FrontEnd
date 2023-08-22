import { darkTheme, styled } from '../../stitches.config';

export const Container = styled('div', {

  width: '100%',
  display: 'flex',
  flexDirection: 'column',


});

export const ContainerInput = styled('div', {

  width: '100%',
  height: '43px',
  position: 'relative',
  borderRadius: '5px',
  background: darkTheme.colors.loContrast,
  paddingRight: '1rem',
  border: '2px solid transparent',
  transition: 'ease-out .2s',
  display: 'flex',
  alignItems: 'center',

  label: {
    paddingLeft: '1.25rem',
    background: 'none',
    border: 'none',
    outline: 'none',
    color: darkTheme.colors.icons,
  },

  variants: {
    active: {
      true: {
        border: `2px solid ${darkTheme.colors.pallet}`,
        label: {
          color: darkTheme.colors.pallet
        }
      }
    }
  }

});

export const InputB = styled('select', {

  width: '100%',
  padding: '1.25rem 1rem 1.25rem 0.5rem',
  background: 'none',
  border: 'none',
  outline: 'none',
  color: darkTheme.colors.hiContrast,

  option: {
    background: darkTheme.colors.loContrast
  },

  'option:hover': {
    background: 'red'
  }

})