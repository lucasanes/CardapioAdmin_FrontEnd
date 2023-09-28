import { Input } from '../../components/input';
import { Button, Card, Container } from './styles'
import { useEffect, useState } from 'react'
import { MdEmail } from 'react-icons/md'
import { BiSolidLock, BiSolidLockOpen } from 'react-icons/bi'
import { FaUserAlt, FaUserCircle } from 'react-icons/fa'
import { IoRestaurantSharp } from 'react-icons/io5'
import Validator from '../../services/validator';
import { api } from '../../services/api';
import { toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { InputImg } from '../../components/inputImg';
import { Toggle } from '../../components/toggle';
import { HiClipboardDocumentList } from 'react-icons/hi2'

export function Cadastro({ }) {

  const [ready, setReady] = useState(false)

  const [juridica, setJuridica] = useState(false)
  const [username, setUsername] = useState('')
  const [cpf, setCpf] = useState('')
  const [cnpj, setCnpj] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [senhaConfirmada, setSenhaConfirmada] = useState('')
  const [nomeRestaurante, setNomeRestaurante] = useState('')
  const [imagem, setImagem] = useState('')
  const [codigo, setCodigo] = useState('')

  const regex = /^(?!000\.|11\.|22\.|33\.|44\.|55\.|66\.|77\.|88\.|99\.)\d{3}\.\d{3}\.\d{3}-\d{2}$/

  const [validateError, setValidateError] = useState({ error: '', msg: '' })

  const validator = new Validator()
  const navigate = useNavigate()

  useEffect(() => {

    setTimeout(() => {
      setReady(true)
    }, 1000);

  }, [])

  async function handleLogin(e: any) {

    e.preventDefault()

    const validateUsername = validator.username(username)
    const validateCPF = validator.cpf(cpf)
    const validateEmail = validator.email(email)
    const validateSenha = validator.senha(senha)
    const validateSenhaConfirm = validator.senha(senhaConfirmada)
    const validateImagem = validator.imagem(imagem, 'Seu usuário')

    if (validateUsername != null) {
      setValidateError({ error: 'username', msg: validateUsername })
      return
    }

    if (validateCPF != null) {
      setValidateError({ error: 'cpf', msg: validateCPF })
      return
    }

    if (validateImagem != null) {
      setValidateError({ error: 'imagem', msg: validateImagem })
      return
    }

    if (validateEmail != null) {
      setValidateError({ error: 'email', msg: validateEmail })
      return
    }

    if (validateSenha != null) {
      setValidateError({ error: 'senha', msg: validateSenha })
      return
    }

    if (validateSenhaConfirm != null) {
      setValidateError({ error: 'senhaConfirm', msg: validateSenhaConfirm })
      return
    }

    if (senha !== senhaConfirmada) {
      setValidateError({ error: 'senhaConfirm', msg: 'Suas senhas não coincidem.' })
      return
    }

    if (nomeRestaurante.length == 0) {
      setValidateError({ error: 'restaurante', msg: 'Seu restaurante precisa de um nome.' })
      return
    }

    if (codigo.length == 0) {
      setValidateError({ error: 'codigo', msg: 'Você precisa de um código para criar uma conta.' })
      return
    }

    setValidateError({ error: '', msg: '' })

    try {

      await api.post('/user', {
        username,
        email,
        senha,
        senhaConfirmada,
        nomeRestaurante,
        imagem,
        created_at: new Date().toLocaleString(),
        codigo
      })

      toast.success('Conta criada com sucesso!')
      navigate('/')

    } catch (e: any) {
      if (e.response.data.msg.includes('código')) {
        setValidateError({ error: 'codigo', msg: e.response.data.msg })
        return
      }
      toast.error(e.response.data.msg)
    }


  }

  return (
    <form onSubmit={handleLogin} autoComplete='off'>
      <Container>

        <Card>
          <Link to={'/'}><AiOutlineArrowLeft size={20} />Voltar para login</Link>
          <div className='inputs'>
            <Toggle span='Pessoa jurídica?' classNumber={1} style={{ marginBottom: '2rem' }} onChange={() => setJuridica(!juridica)} />
            <Input name='username' label='Nome' valor={username} setValor={setUsername} marginBottom={3}
              erro={validateError.error == 'username' ? validateError.msg : ''} autoComplete='off' disabled={!ready}>
              <FaUserAlt size={16} />
            </Input>

            {juridica ?
              <Input type='cnpj' name='cnpj' label='CNPJ' valor={cnpj} setValor={setCnpj} marginBottom={3}
                erro={validateError.error == 'cnpj' ? validateError.msg : ''} autoComplete='off' disabled={!ready}>
                <HiClipboardDocumentList size={20} />
              </Input>
              :
              <Input type='cpf' name='cpf' label='CPF' valor={cpf} setValor={setCpf} marginBottom={3}
                erro={validateError.error == 'cpf' ? validateError.msg : ''} autoComplete='off' disabled={!ready}>
                <HiClipboardDocumentList size={20} />
              </Input>
            }

            <InputImg label='Foto' valor={imagem} setValor={setImagem} marginBottom={3} autoComplete='off' disabled={!ready}
              erro={validateError.error == 'imagem' ? validateError.msg : ''}>
              <FaUserCircle size={18} />
            </InputImg>

            <Input name='email' label='Email' valor={email} setValor={setEmail} marginBottom={3}
              erro={validateError.error == 'email' ? validateError.msg : ''} autoComplete='off' disabled={!ready}>
              <MdEmail size={18} />
            </Input>

            <Input name='senha' label='Senha' type='password' valor={senha} setValor={setSenha} marginBottom={3}
              erro={validateError.error == 'senha' ? validateError.msg : ''} autoComplete='off' disabled={!ready}>
              <BiSolidLock size={18} />
            </Input>

            <Input name='senhaConfirm' label='Confirmar Senha' type='password' valor={senhaConfirmada} setValor={setSenhaConfirmada} marginBottom={3}
              erro={validateError.error == 'senhaConfirm' ? validateError.msg : ''} autoComplete='off' disabled={!ready}>
              <BiSolidLock size={18} />
            </Input>

            <Input name='restaurante' label='Nome do Restaurante' valor={nomeRestaurante} setValor={setNomeRestaurante} marginBottom={3}
              erro={validateError.error == 'restaurante' ? validateError.msg : ''} autoComplete='off' disabled={!ready}>
              <IoRestaurantSharp size={18} />
            </Input>

            <Input name='code' label='Código' type='password' valor={codigo} setValor={setCodigo}
              erro={validateError.error == 'codigo' ? validateError.msg : ''} autoComplete='off' disabled={!ready}>
              <BiSolidLockOpen size={18} />
            </Input>

          </div>

          <Button type='submit'>CADASTRAR</Button>

        </Card>

      </Container>
    </form>
  );
}