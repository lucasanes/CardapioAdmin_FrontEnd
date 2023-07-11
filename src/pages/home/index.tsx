import { Input } from '../../components/input';
import { ToggleTheme } from '../../components/toggleTheme'
import { Button, Card, Container } from './styles'
import { useState } from 'react'
import { MdEmail } from 'react-icons/md'
import { BiSolidLockAlt } from 'react-icons/bi'
import { Link } from 'react-router-dom';
import Validator from '../../services/validator';
import { useAuth } from '../../contexts/auth';

export function Home({ }) {

  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const validator = new Validator()

  const { signIn } = useAuth()

  async function handleLogin(e: any) {

    e.preventDefault()

    if (senha.length < 8 || senha.length > 24 || email.length < 1 || validator.email(email) != null) {
      return
    }

    signIn(email, senha)

  }

  return (
    <Container>
      <form onSubmit={handleLogin}>

        <ToggleTheme style={{ transform: 'scale(1.5)', position: 'absolute', top: 0, left: '3.5rem' }} />

        <Card>
          <Input name='email' label='Email' valor={email} setValor={setEmail} autoFocus>
            <MdEmail size={18} />
          </Input>

          <Input name='senha' label='Senha' type='password' valor={senha} setValor={setSenha}>
            <BiSolidLockAlt size={18} />
          </Input>

          <Link to={'/recuperar-senha'}>Esqueci minha senha</Link>

          <Button type='submit' desabilitado={senha.length < 8 || senha.length > 24 || email.length < 1 || validator.email(email) != null} disabled={senha.length < 8 || senha.length > 24 || email.length < 1 || validator.email(email) != null}>ENTRAR</Button>

          <div>
            <span>Não tem uma conta? </span>
            <Link to={'/cadastro'}> Registre-se</Link>
          </div>

        </Card>

      </form>
    </Container>
  );
}