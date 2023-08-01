import { darkTheme, styled } from '../../../../stitches.config';

export const Container = styled('div', {
  width: '300px',
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
    width: '',
    height: '100%',
    objectFit: 'cover',
    margin: '1.5rem 1rem',
  }
});

export const Header = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 .5rem',

  div: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1rem'
  }
});