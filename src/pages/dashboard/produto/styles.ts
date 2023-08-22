import { darkTheme, styled } from '../../../stitches.config';

export const Container = styled('div', {

  width: '100%',
  background: darkTheme.colors.content,
  padding: '1.6rem 2rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderRadius: '1rem',
  gap: '3rem',
  flexWrap: 'wrap',

  '@sm': {
    flexDirection: 'column'
  }

});

export const Header = styled('div', {

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2rem',
  width: 'fit-content',
  maxWidth: '400px',

  '@sm': {
    flexDirection: 'column'
  },

  '.infos': {
    width: 'fit-content'
  },

  img: {
    width: '100px',
    height: 100,
    objectFit: 'cover',
    borderRadius: '100%'
  },

  '.name': {
    color: darkTheme.colors.hiContrast,
    fontWeight: 700,
    fontSize: '1.8rem',
    wordBreak: 'break-word',
    overflow: 'hidden',
    display: '-webkit-box',
    '-webkit-box-orient': 'vertical',
    '-webkit-line-clamp': 1,
    textTransform: 'capitalize',
    width: 'fit-content'
  },

  '.namesadd': {
    color: darkTheme.colors.hiContrast,
    fontSize: '1.6rem',
    wordBreak: 'break-word',
    overflow: 'hidden',
    display: '-webkit-box',
    '-webkit-box-orient': 'vertical',
    '-webkit-line-clamp': 1,
    textTransform: 'capitalize',
    width: 'fit-content',
    marginBottom: '1rem'
  },

  '.code': {
    color: darkTheme.colors.hiContrast,
    fontSize: '1.6rem',
    wordBreak: 'break-word',
    overflow: 'hidden',
    display: '-webkit-box',
    '-webkit-box-orient': 'vertical',
    '-webkit-line-clamp': 1,
    textTransform: 'capitalize',
    width: 'fit-content'
  },

  p: {
    color: darkTheme.colors.hiContrast,
    fontSize: '1.5rem',
    marginTop: '1rem',
    wordBreak: 'break-word',
    overflow: 'hidden',
    display: '-webkit-box',
    '-webkit-box-orient': 'vertical',
    '-webkit-line-clamp': 2,
    width: 'fit-content'
  }

});

export const Price = styled('span', {

  background: 'none',
  color: darkTheme.colors.hiContrast,
  border: '1px solid ' + darkTheme.colors.hiContrast,
  padding: '.5rem 1rem',
  borderRadius: '5px',
});

export const Active = styled('div', {

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

});

export const Button = styled('button', {

  width: 100,
  textAlign: 'center',
  background: darkTheme.colors.midContrast,
  color: darkTheme.colors.loContrast,
  padding: '.5rem 0rem',
  fontSize: '1.5rem',
  border: 'none',

  '@sm': {
    fontSize: '1.3rem',
    width: 80
  },

  '&.desactive': {
    borderTopLeftRadius: '1rem',
    borderBottomLeftRadius: '1rem',
  },

  '&.active': {
    borderTopRightRadius: '1rem',
    borderBottomRightRadius: '1rem',
  },

  variants: {
    active: {
      true: {
        background: darkTheme.colors.midContrast
      },
      false: {
        opacity: 0.2
      }
    }
  }

});

export const Buttons = styled('div', {

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  gap: '1rem',

  button: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    background: 'none',
    border: '1px solid ' + darkTheme.colors.pallet,
    borderRadius: '5px',
    padding: '.4rem 1.5rem .4rem 1.5rem',
    color: darkTheme.colors.pallet,
    transition: '.5s',
    gap: '.5rem',
  },

  'button:hover': {
    border: '1px solid transparent',
    background: darkTheme.colors.pallet,
    color: darkTheme.colors.loContrast
  },

  '@xlg': {
    flex: '1'
  }

});