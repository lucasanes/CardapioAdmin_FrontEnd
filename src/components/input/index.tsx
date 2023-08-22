import { InputHTMLAttributes, useState } from 'react';
import { Container, ContainerInput, Icon, InputB, Pass } from './styles'
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string,
  valorMax?: number,
  label: string,
  type?: string,
  valor: string | number,
  setValor: React.Dispatch<React.SetStateAction<any>>,
  children?: React.ReactNode,
  erro?: string,
  marginBottom?: number,
}

export function Input({ name, valorMax, label, type = 'text', valor, setValor, children, erro, marginBottom = 0, ...rest }: InputProps) {

  const [active, setActive] = useState(false)
  const [showPass, setShowPass] = useState(false)

  return (<>
    <Container style={{ marginBottom: erro ? (marginBottom / marginBottom) + 'rem' : marginBottom + 'rem' }}>
      <ContainerInput active={active}>
        <Icon active={active}>{children}</Icon>
        <InputB
          name={name} value={valor} type={type == 'password' && showPass ? 'text' : (type == 'password') ? 'password' : 'text'} placeholder={label}
          onFocus={() => setActive(true)} onBlur={() => setActive(false)}
          onChange={(e) => {
            if (type == 'float') {
              let newValue = e.target.value.replace(/[^0-9,]/g, '')
              if (newValue.indexOf(',') !== -1) {
                const parts = newValue.split(',');
                newValue = parts[0] + ',' + parts.slice(1).join('');
              }
              if (valorMax) {
                if (Number(newValue.replace(',', '.')) <= valorMax) {
                  setValor(newValue)
                }
              } else {
                setValor(newValue)
              }
            } else if (type == 'number') {
              const newValue = e.target.value.replace(/[^0-9]/g, '')
              if (valorMax) {
                if (Number(newValue) <= valorMax) {
                  setValor(newValue)
                }
              } else {
                setValor(newValue)
              }
            } else {
              setValor(e.target.value)
            }
          }} {...rest}
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
      </ContainerInput>
      <span style={{ display: erro ? 'initial' : 'none' }}>{erro}</span>
    </Container>
  </>);
}