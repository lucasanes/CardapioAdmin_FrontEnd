import { darkTheme, styled } from '../../../stitches.config';

export const Container = styled('div', {

  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexDirection: 'column',
  gap: '2rem'

});

export const Header = styled('div', {

  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  background: darkTheme.colors.content,
  padding: '1.25rem 1.5rem',
  borderRadius: '.7rem',

  span: {
    color: darkTheme.colors.hiContrast,
    fontWeight: 700,
    fontSize: '1.8rem',
    wordBreak: 'break-word',
    overflow: 'hidden',
    display: '-webkit-box',
    '-webkit-box-orient': 'vertical',
    '-webkit-line-clamp': 2,
    textTransform: 'capitalize'
  }

});

export const Body = styled('div', {

  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  gap: '2rem'

});