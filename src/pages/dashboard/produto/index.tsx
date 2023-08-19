import { ButtonDelete } from '../../../components/buttonDelete';
import { Modal } from '../../../components/modal';
import { ModalEditCategoria } from '../../../components/modals/modalEditCategoria';
import { useAuth } from '../../../contexts/auth';
import { api } from '../../../services/api';
import { CategoriasProps, ProdutosProps } from '../types';
import * as S from './styles'
import { useState } from 'react';
import { toast } from 'react-toastify';

export function Produto({ data, setList }: { data: ProdutosProps, setList: React.Dispatch<React.SetStateAction<CategoriasProps[]>> }) {

  const [modalIsOpen, setModalIsOpen] = useState(false)

  const { token } = useAuth()

  async function handleDelete() {
    try {
      await api.delete(`/produto/${data.id}`, { headers: { Authorization: token } })
      setList((prev) => {
        const newData = prev.map(categoria => {
          const updateProdutos = categoria.produtos.filter(produto => produto.id != data.id)
          return { ...categoria, produtos: updateProdutos }
        })
        return newData
      })
    } catch (e: any) {
      toast.error(e.response.data.msg)
    }
  }

  function formatPrice(price: number) {
    const formattedPrice = `R$${price.toFixed(2).replace(".", ",")}`;
    return formattedPrice
  }

  return (
    <S.Container>

      <Modal isOpen={modalIsOpen} setOpen={setModalIsOpen}>
        <ModalEditCategoria data={data} setClose={() => setModalIsOpen(false)} />
      </Modal>

      <S.Header>
        <div>
          <img src={data.imagem} />
        </div>
        <div>
          <span className='name'>{data.nome}</span>
          <span className='code'>Código: {data.code}</span>
          <p>{data.descricao}</p>
        </div>
      </S.Header>
      <S.Price>{formatPrice(data.preco)}</S.Price>

      <S.Active>
        <S.Span active={false} className={'desactive'}>Desativado</S.Span>
        <S.Span active={true} className={'active'}>Ativado</S.Span>
      </S.Active>
      <S.Buttons>
        <button>Editar</button>
        <ButtonDelete handleExecute={handleDelete} />
      </S.Buttons>
    </S.Container>
  );
}