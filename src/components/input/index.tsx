import { InputHTMLAttributes, useState } from 'react';
import { Container, Icon, InputB, Pass } from './styles'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string,
  label: string,
  type?: string,
  valor: string | number,
  setValor: React.Dispatch<React.SetStateAction<any>>,
  children?: React.ReactNode,
}

export function Input({ name, label, type = 'text', valor, setValor, children, ...rest }: InputProps) {

  const [active, setActive] = useState(false)
  const [showPass, setShowPass] = useState(false)

  return (
    <Container active={active}>
      <Icon active={active}>{children}</Icon>
      <InputB
        name={name} type={type == 'password' && showPass ? 'text' : type} placeholder={label}
        onFocus={() => setActive(true)} onBlur={() => setActive(false)}
        onChange={(e) => setValor(e.target.value)} {...rest}
      />
      {type == 'password' &&
        <Pass type='button' onClick={() => setShowPass(!showPass)}>
          {showPass ?
            <AiFillEyeInvisible size={18} />
            :
            <AiFillEye size={18} />
          }
        </Pass>
      }
    </Container>
  );
}