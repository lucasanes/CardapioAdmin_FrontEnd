import { Input } from '../../components/input';
import { ToggleTheme } from '../../components/toggleTheme'
import { Button, Card, Container } from './styles'
import { useEffect, useState } from 'react'
import { MdEmail } from 'react-icons/md'
import { BiSolidLock } from 'react-icons/bi'
import { Link } from 'react-router-dom';
import Validator from '../../services/validator';
import { useAuth } from '../../contexts/auth';

export function Login({ }) {

  const [ready, setReady] = useState(false)
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const [validateError, setValidateError] = useState({ error: '', msg: '' })

  const validator = new Validator()

  const { signIn } = useAuth()

  useEffect(() => {

    setTimeout(() => {
      setReady(true)
    }, 1000);

  }, [])

  async function handleLogin(e: any) {

    e.preventDefault()

    if (validator.email(email) != null) {
      setValidateError({ error: 'email', msg: 'E-mail inválido.' })
      return
    }

    signIn(email, senha, setValidateError)

  }

  return (
    <form onSubmit={handleLogin}>
      <Container>

        <ToggleTheme style={{ position: 'absolute', top: 0, left: '1.5rem' }} />

        <Card>
          <div className='inputs'>

            <Input name='email' label='Email' valor={email} setValor={setEmail} disabled={!ready} marginBottom={3} erro={validateError.error == 'email' ? validateError.msg : ''} autoFocus>
              <MdEmail size={18} />
            </Input>

            <Input name='senha' label='Senha' type='password' valor={senha} setValor={setSenha} disabled={!ready} erro={validateError.error == 'senha' ? validateError.msg : ''}>
              <BiSolidLock size={18} />
            </Input>
          </div>

          <Link to={'/recuperar-senha'}>Esqueci minha senha</Link>

          <Button type='submit'>ENTRAR</Button>

          <div className='signup'>
            <span className='span'>Não tem uma conta? </span>
            <Link to={'/cadastro'}> Registre-se</Link>
          </div>

        </Card>

      </Container>
    </form>
  );
}