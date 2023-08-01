import { darkTheme, styled } from '../../stitches.config';

export const Container = styled('div', {

  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '1rem',

  '.span': {
    color: '#ff0000',
  }

})

export const ContainerInput = styled('div', {
  width: '100%',
  display: 'flex',
  position: 'relative',
  borderRadius: '5px',
  background: darkTheme.colors.loContrast,
  border: '2px solid transparent',
  transition: 'ease-out .2s',

  '.separador': {
    height: '47px',
    margin: '-2px 0',
    width: '3px',
    background: darkTheme.colors.grayNoAuth
  },

  variants: {
    active: {
      true: {
        border: `2px solid ${darkTheme.colors.pallet}`,

        '.separador': {
          background: darkTheme.colors.pallet
        }
      }
    }
  }
})

export const InputA = styled('input', {
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

export const InputB = styled('label', {
  minWidth: '9rem',
  height: 'auto',
  background: "transparent",
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative',
  flexDirection: 'column',
  transition: 'background .4s',
  borderTopRightRadius: '5px',
  borderBottomRightRadius: '5px',
  margin: '-2px -2px -2px 0',

  '&:hover': {
    cursor: 'pointer',
    background: '#ffffff25'
  },

  variants: {
    progresso: {
      ni: {
        '.msg': {
          bottom: 0
        }
      }
    },
  }
})

export const SpanMsg = styled('span', {

  position: 'relative',
  bottom: '8px',
  color: '#ffffff90',
  fontSize: '1.4rem',
  textTransform: 'capitalize',

  variants: {
    msg: {
      erro: {
        color: '#ff3a3a'
      },
      enviado: {
        color: '#00ff73'
      }
    }
  }

});

export const ProgressBar = styled('span', {
  width: '85%',
  position: 'absolute',
  left: 10,
  top: 27,
  height: '1.2rem',
  borderRadius: '10px',
  backgroundColor: '#3a3a3aff',
  overflow: 'hidden',
  display: 'flex',

  variants: {
    progresso: {
      ni: {
        display: 'none'
      },
    }
  }

});

export const Progress = styled('span', {

  position: 'absolute',
  left: 0,
  top: 0,
  height: '1.2rem',
  borderRadius: '10px 0 0 10px',
  display: 'flex',
  zIndex: 3,
  transition: '0.3s',

  variants: {
    progresso: {
      i: {
        backgroundColor: '#0083e0',
      },

      f: {
        backgroundColor: '#00ff73',
      }
    }
  }

});

export const Icon = styled('div', {

  position: 'absolute',
  color: darkTheme.colors.grayIcon,
  top: '1.25rem',
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