import { Input } from '../../components/input';
import { ToggleTheme } from '../../components/toggleTheme'
import { Button, Card, Container } from './styles'
import { useState } from 'react'
import { MdEmail } from 'react-icons/md'
import { BiSolidLockAlt } from 'react-icons/bi'
import { Link } from 'react-router-dom';
import Validator from '../../services/validator';

export function Recovery({ }) {

  const [email, setEmail] = useState('')

  const validator = new Validator()

  async function handleRecovery(e: any) {

    e.preventDefault()

    if (validator.email(email) != null) {
      return
    }



  }

  return (
    <Container>
      <form onSubmit={handleRecovery}>

        <ToggleTheme style={{ transform: 'scale(1.5)', position: 'absolute', top: 0, left: '3.5rem' }} />

        <Card>

          <h1>Recuperar Senha</h1>

          <Input name='email' label='Email' valor={email} setValor={setEmail} autoFocus>
            <MdEmail size={18} />
          </Input>

          <Button type='submit' desabilitado={validator.email(email) != null} disabled={validator.email(email) != null}>ENVIAR</Button>

        </Card>

      </form>
    </Container>
  );
}