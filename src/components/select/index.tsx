import { SelectHTMLAttributes, useState, useEffect } from 'react';
import { Container, ContainerInput, InputB } from './styles'

interface InputProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string,
  label: string,
  valor: string | number,
  setValor: React.Dispatch<React.SetStateAction<any>>,
  children: React.ReactNode,
  marginBottom?: number
}

export function Select({ name, label, valor, setValor, children, marginBottom = 0, ...rest }: InputProps) {

  const [active, setActive] = useState(false)

  return (<>
    <Container style={{ marginBottom: marginBottom + 'rem' }}>
      <ContainerInput active={active}>
        <label>{label}:</label>
        <InputB
          name={name} value={valor}
          onFocus={() => setActive(true)} onBlur={() => setActive(false)}
          onChange={(e) => setValor(e.target.value)} {...rest}
        >{children}</InputB>
      </ContainerInput>
    </Container>
  </>);
}