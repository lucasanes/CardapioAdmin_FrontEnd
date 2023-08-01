import { Container } from './styles'
import { MdModeEdit } from 'react-icons/md';
import { ButtonHTMLAttributes } from 'react'

interface ButtonEditProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: number,
}

export function ButtonEdit({ size = 20, ...rest }: ButtonEditProps) {
  return (
    <Container {...rest} type='button'>
      <MdModeEdit size={size} />
    </Container>
  );
}