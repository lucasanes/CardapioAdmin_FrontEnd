import 'swiper/css';
import { useAuth } from '../../contexts/auth';
import { api } from '../../services/api';
import * as S from './styles'
import { VerticalMenu } from './verticalMenu';
import { useEffect, useState } from 'react';
import { CategoriasProps } from './types';
import { Categoria } from './categoria';
import { AiOutlinePlus } from 'react-icons/ai';
import { Search } from '../../components/search';
import { Modal } from '../../components/modal';
import { ModalCreateCategoria } from '../../components/modals/modalCreateCategoria';
import { Produtos } from './produtos';
import { ModalCreateProduto } from '../../components/modals/modalCreateProduto';

export function Dashboard() {

  const [categorias, setCategorias] = useState<Array<CategoriasProps>>([])
  const [categoriasMostradas, setCategoriasMostradas] = useState<Array<CategoriasProps>>([])

  const [body, setBody] = useState(0)
  const [isLow, setIsLow] = useState(0)

  const [modalCreateCategoriaIsOpen, setModalCreateCategoriaIsOpen] = useState(false)
  const [modalCreateProdutoIsOpen, setModalCreateProdutoIsOpen] = useState(false)

  const [search, setSearch] = useState<string>('')

  const { token } = useAuth()

  useEffect(() => {

    if (innerWidth < 500) {
      setIsLow(2)
    } else if (innerWidth < 950) {
      setIsLow(1)
    } else {
      setIsLow(0)
    }

    async function fetchData() {
      const response = await api.get(`/etc/restaurante/${token}`)
      setCategorias(response.data.categorias)
      setCategoriasMostradas(response.data.categorias)
    }

    fetchData()

  }, [])

  useEffect(() => {

    function replaceSpecialChars(str: string) {

      str = str.replace(/[ÀÁÂÃÄÅ]/, "A");
      str = str.replace(/[àáâãäå]/, "a");
      str = str.replace(/[ÈÉÊË]/, "E");
      str = str.replace(/[Ç]/, "C");
      str = str.replace(/[ç]/, "c");

      return str.replace(/[^a-z0-9]/gi, '');

    }

    if (body == 0) {
      if (search != '') {
        setCategoriasMostradas(categorias.filter(categoria => replaceSpecialChars(categoria.nome.toLowerCase()).includes(replaceSpecialChars(search.toLowerCase()))))
      } else {
        setCategoriasMostradas(categorias)
      }
    }

    if (body == 1) {
      if (search != '') {
        const newData = categorias.map(categoria => {
          const updateProdutos = categoria.produtos.filter(produto => replaceSpecialChars(produto.nome.toLowerCase()).includes(replaceSpecialChars(search.toLowerCase())))
          return { ...categoria, produtos: updateProdutos }
        })
        setCategoriasMostradas(newData)
      } else {
        setCategoriasMostradas(categorias)
      }
    }

  }, [search, categorias])

  useEffect(() => {
    setSearch('')
  }, [body])

  window.addEventListener('resize', () => {
    if (innerWidth < 500) {
      setIsLow(2)
    } else if (innerWidth < 950) {
      setIsLow(1)
    } else {
      setIsLow(0)
    }
  })

  return (
    <S.Container>

      <Modal isOpen={modalCreateCategoriaIsOpen} setOpen={setModalCreateCategoriaIsOpen}>
        <ModalCreateCategoria setClose={() => setModalCreateCategoriaIsOpen(false)} setList={setCategorias} />
      </Modal>

      <Modal isOpen={modalCreateProdutoIsOpen} setOpen={setModalCreateProdutoIsOpen}>
        <ModalCreateProduto setClose={() => setModalCreateProdutoIsOpen(false)} list={categorias} setList={setCategorias} />
      </Modal>

      <VerticalMenu setBody={setBody} />

      <S.Body>
        <S.Top>
          {isLow == 0 && <h1>{body == 0 ? 'Categorias' : 'Produtos'}</h1>}
          <Search valor={search} setValor={setSearch} />
          <S.Button onClick={() => {
            if (body == 0) {
              setModalCreateCategoriaIsOpen(true)
            } else {
              setModalCreateProdutoIsOpen(true)
            }
          }}><AiOutlinePlus size={20} />{(body == 0 && isLow != 2) ? 'Categoria' : (body == 1 && isLow != 2) && 'Produto'}</S.Button>
        </S.Top>
        {body == 0 &&
          <S.Categorias>
            {categoriasMostradas.length > 0 && categoriasMostradas.map(categoria => <Categoria setList={setCategorias} key={categoria.id} data={categoria} />)}
          </S.Categorias>
        }
        {body == 1 &&
          <S.Produtos>
            {categoriasMostradas.length > 0 && categoriasMostradas.map(categoria => <Produtos setList={setCategorias} key={categoria.id} data={categoria} />)}
          </S.Produtos>
        }
      </S.Body>

    </S.Container>
  );
}