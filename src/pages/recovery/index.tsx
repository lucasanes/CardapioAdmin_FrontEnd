import { Input } from '../../components/input';
import { Button, ButtonAgain, Card, Container, LinkButton } from './styles'
import { useState } from 'react'
import { MdEmail } from 'react-icons/md'
import { Link, useNavigate } from 'react-router-dom';
import Validator from '../../services/validator';
import { api } from '../../services/api';
import { toast } from 'react-toastify';
import { BiSolidLock, BiSolidLockOpen } from 'react-icons/bi';

export function Recovery({ }) {

  const [id, setId] = useState('')
  const [step, setStep] = useState(0)
  const [email, setEmail] = useState('')
  const [code, setCode] = useState('')
  const [senha, setSenha] = useState('')
  const [senhaConfirmada, setSenhaConfirmada] = useState('')

  const [validateError, setValidateError] = useState({ error: '', msg: '' })
  const [expired, setExpired] = useState(false)

  const validator = new Validator()
  const navigate = useNavigate()

  function validatedCode(date1: string, date2: string) {

    const horario1 = date1.split(',')[1]
    const horario2 = date2.split(',')[1]

    const [hora1, minuto1, segundo1] = horario1.split(':');
    const [hora2, minuto2, segundo2] = horario2.split(':');

    const totalSegundos1 = parseInt(hora1) * 3600 + parseInt(minuto1) * 60 + parseInt(segundo1);
    const totalSegundos2 = parseInt(hora2) * 3600 + parseInt(minuto2) * 60 + parseInt(segundo2);

    const diferencaSegundos = Math.abs(totalSegundos1 - totalSegundos2);

    if (diferencaSegundos >= 300) {
      return false;
    } else {
      return true;
    }
  }

  async function handleRecoverySend(e: any) {

    e.preventDefault()

    try {

      if (expired) {
        setExpired(false)
      }

      if (validator.email(email) != null) {
        setValidateError({ error: 'email', msg: 'E-mail inválido.' })
        return
      }

      await api.post('/etc/sendrecovery', { email, created_at: new Date().toLocaleString() })

      toast.success('E-mail enviado com sucesso!')
      toast.warning('O código enviado tem uma validade de 5 minutos.')
      setStep(1)

    } catch (e: any) {

      setValidateError({ error: 'email', msg: e.response.data.msg })

    }

  }

  async function handleRecoveryGet(e: any) {

    e.preventDefault()

    if (code.length != 6) {
      return
    }

    try {

      const response = await api.post('/etc/getrecovery', { code: code.toUpperCase(), email })

      const hora = response.data.created_at
      const horaAtual = new Date().toLocaleString()

      if (!validatedCode(hora, horaAtual)) {
        setValidateError({ error: 'codigo', msg: 'Este código foi expirado.' })
        setExpired(true)
        return
      }

      setId(response.data.id)

      toast.success('Código verificado com sucesso!')
      setStep(2)

    } catch (e: any) {
      setValidateError({ error: 'codigo', msg: e.response.data.msg })
    }

  }

  async function handleUpdate(e: any) {

    e.preventDefault()

    const validSenha = validator.senha(senha)
    const validSenhaConfirm = validator.senha(senhaConfirmada)

    if (validSenha != null) {
      setValidateError({ error: 'senha', msg: validSenha })
      return
    }

    if (validSenhaConfirm != null) {
      setValidateError({ error: 'senhaConfirm', msg: validSenhaConfirm })
      return
    }

    if (senha !== senhaConfirmada) {
      setValidateError({ error: 'senhaConfirm', msg: 'Suas senhas não coincidem.' })
      return
    }

    try {

      await api.put(`/user/pass/${id}`, { senha, senhaConfirmada })

      toast.success('Senha alterada com sucesso!')
      navigate('/')

    } catch (e: any) {

      toast.error(e.response.data.msg)

    }

  }

  async function deleteRecovery(e: any) {

    e.preventDefault()

    try {

      await api.delete(`/etc/deleterecovery/${email}`)
      navigate('/')

    } catch (e: any) { navigate('/') }

  }

  return (
    <Container>

      <form style={{ display: step == 0 ? 'flex' : 'none' }} onSubmit={handleRecoverySend}>


        <Card>

          <h1>Enviar E-mail</h1>

          <Input name='email' label='Email' valor={email} setValor={setEmail} erro={validateError.error == 'email' ? validateError.msg : ''} autoFocus>
            <MdEmail size={18} />
          </Input>

          <Button type='submit'>ENVIAR</Button>
          <Link to={'/'}>Voltar</Link>

        </Card>

      </form>

      <form style={{ display: step == 1 ? 'flex' : 'none' }} onSubmit={handleRecoveryGet}>

        <Card>

          <h1>Insira o código</h1>

          <Input name='code' label='Código' defaultValue={code} valor={code} setValor={setCode} erro={validateError.error == 'codigo' ? validateError.msg : ''} autoComplete='off' autoFocus>
            <BiSolidLockOpen size={18} />
          </Input>
          {expired && <ButtonAgain onClick={handleRecoverySend}>Enviar código novamente</ButtonAgain>}

          <Button type='submit' disabled={code.length != 6}>ENVIAR</Button>
          <LinkButton onClick={deleteRecovery}>Voltar</LinkButton>

        </Card>

      </form>

      <form style={{ display: step == 2 ? 'flex' : 'none' }} onSubmit={handleUpdate}>

        <Card>

          <h1>Alterar senha</h1>

          <Input name='senha' type='password' label='Senha' valor={senha} setValor={setSenha} erro={validateError.error == 'senha' ? validateError.msg : ''} autoComplete='off' autoFocus>
            <BiSolidLock size={18} />
          </Input>

          <Input name='senha' type='password' label='Confirmar Senha' valor={senhaConfirmada} erro={validateError.error == 'senhaConfirm' ? validateError.msg : ''} setValor={setSenhaConfirmada} autoComplete='off'>
            <BiSolidLock size={18} />
          </Input>

          <Button type='submit'>SALVAR</Button>
          <Link to={'/'}>Voltar</Link>

        </Card>

      </form>

    </Container>
  );
}