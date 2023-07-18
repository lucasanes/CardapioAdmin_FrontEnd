import { darkTheme, styled } from '../../../../stitches.config';

export const Container = styled('div', {
  minWidth: '300px',
  maxWidth: '500px',
  height: 'fit-content',
  padding: '1rem',
  border: `2px solid ${darkTheme.colors.hiContrast}`,
  borderRadius: '5px',
  display: 'flex',
  flexDirection: 'column',

  span: {
    color: darkTheme.colors.hiContrast,
    fontSize: '2rem',
    fontWeight: 700
  },

  hr: {
    margin: '.8rem -1rem',
    borderColor: darkTheme.colors.hiContrast
  },

  img: {
    width: '300px',
    height: '300px',
    objectFit: 'cover',
    margin: '1.5rem 1rem',
  }
});