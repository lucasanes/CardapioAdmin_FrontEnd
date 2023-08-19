import { useState } from 'react';
import { Input } from '../../input';
import { InputImg } from '../../inputImg';
import { Button, Container, Footer } from './styles'
import { IoCamera } from 'react-icons/io5';
import { HiClipboardList } from 'react-icons/hi'
import { api } from '../../../services/api';
import { useAuth } from '../../../contexts/auth';
import { toast } from 'react-toastify';
import Validator from '../../../services/validator';
import { CategoriasProps } from '../../../pages/dashboard/types';

export function ModalCreateCategoria({ setList, setClose }: { setList: React.Dispatch<React.SetStateAction<CategoriasProps[]>>, setClose: () => void }) {

  const { token } = useAuth()
  const validator = new Validator()

  const [nome, setNome] = useState('')
  const [imagem, setImagem] = useState('')

  const [validatorError, setValidatorError] = useState({ error: '', msg: '' })

  async function createCategory(e: any) {

    e.preventDefault()

    const validatorNome = validator.nomeCategoria(nome)
    const validatorImagem = validator.imagem(imagem, 'Sua categoria')

    try {

      if (validatorNome != null) {
        setValidatorError({ error: 'nome', msg: validatorNome })
        return
      }

      if (validatorImagem != null) {
        setValidatorError({ error: 'imagem', msg: validatorImagem })
        return
      }

      const response = await api.post('/categoria', {

        nome,
        imagem,
        created_at: new Date().toLocaleString(),

      }, { headers: { Authorization: token } })

      console.log(response.data)

      setList(rest => [...rest, response.data])
      setClose()

    } catch (e: any) {
      toast.error(e.response.data.msg)
      console.log(e.response)
    }

  }

  return (
    <Container>
      <form onSubmit={createCategory}>

        <h1>Nova Categoria</h1>

        <Input label='Nome' name='Categoria' valor={nome} setValor={setNome} marginBottom={2} erro={validatorError.error == 'nome' ? validatorError.msg : ''}>
          <HiClipboardList size={20} />
        </Input>

        <InputImg label='Imagem' valor={imagem} setValor={setImagem} marginBottom={2} erro={validatorError.error == 'imagem' ? validatorError.msg : ''}>
          <IoCamera size={18} />
        </InputImg>

        <Footer>
          <Button type='button' onClick={setClose}>Cancelar</Button>
          <Button type='submit'>Salvar</Button>
        </Footer>
      </form>
    </Container >
  );
}