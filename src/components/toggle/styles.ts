import { darkTheme, styled } from "../../stitches.config";

export const Container = styled('div', {
  height: "fit-content",
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  width: "100%",
  marginLeft: '1rem',

  variants: {
    end: {
      true: {
        justifyContent: 'flex-end',
      }
    },
  }
})

export const SpanContainer = styled('span', {
  color: darkTheme.colors.hiContrast,
  position: 'relative',
  top: '-0.5px',
  fontFamily: "'Arial', sans-serif",
  fontWeight: 100,
  fontSize: '1.6rem',
  textDecoration: 'underline',
  whiteSpace: 'nowrap',
  marginRight: '1rem'
})

export const Input = styled('input', {
  display: "none",

  '&.toggle1 + .toggleLabel1': {
    width: '3.8rem',
    height: '2.0rem',
    background: 'lightgrey',
    display: 'block',
    position: 'relative',
    borderRadius: '2rem',
    transition: 'ease 0.5s',
    cursor: 'pointer',
  },

  '&.toggle1 + .toggleLabel1:before': {
    content: "",
    position: 'absolute',
    width: '2rem',
    height: '2rem',
    background: 'white',
    display: 'block',
    borderRadius: '50%',
    right: 'unset',
    transition: 'ease 0.3s'
  },

  '&.toggle1:checked + .toggleLabel1': {
    background: '#0f67ff',
  },

  '&.toggle1:checked + .toggleLabel1:before': {
    content: "",
    transform: 'translateX(1.8rem)',
    boxShadow: '0 0.4rem 0.4rem rgb(0 0 0 / 10%)',
  },


})