import { useState } from 'react';
import { Input } from '../../input';
import { InputImg } from '../../inputImg';
import { Button, Container, Footer } from './styles'
import { IoCamera } from 'react-icons/io5';
import { HiClipboardList } from 'react-icons/hi'
import { api } from '../../../services/api';
import { useAuth } from '../../../contexts/auth';
import Validator from '../../../services/validator';
import { CategoriasProps } from '../../../pages/dashboard/types';
import { Select } from '../../select';

export function ModalCreateProduto({ list, setList, setClose }: { list: CategoriasProps[], setList: React.Dispatch<React.SetStateAction<CategoriasProps[]>>, setClose: () => void }) {

  const { token } = useAuth()
  const validator = new Validator()

  const [nome, setNome] = useState('')
  const [code, setCode] = useState('')
  const [descricao, setDescricao] = useState('')
  const [preco, setPreco] = useState('')
  const [imagem, setImagem] = useState('')
  const [categoriaId, setCategoriaId] = useState(list[0].id)

  interface Varicao {
    nome: string,
    preco: string
  }

  const [variacoes, setVariacoes] = useState<Varicao[]>([])

  const [validatorError, setValidatorError] = useState({ error: '', msg: '' })

  async function createCategory(e: any) {

    e.preventDefault()

    const validatorImagem = validator.imagem(imagem, 'Seu produto')

    try {

      if (nome.length < 1) {
        setValidatorError({ error: 'nome', msg: 'Campo não preenchido.' })
        return
      }

      if (code.length < 1) {
        setValidatorError({ error: 'code', msg: 'Campo não preenchido.' })
        return
      }

      if (variacoes.length > 0) {
        let needReturn = false
        variacoes.map((variacao, i) => {
          if (variacao.nome.length < 1) {
            setValidatorError({ error: `nome${i}`, msg: 'Campo não preenchido.' })
            needReturn = true
          }

          if (variacao.preco.length < 1) {
            setValidatorError({ error: `preco${i}`, msg: 'Campo não preenchido.' })
            needReturn = true
          }
        })
        if (needReturn) {
          return
        }
      } else {
        if (preco.length < 1) {
          setValidatorError({ error: 'preco', msg: 'Campo não preenchido.' })
          return
        }
      }

      if (descricao.length < 1) {
        setValidatorError({ error: 'descricao', msg: 'Campo não preenchido.' })
        return
      }

      if (validatorImagem != null) {
        setValidatorError({ error: 'imagem', msg: validatorImagem })
        return
      }

      setValidatorError({ error: '', msg: '' })

      const nomesAdd = variacoes.map(variacao => {
        return variacao.nome
      })

      const precosAdd = variacoes.map(variacao => {
        return Number(variacao.preco)
      })

      const response = await api.post('/produto', {

        nome,
        imagem,
        code: Number(code),
        descricao,
        preco: Number(preco),
        categoriaId,
        nomesAdd,
        precosAdd,
        created_at: new Date().toLocaleString(),

      }, { headers: { Authorization: token } })

      setList((prev) => {
        const newData = prev.map(categoria => {
          if (categoria.id == categoriaId) {
            return {
              ...categoria,
              produtos: [...categoria.produtos, response.data]
            }
          } else {
            return categoria
          }
        })
        return newData
      })
      setClose()

    } catch (e: any) {
      console.log(e.response)
    }

  }

  return (
    <Container>
      <form onSubmit={createCategory}>

        <h1>Novo Produto</h1>

        <Input label='Nome' name='Categoria' valor={nome} setValor={setNome} marginBottom={2} erro={validatorError.error == 'nome' ? validatorError.msg : ''}>
          <HiClipboardList size={20} />
        </Input>

        <Input valorMax={1000} type='number' label='Código' name='Codigo' valor={code} setValor={setCode} marginBottom={2} erro={validatorError.error == 'code' ? validatorError.msg : ''}>
          <HiClipboardList size={20} />
        </Input>

        {variacoes.length == 0 && <Input valorMax={1000} type='float' label='Preço' name='Preco' valor={preco} setValor={setPreco} marginBottom={2} erro={validatorError.error == 'preco' ? validatorError.msg : ''}>
          <HiClipboardList size={20} />
        </Input>}

        {variacoes.map((variacao, i) =>
          <>
            <Input key={'nome' + i} label={'Nome Variação ' + (i + 1)} name='Categoria' valor={variacao.nome} setValor={(e) => {
              setVariacoes(rest => {
                const arrayClone = [...rest]
                const alterando = arrayClone[i]
                alterando.nome = e
                return arrayClone
              })
            }} marginBottom={2} erro={validatorError.error == `nome${i}` ? validatorError.msg : ''}>
              <HiClipboardList size={20} />
            </Input>

            <Input key={'preco' + i} valorMax={1000} type='float' label={'Preço Variação ' + (i + 1)} name='Preco' valor={variacao.preco} setValor={(e) => {
              setVariacoes(rest => {
                const arrayClone = [...rest]
                const alterando = arrayClone[i]
                alterando.preco = e
                return arrayClone
              })
            }} marginBottom={2} erro={validatorError.error == `preco${i}` ? validatorError.msg : ''}>
              <HiClipboardList size={20} />
            </Input>
          </>
        )}

        <button onClick={() => setVariacoes(rest => [...rest, { nome: '', preco: '' }])} type='button'>Adicionar variação</button>

        <Input label='Descrição' name='Descricao' valor={descricao} setValor={setDescricao} marginBottom={2} erro={validatorError.error == 'descricao' ? validatorError.msg : ''}>
          <HiClipboardList size={20} />
        </Input>

        <InputImg label='Imagem' valor={imagem} setValor={setImagem} marginBottom={2} erro={validatorError.error == 'imagem' ? validatorError.msg : ''}>
          <IoCamera size={18} />
        </InputImg>

        <Select name='Categoria' label='Categoria' valor={categoriaId} setValor={setCategoriaId} marginBottom={2}>
          {list.map((categoria) => <option key={categoria.id} value={categoria.id}>{categoria.nome}</option>)}
        </Select>

        <Footer>
          <Button type='button' onClick={setClose}>Cancelar</Button>
          <Button type='submit'>Salvar</Button>
        </Footer>
      </form>
    </Container >
  );
}